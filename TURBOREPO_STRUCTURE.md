# Turborepo Structure

MindOrbit uses **Turborepo** for scalable monorepo development.

---

# Repository Layout

```
mindorbit/

apps/
   web/
   mobile/

packages/
   ui/
   config/
   utils/

convex/

turbo.json
package.json
```

---

# Apps

## Web

```
apps/web
```

React application deployed to **Vercel**.

---

## Mobile

```
apps/mobile
```

Expo application for iOS and Android.

---

# Shared Packages

## UI

```
packages/ui
```

Reusable UI components used across web and mobile.

---

## Config

```
packages/config
```

Shared configuration:

* eslint
* typescript
* tailwind

---

## Utils

```
packages/utils
```

Shared utility functions.

---

# Turborepo Tasks

Example pipeline:

```
dev
build
lint
test
```

Configured inside:

```
turbo.json
```

---

# Benefits

Using Turborepo allows:

* shared dependencies
* faster builds
* caching
* scalable multi-app architecture
