const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const ignoredDirs = new Set([".git", "node_modules", "__pycache__"]);
const blockedDirs = ["uploads", "private-data", "production-exports", "backups", "tablas", "egresados"];
const blockedExtensions = new Set([".sql", ".sqlite", ".sqlite3", ".db", ".csv", ".xlsx", ".xls", ".pdf", ".doc", ".docx", ".zip", ".rar", ".7z"]);
const secretPatterns = [
  /api[_-]?key\s*[:=]\s*['"]?(?!replace-me)[a-z0-9_\-.]{16,}/i,
  /password\s*[:=]\s*['"]?(?!replace-me).{8,}/i,
  /token\s*[:=]\s*['"]?(?!replace-me)[a-z0-9_\-.]{20,}/i,
  /smtp.*password/i,
  /-----BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY-----/i
];

const problems = [];

walk(root);

if (problems.length > 0) {
  console.error("Safe-tree verification failed:");
  problems.forEach(problem => console.error(`- ${problem}`));
  process.exit(1);
}

console.log("Safe-tree verification passed. No blocked files or obvious secrets found.");

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const relative = path.relative(root, full).replace(/\\/g, "/");
    const segments = relative.split("/");

    if (entry.isDirectory()) {
      if (segments.some(segment => blockedDirs.includes(segment.toLowerCase()))) {
        problems.push(`blocked private directory: ${relative}`);
        continue;
      }
      walk(full);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (blockedExtensions.has(extension)) {
      problems.push(`blocked file type: ${relative}`);
      continue;
    }

    if (entry.name !== ".env.example" && (entry.name === ".env" || entry.name.startsWith(".env."))) {
      problems.push(`environment file must not be committed: ${relative}`);
      continue;
    }

    if (isTextFile(extension, entry.name)) scanTextFile(full, relative);
  }
}

function isTextFile(extension, fileName) {
  return [".js", ".css", ".html", ".md", ".json", ".txt", ".example", ".svg"].includes(extension) || fileName === ".env.example" || fileName === ".gitignore";
}

function scanTextFile(file, relative) {
  const text = fs.readFileSync(file, "utf8");
  if (relative === ".env.example") return;
  if (relative === "tools/verify-safe-tree.js") return;
  secretPatterns.forEach(pattern => {
    if (pattern.test(text)) problems.push(`possible secret in ${relative}`);
  });
}
