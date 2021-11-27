import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    validate: {
      validator: function (val) {
        return /(\D*\d){8}/.test(val)
      },
      message: 'The number must heve minimum 8 digits',
    },
    required: true,
    unique: true,
  },
})
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})
personSchema.plugin(uniqueValidator)
const Person = mongoose.model('Person', personSchema)
export default Person
