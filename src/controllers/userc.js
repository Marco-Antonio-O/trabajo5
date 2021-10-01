const Users = require("../models/usermodel")
const bcrypt = require("bcrypt")

const usersGet = async(req, res) => {
	try {
		const usersAll = await Users.find({ estado: true })
		res.status(200).json(usersAll)
	} catch (err){
		console.error("Error getting users", err)
		res.status(404).json(err)
	}
}
const userGet = async(req, res) => {
	try {
		const userUni = await Users.findById(req.params.id)
		res.status(200).json(userUni)
	} catch (err){
		console.error("Error getting user", err)
		res.status(404).json(err)
	}
}
const userDelete = async(req, res) => {
	try {
		await Users.findByIdAndUpdate(req.params.id, {estado: false})
		res.status(203).json("User deleted")
	} catch (err) {
		console.error("Could not delete user", err)
		res.status(403).json(err)
	}
}
const userPut = async(req, res) => {
	try {
		const {email, password} = req.body
		const newPass = await bcrypt.hash(password, 10)
		await Users.findByIdAndUpdate(req.params.id, { email, password: newPass })
		res.status(203).json("User Edited")
	} catch (err){
		console.error("Error Editing User", err)
		res.status(403).json(err)
	}
}
const userPost = async(req, res) => {
	try {
		const { email, password } = req.body
		const newPass = await bcrypt.hash(password, 10)
		const newUser = new Users({ email, password: newPass })
		await newUser.save()
		res.status(201).json("User Added")
	} catch (err){
		console.error("Error Adding User", err)
		res.status(401).json(err)
	}
}

module.exports = {
	usersGet,
	userGet,
	userDelete,
	userPut,
	userPost
}