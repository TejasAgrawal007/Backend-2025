const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000


// Require Mongoose Connection
const dbConnection = require("./config/db")

// Require User Model
const userModel = require("./models/user")

// Builtin Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  // use for req.body
app.use(express.static("public"))


// Setup View Engine
app.set("view engine", 'ejs')

// Third Party Middlewares
app.use(morgan("dev"))


// Custome Middlewares
app.use((req, res, next) => {
  console.log("This is Middlewares")
  const a = 10;
  const b = 20;
  console.log(`The Sum = ${a + b}`)
  next()
})


app.get('/', (req, res) => {
  res.render('index')
})


app.post('/get-from-data', (req, res) => {

  console.log(req.body)
  res.send("Data Recived!")

})


app.get("/register", (req, res) => {
  res.render("register")
})

app.post("/register", async (req, res) => {

  const { username, email, password } = req.body;

  const newUser = await userModel.create({
    username,
    email,
    password
  })

  res.json(newUser).send("User Created")
})


// CRUD - CREATE-READ-UPDATE-DELETE



// 1. Read The Users -
app.get("/get-users", (req, res) => {
    userModel.find({
      username : 'tejas'
    }).then((user) => {
      res.send(user)
    })
})


app.get("/get-users", (req, res) => {
  userModel.findOne({
    username : 'tejas'
  }).then((user) => {
    res.send(user)
  })
})



// 2. Update - The user
app.get("/update", async (req, res) => {
  
    await userModel.findOneAndUpdate
    (
      {
        username  : 'dell'
      },
      {
          email : "d@gmail.com"
      }
    )
    res.send("User Updated!")
})

// 3. Delete User
app.get("/detete-user", async (req, res) => {
  await userModel.findOneAndDelete({
      username : 'tejas'
  })
  res.send("User Deleted!")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
