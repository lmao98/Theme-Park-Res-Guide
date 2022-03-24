const db = require('../db')
const { Location, Restaurant } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const entranceCafe = await Location.find({ name: 'Entrance' })
  const safariCafe = await Location.find({ name: 'Safari Park' })

  const restaurants = [
    {
      name: 'Mamma Mia',
      vibe: 'Italian',
      ratings: '4/5',
      location_id: entranceCafe[0]._id
    },
    {
        name: 'Avoir Cake?',
        vibe: 'French',
        ratings: '5/5',
        location_id: entranceCafe[0]._id
      },
      {
        name: 'Amigos Tacos',
        vibe: 'Mexican',
        ratings: '4/5',
        location_id: safariCafe[0]._id
      },
      {
        name: 'Dairy King',
        vibe: 'Ice Cream',
        ratings: '3/5',
        location_id: safariCafe[0]._id
      },
  ]

  await Restaurant.insertMany(restaurants)
  console.log('Created restaurants with locations!')
}
const run = async () => {
  await main()
  db.close()
}

run()