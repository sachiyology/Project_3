const {Schema, model} = require('mongoose');



const commentSchema = new Schema({
name: {type: String, required: true},
message: {type: String, required: true}

}, {
  timestamp: true
})

module.export = model('Comment', commentSchema)
