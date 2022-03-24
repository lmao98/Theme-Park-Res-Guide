const { Location } = require('./models')
const { Restaurant } = require('./models')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()




//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(logger('dev'))


//ROUTES
app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/locations', async (req, res) => { 
    const locations = await Location.find({})
    res.json(locations)
})

app.get('/restaurants', async (req, res) => { 
    const restaurants = await Restaurant.find({})
    res.json(restaurants)
})
app.get('/restaurants/:id', async (req, res) => {
  const resId = req.params.id
  const findRes = await Restaurant.findById(resId)
  res.json(findRes)
})


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})