const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000


// Builtin Middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))  // use for req.body
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
