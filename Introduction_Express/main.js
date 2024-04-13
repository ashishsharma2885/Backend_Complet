const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact')
})

// app.get('/blog/intro-to-js', (req, res) => {
//   // logic to fetch intro to js from to db
//   res.send('Hello intro to js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   // logic to fetch intro to js from to db
//   res.send('Hello intro to python!')
// })


app.get('/blog/:slug', (req, res) => {
     // logic to fetch {slug} to js from to db
     console.log(req.params)
     res.send(`hello ${req.params.slug}`)
   })

app.get('/about', (req, res) => {
  res.send('About us')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})