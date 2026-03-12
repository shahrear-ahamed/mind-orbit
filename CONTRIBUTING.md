# Contributing Guide

This repository follows structured development guidelines to maintain high code quality and consistency.

---

# Development Setup

Install dependencies:

```
pnpm install
```

Run development environment:

```
pnpm dev
```

---

# Branch Strategy

```
main        → production
develop     → active development
feature/*   → new features
fix/*       → bug fixes
refactor/*  → internal improvements
```

Examples:

```
feature/task-system
fix/authentication-error
refactor/api-layer
```

---

# Commit Convention

We follow **Conventional Commits**.

Examples:

```
feat: add workspace system
fix: resolve login issue
refactor: improve task service
docs: update README
```

---

# Pull Request Process

Before submitting a PR:

1. Ensure code compiles successfully
2. Run linting
3. Test new functionality
4. Keep PRs focused and small

Checklist:

* [ ] Code builds successfully
* [ ] Tests pass
* [ ] No unnecessary commits
* [ ] PR description added

---

# Code Style

* TypeScript preferred
* Follow project ESLint rules
* Use Prettier formatting
* Use shared components from `packages/ui`

---

# Monorepo Guidelines

Shared code must be placed inside `packages/`.

Apps must not directly duplicate logic.
