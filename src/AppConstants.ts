// Validação de variáveis de ambiente obrigatórias
const validateEnvVars = () => {
  const requiredVars = [
    'REACT_APP_APP_ID',
    'REACT_APP_REGION',
    'REACT_APP_AUTH_KEY'
  ];
  
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(
      `Variáveis de ambiente obrigatórias não encontradas: ${missingVars.join(', ')}. ` +
      'Configure estas variáveis no Vercel ou em seu arquivo .env local.'
    );
  }
};

// Executa a validação
validateEnvVars();

export const COMETCHAT_CONSTANTS = {
  APP_ID: process.env.REACT_APP_APP_ID!,
  REGION: process.env.REACT_APP_REGION!,
  AUTH_KEY: process.env.REACT_APP_AUTH_KEY!,
};
