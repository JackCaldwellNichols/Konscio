const router = require('express').Router()
const User = require('../Models/User.js')

//POST
router.post('/', async (req, res) => {
        const check = await User.findOne({email: req.body.email})
        if(check){
            res.status(401).json("Email already in use")
        }
            try {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    time: req.body.time,
                    message: req.body.message
                })
                const user = await newUser.save()
                res.status(201).json(user)
            } catch (error) {
                res.status(500).json(error)
             
            }})


//GET USER

router.get('/:id', async (req, res) => {
    
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).status("Something went wrong")
    }
})


//DELETE

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    } catch (error) {
        res.status(500).json("Something went wrong")    
    }
})



//GET ALL

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json("Something went wrong")
    }
})








module.exports = router