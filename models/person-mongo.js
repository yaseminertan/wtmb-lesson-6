const mongoose=require('mongoose')

const PersonSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2
    },
    age:{
        type:Number,
        default:0
        //min:18
    },
    meetups:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Meetup',
        autopopulate:{
            maxDepth:1
        }
    }]
})
// PersonSchema.methods.attend=async function(meetup){
//     this.meetups.push(meetup)
//     meetup.attendees.push(this)
//     await this.save()
//     await meetup.save()
// }
PersonSchema.methods.findPeople=async function(){
    return PersonModel.find({
       age:30
    //   age:{
    //       $gt:18
    //   }
    })
}
PersonSchema.plugin(require('mongoose-autopopulate'))
const PersonModel=mongoose.model('Person',PersonSchema)

module.exports=PersonModel

/// models should not contain methods
/// functions will be in service