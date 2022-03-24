const db = require('../db')
const { Location } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const locations = [
    {
      name: 'Entrance',
      description: 'Theme Park Entrance Cafeteria',
    },
    {
      name: 'Safari Park',
      description: 'Safari Park Cafeteria',
    }
  ]

  await Location.insertMany(locations)
  console.log('Created locations!')
}
const run = async () => {
  await main()
  db.close()
}

run()