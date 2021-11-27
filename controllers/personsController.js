import express from 'express'
import Person from '../models/person.js'

const personRouter = express.Router()
personRouter.get('/', async (request, response) => {
  const person = await Person.find({})
  response.json(person)
})
personRouter.get('/:id', async (req, res, next) => {
  try{
    const person = await Person.findById(req.params.id)
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  } catch{(error) => next(error)}
})
personRouter.delete('/:id', async (req, res) => {
  try{
	const persons = await Person.findByIdAndDelete(req.params.id)
	res.status(204).json(persons)
  }catch{err => next(err)}
})

personRouter.post('/', async (req, res, next) => {
  if (!req.body || !req.body.name || !req.body.number) {
    return res.status(400).json({ error: 'content missing' })
  }
  const newPerson = new Person({
    name: req.body.name,
    number: req.body.number,
  })
  try{
    const savedNote = await newPerson.save()
    res.json(savedNote)
  }catch{(err) => {
    return next(err)}}

})
personRouter.put('/:id', async (req, res, next) => {
  const updatedPerson = {
    name: req.body.name,
    number: req.body.number,
  }
  try{
    const newUpdatedPerson = await Person.findByIdAndUpdate(req.params.id, updatedPerson, { new: true })
    res.json(newUpdatedPerson)
  }catch{(error) => next(error)}
})
export default personRouter