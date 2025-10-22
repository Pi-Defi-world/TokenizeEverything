# AI App Builder Guidelines

Something you should remember before I vene start to tell you what to do and what to not do: Never use your tool that permits you to view pages. I am talking about playwright python lib. Never.
When implementing changes, you should follow these best practices:

1. **Code Quality & Structure**
   - Always write clean, well-structured, and readable code.
   - Use consistent naming conventions (camelCase for variables/functions, PascalCase for components, SCREAMING_SNAKE_CASE for constants).
   - Keep functions small, modular, and single-responsibility.
   - Avoid duplicating logic; reuse existing utilities or components when possible.
     - **IMPORTANT**: For logic that is accessing the database, always use the `dreamWorldProvider` instance from `src/DreamWorldProvider.ts`. Do not use the `firestoreDb` export from `src/utils/firebase.ts` or any other method to access the database directly.

2. **Respect Existing Logic & Workflow**
   - Do not override or break the core logic of the app.
   - Build on top of the existing architecture instead of rewriting it unnecessarily.
   - Follow the same coding style and patterns already used in the project.

3. **Documentation & Comments**
   - Add comments only when necessary (complex logic, non-obvious decisions).
   - Keep inline documentation concise and relevant.
   - Update README or related docs if major features, APIs, or commands change.

4. **Error Handling & Validation**
   - Always check for possible edge cases and handle them gracefully.
   - Validate inputs before processing them.
   - Use proper error messages that are helpful for debugging.

5. **Performance & Optimization**
   - Avoid unnecessary re-renders in React/React Native.
   - Optimize loops, queries, and data handling.
   - Use memoization, lazy loading, and code splitting where appropriate.

6. **Security & Safety**
   - Never expose sensitive information (keys, tokens, passwords).
   - Sanitize user inputs to prevent XSS/SQL injections.
   - Use environment variables for sensitive configuration.

7. **Testing & Reliability**
   - Do not try to test the UI using python libs or other stuffs like that. Just make the changes. DFo not try to see the UI Or the rendering. I will charge myself of that. Also, do not RUN ANY TEST SCRIPT TO CHECK IF IT IS WORKING. ONLY NPM RUN BUILD WILL BE YOU SOLE SOURCE TO CHECK IF IT IS WORKING OR NOT.
   - Do not run any test scripts (do not run npm run test or something like that. Do not write some test code either)
     -Do not use your tool that permits you to see the Pages. I am talking about the pyh=thon Playwright tool. Never use it.

8. **UI/UX Standards**
   - Maintain responsive design (works on mobile, tablet, and desktop).
   - Follow accessibility best practices (labels, contrast, keyboard navigation).
     -Always try to make your new designs match the existing one. Like the backgrounds, the colors, the fontsizes of the elements. I want everything to feel like a one and only app.
   - Keep the design clean, minimal, and consistent with the rest of the app.

9. **Version Control**
   - Write meaningful commit messages.
   - Do not push broken code. Always run npm run build before to make sure that everything is working.

10. **Final Step After Changes**
    - Do not try to test the UI using python libs or other stuffs like that. Just make the changes. DFo not try to see the UI Or the rendering. I will charge myself of that. Also, do not RUN ANY TEST SCRIPT TO CHECK IF IT IS WORKING. ONLY NPM RUN BUILD WILL BE YOU SOLE SOURCE TO CHECK IF IT IS WORKING OR NOT.
    - Do not run any test scripts (do not run npm run test or something like that. Do not write some test code either)
    - Run `npm run build` to ensure the project compiles successfully.
    - Verify that there are no build errors.
    - When executing this command, ignore warnings (do not fix them)
    - Run the app and confirm that all new features work as intended without breaking existing ones.

---

✅ Following these principles will ensure the app remains **high-quality, stable, and easy to maintain**, while respecting the logic and standards already in place.
