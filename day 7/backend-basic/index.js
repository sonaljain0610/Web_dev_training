const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

  app.get('/ABC', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    console.log(a);
    const sum = parseInt(a) +  parseInt(b);
    res.send("Path ABC!" + sum);
  })

  app.post('/ABCPost', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    console.log(a);
    const sum = parseInt(a) +  parseInt(b);
    res.send("Method POST!" + sum);
  })


  app.get('/ABC', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    console.log(a);
    const sum = parseInt(a) +  parseInt(b);
    res.send("Method POST!" + sum);
  });
  app.get("/getData", (req, res) => {
    
    res.json({
        success:true,
        message:"Data fetched",
        myData:data,

    });
  });


  app.get('/sub', (req, res) => {
    res.send('Path sub!')
  })

app.listen(port, () => {
  console.log("Example app listening on port",port)
})
const data =[
    1,2,3,4
]