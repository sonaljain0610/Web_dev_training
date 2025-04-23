// getting-started.js
const mongoose = require('mongoose');

//main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sonaljain06:sonalborn06@cluster0.iqfmh1n.mongodb.net/todolist');
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = main;
