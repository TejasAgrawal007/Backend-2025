const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000


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


app.get('/', (req, res, next) => {
  console.log("Hello from Specific Middlewares")
  next()
}, (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
