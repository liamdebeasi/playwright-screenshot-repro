# Steps to Reproduce

1. Run `npm install`.
2. Run `npx playwright test`.
3. Open both screenshots in `tests/example.spec.ts-snapshots/`.
4. Observe that the screenshot for the test that loads the body scrollable content is full size.
5. Observe that the screenshot for the test that loads non-body scrollable content is not full size.
