import {test as base, TestInfo} from '@playwright/test';
import config from '../config/config';
import cp from 'child_process';
import {registrationPage} from './registrationPage';

const clientPlaywrightVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];
const caps = {
  browser: 'chrome',
  browser_version: 'latest',
  os: 'windows',
  os_version: '10',
  name: 'Playwright Browserstack test',
  build: config.BROWSERSTACK_BUILD_NAME,
  'browserstack.username': config.BROWSERSTACK_USERNAME,
  'browserstack.accessKey': config.BROWSERSTACK_ACCESS_KEY,
  'browserstack.local': false,
  'client.playwrightVersion': clientPlaywrightVersion,
};
const patchCaps = (name: string, title: string) => {
  const combination = name.split(/@browserstack/)[0];
  const [browserCaps, osCaps] = combination.split(/:/);
  const [browser, browser_version] = browserCaps.split(/@/);
  const osCapsSplit = osCaps.split(/ /);
  const os = osCapsSplit.shift();
  const os_version = osCapsSplit.join(' ');
  caps.browser = browser ? browser : 'chrome';
  caps.browser_version = browser_version ? browser_version : 'latest';
  caps.os = os ? os : 'windows';
  caps.os_version = os_version ? os_version : '10';
  caps.name = title;
};

type PageObjects = {
  registration: registrationPage;
};
export const test = base.extend<PageObjects>({
  
  registration: async ({page}, use) => {
    await use(new registrationPage(page));
  },
  
});
export {expect} from '@playwright/test';