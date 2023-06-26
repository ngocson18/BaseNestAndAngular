export const environment = {
    production: false,
    locales: [
      'en'
    ],
    localeDefault: 'en',
    apiServer: {
      host: 'localhost',
      ssl: false,
      port: '3000',
      prefix: 'api',
      url: 'localhost',
      paths: {
        user: {
          list: 'users',
        }
      }
    }
  };
  