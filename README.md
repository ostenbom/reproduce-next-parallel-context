To reproduce this error:

1. Run `npm preview` in one tab.
2. In the next tab `npx playwright test --repeat-each=5`
3. Observe `TypeError: Cannot read properties of null (reading 'useContext')` in the logs + 500 internal server error
