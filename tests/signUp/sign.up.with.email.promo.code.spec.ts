
import testConfig from '../../config/test.config';
import { expect, test } from '../../pages/fixture';
import { generarEmailAleatorio } from '../../utils/aleatorio';

const registrationUrl = `${testConfig.portalEnvironment}/user/registration`; 
/* Test Case
* 002: Validar elementos en sign Up usando un correo electronico y eligiendo la opcion no bonus
*/
test(' 002: Validar elementos en sign Up usando un correo electronico y eligiendo la opcion no bonus @regression', async ({page, registration}) => {

    var email = generarEmailAleatorio();
    const password = "Iamking@000";
    const passwordConfirmation = "Iamking@000";
    
    await page.goto(registrationUrl);
    await page.waitForLoadState('networkidle');

    await registration.gotIt.click();
    await expect(registration.email).toBeVisible();
    await expect(registration.termsConditions).toBeVisible();
    await expect(registration.promoCode).toBeVisible();
    await expect(registration.password).toBeVisible();
    await expect(registration.passwordConfirmation).toBeVisible();
    await expect(registration.submit).toBeVisible();

    await registration.emailRegistrationPromoCode(email,password,passwordConfirmation);
});