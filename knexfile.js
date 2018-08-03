// Update with your config settings.
  module.exports = {

    development: {
      client: 'pg',
      connection:'postgress://localhost/g90_class' 
      
    },
  
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
   
  };
