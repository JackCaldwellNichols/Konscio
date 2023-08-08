const router = require('express').Router()
const Auth = require('../Models/Auth.js')
const bcrypt = require('bcrypt')

//POST
router.post('/register', async (req, res) => {
        const check = await Auth.findOne({username: req.body.username})
        // if(check){
        //     res.status(403).json("not authorised")
        // }
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 12)
            const newUser = new Auth({
                username: req.body.username,
                password:  hashedPassword
            })

            const user = await newUser.save()
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json({success: false, message: error})
        }
            
    })

    router.post('/login', async (req, res)=> {
        try {   
            const user = await Auth.findOne({username: req.body.username})
            if(!user){
                return res.status(400).json('Incorrect username or password.')
            }
            const passwordCheck = await bcrypt.compare(req.body.password, user.password)
            if(!passwordCheck){
                return res.status(400).json('Incorrect username or password')
            }
            const {password, ...others} = user._doc
            res.status(200).json(others)
            }catch (error) {
            res.status(500).json({success: false, message: error})
        }
    })
    
    module.exports = router
