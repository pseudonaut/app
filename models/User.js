import mongoose from 'mongoose'

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  email: {
    /* The email of this users */

    type: String,
    required: [true, 'Please provide an email.'],
    maxlength: [120, 'Email cannot be more than 120 characters'],
  },
  membership: {
    /* The tier of this user */

    type: String,
    required: [true, 'Please provide the membership tier.'],
    maxlength: [120, 'Tier cannot be more than 120 characters'],
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)