import dotenv from 'dotenv';
dotenv.config();

interface OPTIONALENV {
    BROWSERSTACK_USERNAME?: string | undefined;
    BROWSERSTACK_ACCESS_KEY?: string | undefined;
    BROWSERSTACK_BUILD_NAME?: string | undefined;
    BROWSERSTACK_KEY_VAULT_SECRET_NAME?: string | undefined;
    CI?: string | undefined;
    TEST_SUITE?: string | undefined;
    TAGS?: string | undefined;
   }
   interface MANUALENVOVERRIDES {
    OVERRIDE_BASE_ENVIRONMENT?: string | undefined;
  }
  
  type Config = Required<ENV> & {
    [key in keyof OPTIONALENV]?: string | never;
  } & {
    [key in keyof MANUALENVOVERRIDES]?: string | never;
  };
  const getConfig = (): Config => {
    return {
      BROWSERSTACK_USERNAME: process.env.BROWSERSTACK_USERNAME,
      BROWSERSTACK_ACCESS_KEY: process.env.BROWSERSTACK_ACCESS_KEY,
      BROWSERSTACK_BUILD_NAME: process.env.BROWSERSTACK_BUILD_NAME,
      BROWSERSTACK_KEY_VAULT_SECRET_NAME: process.env.BROWSERSTACK_KEY_VAULT_SECRET_NAME,
      BASE_ENVIRONMENT: process.env.BASE_ENVIRONMENT,
      CI: process.env.CI,
      OVERRIDE_BASE_ENVIRONMENT: process.env.OVERRIDE_BASE_ENVIRONMENT,
      TAGS: process.env.TAGS,
    };
  };
 
  const getSanitizedConfig = (config: Config) => {
    for (const [key, value] of Object.entries(config)) {
      if (
        value === undefined &&
        key !== 'BROWSERSTACK_USERNAME' &&
        key !== 'BROWSERSTACK_ACCESS_KEY' &&
        key !== 'BROWSERSTACK_BUILD_NAME' &&
        key !== 'BROWSERSTACK_KEY_VAULT_SECRET_NAME' &&
        key !== 'CI' &&
        key !== 'OVERRIDE_BASE_ENVIRONMENT' &&
        key !== 'TAGS'
      ) {
        throw new Error(`Missing key ${key} in .env`);
      }
    }
    return config as Config;
  };
  const config = getConfig();
  const sanitizedConfig = getSanitizedConfig(config);
  export default sanitizedConfig;