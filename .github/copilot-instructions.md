# GitHub Copilot Customization for band-songs

This file provides instructions and guidelines for GitHub Copilot suggestions in this repository.

## Project Overview
This project is an Ember.js application for managing band songs, setlists, and related data. It uses TypeScript, Glimmer components, and EUI components for UI. Firebase Firestore is used for data storage.

## Coding Guidelines
- Use TypeScript for all new code and always supply method return types.
- Prefer Glimmer components (`.gts`) for UI.
- Use tracked properties and Ember's reactivity model.
- Use EUI components for UI consistency where possible.
- Keep business logic in controllers/services, not components.
- Use `instrumentMap`, `Instrument` enum, and related maps for instrument-related UI.
- Use arrow functions for event handlers.
- Use `@service` for dependency injection.
- Use `@tracked` for reactive state.
- Use Firestore converters for data serialization.

## Copilot Usage
- Suggest code that follows the above guidelines.
- Prefer modern idiomatic Ember.js and TypeScript patterns.
- When in doubt, refer to existing code for style and structure.
- Do not suggest code that bypasses type safety or Ember conventions.

## Testing
- All new features should include tests in the `tests/` directory.
- Use Ember's testing framework for integration and unit tests.

## Documentation
- Update `README.md` for major changes or new features.
- Add code comments for complex logic.

---

For questions, refer to the existing codebase or ask the maintainers.
