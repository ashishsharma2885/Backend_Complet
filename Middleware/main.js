const express = require('express')
const app = express()
const port = 3000
const main = require('./routes/main')

const fs = require('fs')

// app.use(express.static("public"))

app.use('/main', main)

// Middleware 1 - yh mujhe batata hsi login krta hai
app.use((req, res, next) => {
  fs.appendFileSync("logo.txt", `${Date.now()} ${req.method}\n`);
  console.log(`${Date.now()} ${req.method}`);
  next();
});
// Middleware 2
app.use((req, res, next) =>{
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Ashish World!')
})

app.get('/about', (req, res) => {
  res.send('Ashish about!')
})

app.get('/contact', (req, res) => {
  res.send('Ashish contact!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})