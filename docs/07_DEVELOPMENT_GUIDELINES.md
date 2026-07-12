# Development Guidelines

## Development Principles
- Keep the code modular
- Avoid unnecessary complexity
- Prefer reusable components
- Keep accessibility in mind
- Optimize for performance
- Avoid breaking existing functionality
- Preserve the current visual identity unless improvements are approved

## Implementation Rules
Before implementing any feature:
1. Understand why the feature exists.
2. Keep consistency with the existing design system.
3. Suggest improvements if something conflicts with the brand.
4. Never make large redesigns without approval.
5. Explain technical decisions clearly.

## Code Quality Expectations
- Favor small, composable components
- Keep naming clear and domain-appropriate
- Avoid duplicated UI logic where a shared abstraction is appropriate
- Prefer explicit behavior over hidden behavior
- Keep form, navigation, and CTA flows easy to reason about

## Accessibility Expectations
- Use semantic HTML
- Support keyboard navigation
- Preserve focus visibility
- Maintain readable color contrast
- Respect reduced-motion preferences
- Make form controls understandable to assistive technologies

## Performance Expectations
- Keep bundles and animations lean
- Avoid unnecessary client-side work
- Optimize images and fonts where possible
- Reduce expensive always-on motion when it does not improve usability

## Review Checklist
Before merging a change, confirm that it:
- Matches the brand
- Improves or at least preserves clarity
- Does not introduce regressions
- Does not weaken accessibility
- Does not add avoidable complexity

## Related Documents
- [05_DESIGN_SYSTEM.md](05_DESIGN_SYSTEM.md)
- [08_CODE_ARCHITECTURE.md](08_CODE_ARCHITECTURE.md)
- [10_SECURITY_CHECKLIST.md](10_SECURITY_CHECKLIST.md)
- [11_ROADMAP.md](11_ROADMAP.md)
