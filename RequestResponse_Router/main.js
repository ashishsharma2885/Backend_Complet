const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
  res.send('Ashish Sharma!')
})

app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('This is post request!')
  })

  app.get("/index", (req, res) => {
    console.log("Hey its index")
  res.sendFile('templates/index.html', {root: __dirname})
})
  app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('This is post request!')
  })

  app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Ashis", "Sharma"] })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})