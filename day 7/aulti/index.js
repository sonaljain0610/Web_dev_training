const express = require('express')
const router = require("./routes/routes");
//app
const app = express()
const port = 3000

//api
app.use(express.json());
app.use("/api/v1", router);

//app listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})