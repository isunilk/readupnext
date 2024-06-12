import mongoose from "mongoose";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
   user: String,
   email: String,
   password: String,
   bookmarks: {
      list: [
         {
            slug: String,
            title: String
         }
      ],
      series: [
         {
            slug: String,
            title: String
         }
      ],
      people: [
         {
            slug: String,
            title: String
         }
      ],
      author: [
         {
            slug: String,
            title: String
         }
      ]
   },
   tokens: [
      {
         token: {
            type: String,
            required: true
         }
      }
   ]
})


userSchema.pre('save', async function (next) {
   // console.log("Hi from usrSchema")
   if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 12)
   }
   next();
})

// Generating token
userSchema.methods.generateAuthToken = async function () {
   try {
      let tokenVal = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
      this.tokens = this.tokens.concat({ token: tokenVal })
      await this.save()
      return tokenVal;

   } catch (err) {
      console.log(err)
   }
}

mongoose.models = {};

const User = mongoose.model("users", userSchema);
export default User;