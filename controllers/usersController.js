import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import express from 'express'

const userRouter = express.Router()
userRouter.get('/', async (req, res, next) =>{
	try{	
		const user = await User.find({})	
		res.json(user)
	}catch{
		err=>next(err)
	}
})
userRouter.get('/:id', async (req, res, next) =>{
	try{
		const user = await User.findById(req.params.id)
		res.json(user)
	}catch{
		err=>next(err)
	}
})
 userRouter.post('/', async (req, res, next) => {
	const body = req.body
	const sultRounds = 10
	
	//const passwordHash = await bcrypt.hash(body.password, sultRounds)
	const newUser = new User({
		userName: body.userName,
		name : body.name,
		password: body.password
	})
	try{
		const savedUser = await newUser.save()
		console.log('ooooooooooooooooo', savedUser )
		res.json(savedUser)
	}catch{err => {
		if (err.name === 'ValidationError'){
			console.log('validation errorrr')
		}
		console.log('validation errorrr', err)
	}
	}		
 }) 
 userRouter.delete('/',  async (req, res, next) =>{
	 const users = await User.deleteMany({})
	 res.status(204).json(users)
	 
 })
 export default userRouter