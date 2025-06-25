import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 50 * 1000,
  retries: 2,
  use: {
    //browserName: 'chromium', // Use 'firefox' or 'webkit' for other engines
    headless: false, // Run tests without UI (use false for debugging)
    viewport: { width: 1280, height: 720 },
    screenshot: 'off',
    video: 'off',
    baseURL: 'https://swaper.com/', // Base URL for all tests
  },
  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
      },
    },    
  ]
});