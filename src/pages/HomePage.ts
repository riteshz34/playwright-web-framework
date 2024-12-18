import { BasePage } from './BasePage';
import { test, expect, Locator } from '@playwright/test';
import { BASE_URL } from '../../test-data/Constants';
import { Entry } from 'yauzl';

export class Homepage extends BasePage {
 
  

  get btnLogin(): Locator {
    return this.page.locator("//span[text()='Login']");
  }
  get inputPhoneNo(): Locator {
    return this.page.locator("(//input[@type='text'])[2]");
  }
  get btnSendOTP(): Locator {
      return this.page.locator("//button[text()='Request OTP']");
  }
  get btnAccount(): Locator {
    return this.page.locator("//span[text()='Account']");
  }
  get inputSearchproduct(): Locator {
    return this.page.locator("//input[@title='Search for Products, Brands and More']");
  }

  async login(): Promise<void> {
    await this.navigateTo('/');
    expect(this.page.url()).toBe(`${BASE_URL}/`);
    //await this.btnLogin.click();
    await this.page.waitForTimeout(2000); 
    await this.inputPhoneNo.fill('8669028633');
    await this.btnSendOTP.click();
    await this.page.waitForTimeout(20000); 
  }
  async openHomePage(): Promise<void> {
    // await this.navigateTo('/'); // Appends '/login' to BASE_URL
    await this.navigateTo('/');
     await this.page.waitForTimeout(2000);
     expect(this.page.url()).toBe(`${BASE_URL}/`);
     await this.page.waitForTimeout(2000);
     await this.btnAccount.click();
     await this.page.waitForTimeout(5000);
   }

   async searchProduct(): Promise<void> {
    await this.navigateTo('/');
    await this.inputSearchproduct.fill('iphone 12 pro max');
    await this.page.waitForTimeout(10000);
    
   }
}