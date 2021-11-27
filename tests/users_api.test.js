import mongoose from 'mongoose'
import app from '../app.js'
import supertest from 'supertest'
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

const api = supertest(app)
beforeEach(async () => {
	try{
		await User.deleteMany({})
		const passwordHash = await bcrypt.hash('secret', 10)
		const initUser = new User({
			userName: 'thisIsMe',
			name: 'Levon',
			password: passwordHash
		})
	await initUser.save()
	}catch{err => console.log(err)}
})
 test('adding new users', async () => {
		const newUser = {
			userName: 'ThisIsSHe',
			name: 'Not Levon',
			password: 'unknown password'
		}
        await api
		.post('/api/users')
		.send(newUser)
		.expect(200)
		.expect('Content-Type', /application\/json/)
		const receivedUser =  await User.find({})
		expect(receivedUser).toHaveLength(2)
	}, 10000)
	test('adding new users with a same name', async () => {
		const newUser = {
			userName: 'th',
			name: 'Levon',
			password: 'unknown password'
		}
		try{
			const result = await api
			.post('/api/users')
			.send(newUser)
			.expect(400)
			.expect('Content-Type', /application\/json/)
		}catch{err => next(err)}
			const receivedUser =  await User.find({})
			expect(receivedUser).toHaveLength(2)
		
	})

	afterAll(() => {
		mongoose.connection.close()  
	  })