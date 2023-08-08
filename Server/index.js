const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const userRoute = require('./Routes/users.js')
const authRoute = require('./Routes/auth.js')

dotenv.config()

const port = process.env.PORT

//middleware

app.get('/', (req, res)=>{
    res.send("API running,")
})
app.use(cors())
app.use(express.json())



app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)



const startServer = async () => {
    try {
        
    await mongoose.connect(process.env.MONGO_URL,
        console.log("Mongo"))
    app.listen(port, () => {
        console.log(`Listening on ${port}`)
    })
} catch (error) {
    console.log(error)
}
}

startServer()