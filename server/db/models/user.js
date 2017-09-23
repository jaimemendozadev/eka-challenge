const bookshelf = require('../bookshelf');
console.log("bookshelf is ", bookshelf);


const User = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = User;