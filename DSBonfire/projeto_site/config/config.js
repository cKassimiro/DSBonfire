module.exports = {
  production: {
    username: 'adm',
    password: '0v4T5Ug64!',
    database: 'dsbonfire-hollow-user',
    host: 'nig.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
