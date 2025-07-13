const express = require('express')
const app = express()
const port = 3000

// Require User Router
const userRouter = require("./routes/user.routes")


app.use(userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
