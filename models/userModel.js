import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
	minLength: 3,
    //unique: true,
  },
  name: String, 
  password: String,
   notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note"
    }
  ],
})
userSchema.plugin(uniqueValidator)
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
  }
})

const User = mongoose.model('User', userSchema)
export default User