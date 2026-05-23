# Security Policy

This repository is a public showcase. It should never contain production data, production credentials, or private institutional documents.

## Before Publishing

Run:

```bash
npm run check
```

Review every tracked file:

```bash
git status --short
git diff --cached --name-only
```

## Sensitive Materials That Must Stay Out

- Database dumps, SQL exports, CSV exports, spreadsheets, backups, and raw reports.
- Student names, emails, IDs, CVs, profile photos, grades, phone numbers, or documents.
- Company contacts, tax documents, contracts, private logos, or internal notes.
- Admin credentials, password reset scripts, SMTP credentials, API keys, tokens, and `.env` files.
- Uploaded PDFs, images, videos, and generated documents from the private system.

## If A Secret Was Ever Exposed

Rotate it. Do not rely on deletion from Git history once a credential has been committed or printed in logs.

## Reporting

Open a private issue or contact the maintainer directly. Do not publish private data in GitHub issues.
