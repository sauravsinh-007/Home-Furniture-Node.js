const mongoose = require('mongoose')

const MongoURL = 'mongodb://localhost:27017/Home_furniture'

mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log('connect to MongoDB server')
})

db.on('error', (err) => {
    console.log('  MongoDB connection error', err)
})

db.on('disconnected', () => {
    console.log('disconnected to MongoDB server')
})

module.exports = db