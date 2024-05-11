interface Environment {
    local: string;
    qa: string;
    stage: string;
    prod: string;
  }
  
  
  const apiEnvironments: Environment = {
    local: 'http://localhost:4000/graphql',
    qa: 'https://demo.casino',
    stage: 'https://demo.casino',
    prod: 'https://demo.casino',
  };
  
  const portalEnvironments: Environment = {
    local: 'https://localhost:3000',
    qa: 'https://demo.casino',
    stage: 'https://demo.casino',
    prod: 'https://demo.casino',
  };
  
  export function basePortalEnvironment(env: string) {
    return portalEnvironments[env.toLowerCase() as keyof typeof portalEnvironments];
  }
  
  export function baseApiEnvironments(env: string) {
    return apiEnvironments[env.toLowerCase() as keyof typeof apiEnvironments];
  }
  