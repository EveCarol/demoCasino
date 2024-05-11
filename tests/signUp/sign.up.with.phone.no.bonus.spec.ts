import testConfig from '../../config/test.config';
import { expect, test } from '../../pages/fixture';
import { generarNumeroAleatorio } from '../../utils/aleatorio';

const registrationUrl = `${testConfig.portalEnvironment}/user/registration`; 
/* Test Case
* 003: Validar elementos en sign Up usando un correo electronico y eligiendo la opcion no bonus
*/

test('003: Validar elementos en sign Up usando un correo electronico y eligiendo la opcion no bonus @regression', async ({page, registration}) => {
    
    var phoneNum = String(generarNumeroAleatorio());
    const password = "Iamking@000";
    const passwordConfirmation = "Iamking@000";
    
    await page.goto(registrationUrl);
    await page.waitForLoadState('networkidle');

    await registration.gotIt.click();
    await registration.phonechek.click();
    await expect(registration.phoneNum).toBeVisible();
    await expect(registration.termsConditions).toBeVisible();
    await expect(registration.promoCode).toBeVisible();
    await expect(registration.password).toBeVisible();
    await expect(registration.passwordConfirmation).toBeVisible();
    await expect(registration.submit).toBeVisible();

    await registration.phoneRegistrationNoBonus(phoneNum,password,passwordConfirmation);
});