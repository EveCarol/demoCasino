import {FullConfig, Page} from '@playwright/test';
import playwright from 'playwright-core';
import {setUserCredentialsENV, setBrowserStackAuthCredentialsENV} from '../../utils/authentication';

import * as fs from 'fs';
async function preloadCredentials() {
  await setUserCredentialsENV();
  await setBrowserStackAuthCredentialsENV();
}

export default async function globalSetup(config: FullConfig) {
  await preloadCredentials();  const {browserName, baseURL, storageState, headless} = config.projects[0].use;  const stats = fs.existsSync(storageState!.toString()) ? fs.statSync(storageState!.toString()) : null;
  if (stats && stats.mtimeMs > new Date().getTime() - 600000) {
    console.log('Login skipped because the token is fresh');
    return;
  }  
  const browser = await playwright[browserName!].launch({headless});
  const context = await browser.newContext();
  const page = await context.newPage();  
}