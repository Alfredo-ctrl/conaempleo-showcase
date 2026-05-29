<!-- portfolio:start -->
<p align="center">
  <img src="assets/readme-hero.svg" alt="CONAEMPLEO Showcase banner" width="100%" />
</p>

<h1 align="center">CONAEMPLEO Showcase</h1>

<p align="center"><strong>A privacy-safe public case study for an employability platform.</strong></p>

<p align="center">
<img alt="focus: case study" src="https://img.shields.io/badge/focus-case%20study-2f80ed?style=for-the-badge&labelColor=0f2f2e" />
  <img alt="data: mock only" src="https://img.shields.io/badge/data-mock%20only-2f80ed?style=for-the-badge&labelColor=0f2f2e" />
  <img alt="security: privacy-safe" src="https://img.shields.io/badge/security-privacy-safe-2f80ed?style=for-the-badge&labelColor=0f2f2e" />
</p>

## Public Case Study

This repository is shaped as a safe showcase: architecture, interface direction, and mock flows without exposing private institutional data.

## Safety Promise

No student records, company data, admin credentials, production datasets, or internal secrets belong in this public version.

## Review Path

`npm install` then run the local scripts and inspect `SECURITY.md` for the public-safety boundary.

## Portfolio Note

This repository has its own visual identity inside the portfolio. The goal is that every project feels like a different product, not another copy of the same template.
<!-- portfolio:end -->

---

## Existing Project Notes

# CONAEMPLEO Showcase

CONAEMPLEO Showcase is a public, sanitized portfolio edition of an employment platform for students, graduates, companies, and school administrators.

This repository is designed to explain the product, architecture, security boundaries, and user flows without publishing private data, real credentials, internal exports, student files, company documents, or production source files.

![CONAEMPLEO showcase preview](assets/showcase-preview.svg)

## What This Public Edition Shows

- Student, company, and admin platform modules.
- AI-assisted employability matching concept.
- Privacy-first publication strategy for a real project.
- Mock vacancy, student, and analytics data.
- A polished bilingual web presentation for portfolio and GitHub review.
- A safety verifier that blocks obvious secrets and private data formats.

## What Is Not Included

- Real student records, company data, admin data, CVs, IDs, or uploaded documents.
- Production database dumps, CSV exports, private PDFs, backups, or media uploads.
- SMTP, database, API, or admin credentials.
- Legacy operational scripts that could mutate live access or send bulk emails.

## Run Locally

```bash
npm install
npm run check
npm run start
```

Then open:

```text
http://localhost:5188
```

Because this is a static showcase, it can also be opened directly through `index.html`.

## Repository Safety

The `tools/verify-safe-tree.js` script scans the public tree before publishing. It blocks suspicious file types and common secret patterns.

```bash
npm run check
```

For the full privacy checklist, see [docs/privacy-sanitization.md](docs/privacy-sanitization.md).

## Architecture Notes

See [docs/architecture.md](docs/architecture.md) for the platform map and public/private boundary.

## Author

Built by Alfredo Oliva as a privacy-safe public showcase for a larger employment platform concept.
