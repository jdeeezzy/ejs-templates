const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = "Our Home Page"
  var heading = "Justin's Favorite Things"
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})

app.get('/Tennis', (req, res) => {
  var title = "My favorite tennis player: Serena Williams"
  var heading = 'My Website'
  res.render('pages/tennis',{
    'title':title,
    'heading':heading
  })
})

app.get('/Shoes', (req, res) => {
  var title = "Shoes, Shoes, Shoes!"
  var heading = 'My Website'
  res.render('pages/shoes',{
    'title':title,
    'heading':heading
  })
})

app.get('/Sushi', (req, res) => {
  var title = "My Favorite Food: Sushi"
  var heading = 'My Website'
  res.render('pages/sushi',{
    'title':title,
    'heading':heading
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
