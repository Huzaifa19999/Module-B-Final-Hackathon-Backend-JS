const moongose = require("mongoose");

const authSchema = new moongose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type:String,
    required:true,
    unique:true
  },
  password: {
    type:string,
    required:true
  }
});


module.exports = moongose.model('Auth',authSchema)