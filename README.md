# mytech-portalv3-e2e-tests
End-to-End test suite for the DemoCasino Portal project. This repository consists of tests written using the Playwright/Test library in order to test DemoCasino from the perspective of and end user.

## Getting Started
1.  Clone repo to your local machine
2.  Install dependencies with `npm install`
3.  You may need to run `npx playwright install` in order to install the browsers on your machine
4.  You may need to run `npm i -D @playwright/test allure-playwright` in order to install allure Report

## Build and Test
**Test Commands:**
`npx playwright test /tests` will run all of the tests in the suite
`npx playwright test ./tests/PATH/TOTHE/test.spec.ts` will run a specific test file

[Playwright command documentation](https://playwright.dev/docs/test-cli)

## Test DatReport
`npx playwright show-report` will display the playwrite-report
`npx playwright test --reporter=line,allure-playwright` will run the allure-report
`allure generate ./allure-results --clean` will generate the allure-report
`allure open allure-report` will display the allure-report


## Local Development
Tips for developing on your local machine:
- Utilize the `test.only()` method on your test will run only that specific test. This is useful in conjunction with live mode to quickly add and update your tests on the fly. **Note:** *Always be sure to remove the `.only()` when you submit a pull request as we don't want this test to run alone in the CI.*

When complete submit a pull request on your branch for review and then final merge into the main branch.