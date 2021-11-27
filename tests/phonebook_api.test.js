import mongoose from 'mongoose'
import supertest from 'supertest'
import app from '../app'
import Persons from '../models/person'

const api = supertest(app)

const initialPersons =  [
  {
    name: 'Ashot',
    number: '12345678',
  },
  {
    name: 'Samvel',
    number: '87654321',
  }
]
const newPerson = {
  name: 'Ararat',
  number: '77777777'
}
const noContent = {}
beforeEach(async () => {
  await Persons.deleteMany({})
  let newPersons = new Persons(initialPersons[0])
  await newPersons.save()
  newPersons = new Persons(initialPersons[1])
  await newPersons.save()

})
test('testing api', async () => {
  await api
    .get('/api/persons')
    .expect(200)
    .expect('Content-Type', /application\/json/)
	
})
test('length of phonebook', async () => {
  const res = await api.get('/api/persons')
  expect(res.body).toHaveLength(2)
}, 10000)
test('content of phonebook', async () => {
  const res = await api.get('/api/persons/')
  expect(res.body[0].name).toBe('Ashot')
}, 100000)
 test('testing post method with a valid note', async () => {
  await api
    .post('/api/persons/')
    .send(newPerson)
	.expect(200)
    .expect('Content-Type', /application\/json/)
  const result  = await api.get('/api/persons/')
  expect(result.body).toHaveLength(3)
},10000)
test('testing post method with a invalid note', async () => {
  await api
    .post('/api/persons/')
	.send(noContent).expect(400)
  const result  = await api.get('/api/persons/')
  expect(result.body).toHaveLength(2)
},10000)
afterAll(() => {
  mongoose.connection.close()  
})