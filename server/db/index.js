const knex = require('knex')({
    client: 'pg',
    connection: {
      host     : process.env.DB_URL,
      user     : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME,
      charset  : 'utf8'
    }
  });

const bookshelf = require('bookshelf')(knex);
console.log("bookshelf instance is ", bookshelf)
module.exports = bookshelf;