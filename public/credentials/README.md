# Credentials PDFs

Place your certificate/scholarship PDF files in this folder.

They will be served at `/credentials/<filename>.pdf` and can be linked from `src/data/credentials.ts`.

## Example

1. Drop `my-udemy-cert.pdf` here.
2. In `credentials.ts`, set `pdfPath: "/credentials/my-udemy-cert.pdf"`.
3. The "View PDF" button on the Credentials section will open it in a new tab.
