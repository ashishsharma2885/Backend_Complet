const express = require('express');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = [1, 64, 65]
  res.render('index', {siteName: siteName, searchText: searchText, arr })
})

app.get('/', (req, res) => {
    let siteName = "Adidas why and when?"
    let seachText = "Its s very good brand"
  res.render('templates/blogpost.html', {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})