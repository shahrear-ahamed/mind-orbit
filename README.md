# 🚀 MindOrbit

**MindOrbit** is a **multi-tenant, AI-powered productivity and project management platform** designed to unify fragmented workflows into a single operational hub.

Built for **freelancers, individuals, and small teams**, MindOrbit centralizes **tasks, documentation, and payments** into a structured **workspace-centric ecosystem**.

---

# ✨ Key Features

### Workspace-Centric System

* Personal and team workspaces
* Role-based permissions
* Multi-tenant architecture

### Productivity Management

* Task management
* Project boards
* Workflow tracking

### Documentation

* Structured documentation system
* Workspace knowledge base

### Financial Tools

* Invoice generation
* Payment tracking

### AI Integration

* AI-assisted productivity tools
* Smart suggestions and automation

---

# 🧰 Tech Stack

## Frontend

* React
* TailwindCSS
* Shadcn UI

## Backend

* Convex
* Convex Database

## Mobile

* Expo (React Native)

## Infrastructure

* Vercel
* Convex Cloud

## Monorepo

* Turborepo

---

# 📦 Monorepo Structure

```
apps/
   web/        # Web platform
   mobile/     # Expo mobile app

packages/
   ui/         # Shared UI components
   config/     # Shared configuration
   utils/      # Shared utilities

convex/
   schema.ts
   functions/
```

---

# ⚙️ Installation

### Clone Repository

```
git clone https://github.com/your-org/mindorbit.git
cd mindorbit
```

### Install Dependencies

```
pnpm install
```

### Start Development

```
pnpm dev
```

---

# 🔐 Environment Variables

Create `.env.local`

```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
AI_API_KEY=
```

---

# 🚀 Deployment

| Service | Platform |
| ------- | -------- |
| Web App | Vercel   |
| Backend | Convex   |

---

# 🏢 Organization

MindOrbit is developed and maintained by **Novoran**.

Novoran builds scalable digital platforms, AI-powered productivity tools, and modern SaaS infrastructure.

---

## License

This project is proprietary software owned by **Novoran**.  
All rights reserved. Unauthorized copying or distribution is prohibited.