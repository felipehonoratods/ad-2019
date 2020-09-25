const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
  name: String,
  email: String,
  friend: String,
});

module.exports =  mongoose.model('Friend', FriendSchema);