class registrationPage {

    constructor(page)
    {
        this.page = page;
        this.gotIt = page.locator('xpath=//html/body/div[2]/div/div[1]/div/div/div/button');
        this.email = page.locator('[data-test="input-email"]');
        this.phonechek = page.locator('xpath=//*[@id="registration_form_1"]/fieldset[1]/div/div[1]/div/div/div[3]/div/ul/li[2]');
        this.phoneNum = page.locator('[data-test="input-phone"]');
        this.promoCode = page.locator('xpath=//*[@id="bonus-list"]/div[1]');
        this.promoCodeValue = page.locator('xpath=//*[@id="core__protected_modules_user_yiiForm_RegistrationForm_promo_code"]');
        this.noBonus = page.locator('xpath=//*[@id="bonus-list"]/div[2]');
        this.termsConditions = page.locator('xpath=//*[@id="registration_form_1"]/fieldset[2]/div[1]/div/label');
        this.password = page.locator('[data-test="input-password"]');
        this.passwordConfirmation = page.locator('[data-test="input-password_confirmation"]');
        this.submit = page.locator('[data-test="control-submit"]');
    
    }
    
     // Llenando formulario para registrar usuario usando email sin bono
    async emailRegistrationNoBonus(email,password,passwordConfirmation)
    {
        await this.email.type(email);
        await this.termsConditions.click();
        await this.noBonus.click();
        await this.password.type(password);
        await this.passwordConfirmation.type(passwordConfirmation);
    }

    // Llenando formulario para registrar usuario usando numero telefonico sin bono
    async phoneRegistrationNoBonus(phoneNum,password,passwordConfirmation)
    {
        await this.phoneNum.click();
        await this.phoneNum.type(phoneNum);
        await this.termsConditions.click();
        await this.noBonus.click();
        await this.password.type(password);
        await this.passwordConfirmation.type(passwordConfirmation);
    }
    async phoneRegistrationPromoCode(phoneNum,password,passwordConfirmation)
    {
        await this.phoneNum.click();
        await this.phoneNum.type(phoneNum);
        await this.termsConditions.click();
        await this.promoCode.click();
        await this.promoCodeValue.type('AB12345');
        await this.password.type(password);
        await this.passwordConfirmation.type(passwordConfirmation);
    }
    async emailRegistrationPromoCode(email,password,passwordConfirmation)
    {
        await this.email.type(email);
        await this.termsConditions.click();
        await this.promoCode.click();
        await this.promoCodeValue.type('AB12345');
        await this.password.type(password);
        await this.passwordConfirmation.type(passwordConfirmation);
    }
    
    }
    module.exports = {registrationPage};