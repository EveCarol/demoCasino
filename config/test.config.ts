import dotEnv from 'dotenv';
import {basePortalEnvironment, baseApiEnvironments} from './environments';
import config from './config';
dotEnv.config();

const baseENV = () => {  
  if (config.OVERRIDE_BASE_ENVIRONMENT) {
    return config.OVERRIDE_BASE_ENVIRONMENT;
  } else {
    return config.BASE_ENVIRONMENT;
  }
};

const testConfig = {
    portalEnvironment: basePortalEnvironment(baseENV() ?? ''),
};
export default testConfig;