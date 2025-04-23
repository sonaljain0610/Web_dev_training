const express = require('express')
const app = express()
const port = 3000
const dbConnect = require("./config/db")
const User = require("./models/userSchema");
// import bcrypt from "bcryptjs";
const bcrypt = require("bcryptjs");

dbConnect().catch((err) => console.log(err));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//register api
app.post('/addData', async (req, res) => {
    // //const data = {

    //     name: "raju",
    //     email: "test@gmail.com",
    //     phone: "1234567890",
    //     password: "123456",
    // //};
    const data = req.body;

     const password = data.password;

     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(password, salt);
     data.password = hash;

     const user =  new User(data);

     await user.save();

     res.json({
        msg: "user saved",
        user,
     });

  });
  //login api
  app.post("/login", async (req, res) =>{
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    //bcrypt.compareSync("B4c0/\/", hash);
    const checkPassord = bcrypt.compareSync(password, user.password);
    if (checkPassword) {
      return res.json({
        msg: "LoggedIn",
        user,
    });
    }
    res.json({
      msg: "Not LoggedIn",
    });
   });

  // get user data
  app.get("/getData", async (req, res) => {
const users = await User.find();
    res.json({
      msg: "user data",
      users,
    });
  });
  // update user data
  app.put("/updateUser", async (req, res) => {
    const updateUser = await User.updateOne({ name: "Web Developement", email: "best@gmail.com" });
        res.json({
          msg: "user data",
          updateUser,
        });
      });
      // delete user
      app.delete("/deleteUser", async (req, res) => {
        const deleteUser = await User.deleteOne();
            res.json({
              msg: "user data deleted",
              deleteUser,
            });
          });
  

  //Pending

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
