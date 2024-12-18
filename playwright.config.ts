import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  use: {
    baseURL: 'https://www.flipkart.com',
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    storageState: './test-data/auth-storage.json',
  },
  workers: 1,
  projects: [
    {
      name: 'Critical Suite',
      testMatch: [
        'src/tests/homePage.spec.ts', // Critical tests
      ],
    },
    {
      name: 'Regression Suite',
      testMatch: [
        'src/tests/addToCard.spec.ts',
        'src/tests/homePage.spec.ts', 
      ],
    },
    {
      name: 'Full Suite',
      testMatch: '**/*.spec.ts', // Matches all spec files
    },
  ],

  reporter: [
    ['html', { open: 'never' }],  // Playwright built-in reporter
    ['allure-playwright'],  // Add allure-playwright reporter for Allure
  ],
});

