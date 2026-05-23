# Privacy Sanitization Checklist

The private CONAEMPLEO folder contains a real application footprint. A public release must be handled as a separate curated artifact, not a direct mirror.

## Removed From Public Scope

- Upload directories and generated user files.
- CSV, SQL, spreadsheet, backup, PDF, DOC, ZIP, and raw export files.
- Hardcoded database and SMTP credentials.
- Admin repair scripts, password reset helpers, test email tools, and bulk mail utilities.
- Real student, graduate, company, admin, and institutional records.
- Real media assets that could identify people, schools, companies, or documents.

## Kept In Public Scope

- High-level product story.
- Safe UI showcase.
- Mock data with fictional names and companies.
- Architecture notes.
- Security policy.
- `.env.example` placeholders.
- Automated public-tree safety check.

## Publishing Rule

When in doubt, do not publish the original file. Rebuild a safe public equivalent with fake data and a short explanation of what the private module does.

## Maintenance Rule

Every future public update should pass:

```bash
npm run check
```

If a new module needs screenshots, use anonymized or recreated mock screens.
