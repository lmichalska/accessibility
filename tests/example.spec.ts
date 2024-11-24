import { test, expect, chromium, Browser, Page } from '@playwright/test';
import { injectAxe, getViolations } from 'axe-playwright';

let browser: Browser;
let page: Page;

test.describe('Automated Accessibility Testing with Axe and Playwright', () => {
  test.beforeAll(async () => {

    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await injectAxe(page); 
  });

  test('Check entire page for accessibility violations', async () => {

    const violations = await getViolations(page);

    if (violations.length > 0) {
      console.log('Accessibility violations found:');
      violations.forEach((violation) => {
        console.log(`- ${violation.id}: ${violation.description}`);
        console.log(`  Impact: ${violation.impact}`);
        console.log('  Nodes:', violation.nodes.map((node) => node.html));
      });
    } else {
      console.log('No accessibility violations found.');
    }

    expect(violations.length).toBe(0);
  });

  test.afterAll(async () => {
    await browser.close();
  });
});