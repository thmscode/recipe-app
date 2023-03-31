import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20
  },
  uid: {
    type: String,
    unique: true,
    required: true
  },
  favourites: [
    {
      id: String,
      title: String,
      imgUrl: String
    }
  ]
});

const User = mongoose.model('User', userSchema);
export default User;