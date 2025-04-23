const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.post('/postData', (req, res) => {
    const body = req.body;
    console.log("Data : ",body);
  res.json(
    {
        message: "Data added",
        data:body,
});
});
router.post('/login', (req, res) => {

    const { email, password } = req.body;

    for(let i = 0; i < data.length; i++) {
        const userObj = data[i];
        if (userObj.email === email) {
            if (userObj.password === password) {
                return res.json ({
                    message:"User login",
                });
            }
        }
        return res.json({
            message: "wrong info",
        });
    }
    const body = req.body;
    console.log("Login : ",body);
  res.json(
    {
        message: "Data added",
        data:body,
});
});
router.post('/register', (req, res) => {
    const body = req.body;
    console.log("register : ",body);
  res.json(
    {
        message: "Data added",
        data:body,
});
});

module.exports = router

const data = [
    {
        email:"sonal_249222@saitm.ac.in",
        password:"12345",
    },
    {
        email:"kiran_249147@saitm.ac.in",
        password:"12345",
    },
    {
        email:"sonam_249226@saitm.ac.in",
        password:"12345",
    },
];

