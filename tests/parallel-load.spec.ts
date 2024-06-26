import { test, expect } from "@playwright/test";

test("open three tabs and navigate to pages in parallel", async ({
  browser,
}) => {
  // Create a new browser context
  const context = await browser.newContext();

  // Open three new pages (tabs)
  const page1 = await context.newPage();
  const page2 = await context.newPage();
  const page3 = await context.newPage();

  const host = "https://my-parallel-app.pages.dev";
  // const host = "http://localhost:8788";
  // URLs to navigate to
  const url1 = `${host}/thing1`;
  const url2 = `${host}/thing2`;
  const url3 = `${host}/thing1`;

  // Navigate to the pages in parallel
  await Promise.all([page1.goto(url1), page2.goto(url2), page3.goto(url3)]);

  // Optional: Add assertions to verify the pages have loaded correctly
  await expect(page1.getByText("Hello, World!")).toBeVisible();
  await expect(page2.getByText("Hello, World!")).toBeVisible();
  await expect(page3.getByText("Hello, World!")).toBeVisible();

  // Close the context
  await context.close();
});
