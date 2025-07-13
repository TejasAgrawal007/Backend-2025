const express = require('express')
const dotenv = require('dotenv')
const app = express()
const port = 3000

// setup dotenv
dotenv.config()

// Databse Connection
const connectToDB = require('./config/db')
connectToDB()


// setup middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine", 'ejs')


// Require User Router
const userRouter = require("./routes/user.routes")


app.use('/user',userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
