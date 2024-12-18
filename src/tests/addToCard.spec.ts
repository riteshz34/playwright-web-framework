import { test, expect } from '@playwright/test';
import { Homepage } from '../pages/HomePage';
import { BASE_URL } from '../../test-data/Constants';

test('User can log in successfully', async ({ page }) => {
  const HomePage = new Homepage(page);
  await HomePage.searchProduct();
});
