import express from 'express'
import Person from '../models/person.js'

const personRouter = express.Router()
personRouter.get('/', async (request, response) => {
    const person = await Person.find({})
    response.json(person)
})
personRouter.get('/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then((person) => {
            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch((error) => {
            return next(error)
        })
})
personRouter.delete('/:id', (req, res) => {
    Person.findByIdAndDelete(req.params.id).then((persons) => {
        console.log('deleted response - ', persons)
        res.status(204).json(persons)
    })
})
personRouter.post('/', (req, res, next) => {
    if (!req.body) {
        return res.status(400).json({ error: 'content missing' })
    }
    const newPerson = new Person({
        name: req.body.name,
        number: req.body.number,
    })
    newPerson
        .save()
        .then((savedNote) => res.json(savedNote))
        .catch((err) => {
            console.log('error ====', err.name)
            return next(err)})

})
personRouter.put('/:id', (req, res, next) => {
    const updatedPerson = {
        name: req.body.name,
        number: req.body.number,
    }
    Person.findByIdAndUpdate(req.params.id, updatedPerson, { new: true })
        .then((updatedPerson) => {
            console.log('updatedPerson ', updatedPerson)
            res.json(updatedPerson)
        })
        .catch((error) => next(error))
})
export default personRouter