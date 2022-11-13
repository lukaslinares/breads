// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyOZAxpJjXRTRJMEYHA7iaQrQs3gfZj9J9uU6PTZjhFfrAjxL9H6eyU3xNQ_a3L8MVbg&usqp=CAU' },
    baker: {
      type: String,
      enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread

