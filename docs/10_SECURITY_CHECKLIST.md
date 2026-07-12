# Security Checklist

## Security Goal
Protect user trust, reduce operational risk, and keep the public website and API service safe by default.

## Current Risk Areas
- Contact form delivery relies on an external Apps Script integration
- Public-facing forms can become spam or abuse targets
- The API server is currently minimal and should maintain secure defaults as it grows
- Logging should avoid exposing sensitive values

## Checklist
### Forms and Input
- Validate all form inputs before submission
- Avoid exposing secrets in frontend code
- Rate limit or otherwise protect public submission endpoints when appropriate
- Treat external submission services as dependencies that need configuration control

### Server Hardening
- Keep CORS restrictions intentional
- Add request size limits where appropriate
- Use secure HTTP headers when the API grows beyond health checks
- Review all middleware for safe defaults before adding new endpoints

### Logging and Secrets
- Redact sensitive request data
- Keep environment variables out of version control
- Avoid logging personal data unnecessarily

### Third-Party Integrations
- Document each integration clearly
- Define ownership for each external service
- Verify delivery and failure behavior before launch

## Security Philosophy
Security should be practical and proportionate.
The goal is not to make the stack heavy; the goal is to make it trustworthy and difficult to misuse.

## Related Documents
- [07_DEVELOPMENT_GUIDELINES.md](07_DEVELOPMENT_GUIDELINES.md)
- [08_CODE_ARCHITECTURE.md](08_CODE_ARCHITECTURE.md)
- [11_ROADMAP.md](11_ROADMAP.md)
- [14_AI_INSTRUCTIONS.md](14_AI_INSTRUCTIONS.md)
