import { Page } from '@playwright/test';
import { BASE_URL } from '../../test-data/Constants';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(path = ''): Promise<void> {
    await this.page.goto(`${BASE_URL}${path}`);
  }
}
