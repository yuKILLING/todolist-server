const express = require("express"),
app = express();
const parser = require('body-parser')
const express_errors = require("express-async-errors")
const db = require("./db.js");
const cors = require('cors')

const postsRoutes = require('./controllers/post.controller.js')
app.use(cors())
app.use(parser.json())
app.use('/api/texts', postsRoutes)
app.use((err,req,res,next)=>{
  console.log(err)
  res.status(err.status || 500).send('Something went wrong!')
})

db.query("SELECT 1")
  .then(() => {
    console.log("DB CONNTECTION successed")
    app.listen(8080, () => {
      console.log("Server started at 3000!")
    })
  })
  .catch((e) => console.log("DB CONNECTION failed \n", e))
