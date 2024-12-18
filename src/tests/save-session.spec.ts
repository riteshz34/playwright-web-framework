import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { Homepage } from '../pages/HomePage';

const storageFilePath = 'test-data/auth-storage.json';

test('Save login session', async ({ page }) => {
  const homePage = new Homepage(page);

  // Navigate to login page
  await homePage.navigateTo('/login');
  // Perform login with valid credentials
  await homePage.login();

  // Save session data (cookies, localStorage, etc.)
  const storageState = await page.context().storageState();

  // Ensure the directory exists
  const dir = path.dirname(storageFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the storage state to file
  fs.writeFileSync(storageFilePath, JSON.stringify(storageState));

  console.log('Login session saved successfully!');
});
