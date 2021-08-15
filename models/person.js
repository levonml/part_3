import mongoose from "mongoose";
import dotenv from "dotenv";
import uniqueValidator from "mongoose-unique-validator";

dotenv.config();
const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then((result) => console.log("connected to MongoDB"))
	.catch((err) => console.log("error connecting to MongoDB", err.message));

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
				return /(\D*\d){8}/.test(val);
			},
			message: "The number must heve minimum 8 digits",
		},
		required: true,
		unique: true,
	},
});
personSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});
personSchema.plugin(uniqueValidator);
const Person = mongoose.model("Person", personSchema);
export default Person;
