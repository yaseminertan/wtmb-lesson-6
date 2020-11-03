const express=require('express')
const app=express()
const PersonService=require('./services/person-service-mongo')
const bodyParser=require('body-parser')

const personRouter=require('./routes/person')
const meetupRouter=require('./routes/meetup')
require('./mongo-connection')

app.set('view engine','pug')
app.use(bodyParser.json())

app.use('/person',personRouter)
app.use('/meetup',meetupRouter)

app.listen(3001,()=>{
    console.log('server listening')
})