const { Schema } = require('mongoose')

const Restaurant = new Schema(
  {
    name: { type: String, required: true },
    vibe: { type: String, required: true },
    ratings: { type: String, required: true },
    location_id: { type: Schema.Types.ObjectId, ref: 'location_id' }
  },
  { timestamps: true }
)

module.exports = Restaurant