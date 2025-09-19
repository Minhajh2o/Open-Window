# Copilot Instructions for AI Coding Agents

## Project Overview

- This project is a React application bootstrapped with Vite, using HMR (Hot Module Replacement) and ESLint for linting.
- The main entry point is `src/main.jsx`.
- The app is organized by feature: components are in `src/assets/Components/`, layouts in `src/assets/Layouts/`, and routing logic in `src/assets/Router/Router.jsx`.

## Key Architectural Patterns

- **Routing**: All routing is handled in `src/assets/Router/Router.jsx`. Update this file to add or modify routes.
- **Layouts**: Layouts such as `Home`, `Auth`, and `News` are in `src/assets/Layouts/`. Each layout is a top-level page or section.
- **Components**: Reusable UI elements (e.g., `Header`, `Navbar`, `Main`) are in `src/assets/Components/`.
- **Assets**: Static assets (SVGs, images) are in `src/assets/`.

## Developer Workflows

- **Start Dev Server**: `npm run dev` (runs Vite with HMR)
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`
- **Lint**: `npm run lint` (uses ESLint config in `eslint.config.js`)

## Project-Specific Conventions

- **File Naming**: Components and layouts use PascalCase (e.g., `Header.jsx`, `Home.jsx`).
- **Directory Structure**: All React code is under `src/`, with further separation by feature type.
- **No TypeScript**: This project uses plain JavaScript (JSX), not TypeScript.
- **Minimal Template**: The project is intentionally minimal; add new features by following the existing folder structure.

## Integration Points

- **Vite Plugins**: Uses `@vitejs/plugin-react` for React Fast Refresh.
- **ESLint**: Configured via `eslint.config.js` at the root.
- **No Custom Backend**: This is a frontend-only project; no API/server code is present.

## Examples

- To add a new page, create a new layout in `src/assets/Layouts/` and register it in `src/assets/Router/Router.jsx`.
- To add a new component, place it in `src/assets/Components/` and import it where needed.

## References

- Main entry: `src/main.jsx`
- Routing: `src/assets/Router/Router.jsx`
- Layouts: `src/assets/Layouts/`
- Components: `src/assets/Components/`
- ESLint config: `eslint.config.js`
- Vite config: `vite.config.js`

---

If any conventions or workflows are unclear, check the README.md or ask for clarification.
