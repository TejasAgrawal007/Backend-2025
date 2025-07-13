const express = require('express')
const app = express()
const port = 3000


app.set("view engine", 'ejs')


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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
