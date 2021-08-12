const { Schema, model } = require('mongoose');

// Make schema = Bouncer at the club

const bookmarkSchema = new Schema({
  title: { type: String, required: true, unique: true },
  url: String,
  comments: [ {type: Schema.Types.ObjectId, ref: 'Comment'} ]
}, {
  timestamps: true
})


module.exports = model('Bookmark', bookmarkSchema )
