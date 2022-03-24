const db = require('../db')
const { Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const location1 = await new Brand({
    name: '',
    type: ''
  })
  location1.save()

  const location2 = await new Brand({
    name: '',
    type: ''
  })
  location2.save()

  const location3 = await new Brand({
    name: '',
    type: ''
  })
  location3.save()


  const products = [
    {
      title: 'Apple AirPods',
      description: 'https://www.apple.com/airpods',
      price: '250',
      brand: brand1._id
    },
    {
      title: 'Apple iPhone Pro',
      description: 'https://www.apple.com/iphone-11-pro',
      price: '1000',
      brand: brand1._id
    },
    {
      title: 'Apple Watch',
      description: 'https://www.apple.com/watch',
      price: '499',
      brand: brand1._id
    },
    {
      title: 'Vespa Primavera',
      description: 'https://www.vespa.com/us_EN/vespa-models/primavera.html',
      price: '3000',
      brand: brand2._id
    },
    {
      title: 'New Balance 574 Core',
      description: 'https://www.newbalance.com/pd/574-core/ML574-EG.html',
      price: '84',
      brand: brand3._id
    },
    {
      title: 'Tribe Messenger Bike 004',
      description:
        'https://tribebicycles.com/collections/messenger-series/products/mess-004-tx',
      price: '675',
      brand: brand4._id
    },
    {
      title: 'Stumptown Hair Bender Coffee',
      description: 'https://www.stumptowncoffee.com/products/hair-bender',
      price: '17',
      brand: brand5._id
    }
  ]

  await Product.insertMany(products)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()