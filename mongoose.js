import mongoose from 'mongoose'

if (process.argv.length < 3) {
    console.log(
        'Please provide the password as an argument: node mongo.js <password>'
    )
    process.exit(1)
}
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const url = `mongodb+srv://fullstack:${password}@cluster0.0g79b.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: name,
    number: number,
})

if (process.argv.length < 4) {
    console.log('phonebook:')
    Person.find().then((result) => {
        result.forEach((note) => {
            console.log(`${note.name} ${note.number}`)
        })
        mongoose.connection.close()
    })
} else {
    person.save().then(() => {
        console.log('added %s number %s to phonebook', name, number)
        mongoose.connection.close()
    })
}
