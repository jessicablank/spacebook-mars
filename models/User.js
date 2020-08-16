const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Execute before each user.save() call
UserSchema.pre("save", async function () {
  const user = this;

  // Break out if the password hasn't changed
  if (!user.isModified("password")) {
    return;
  }

  // Password changed so we need to hash it
  const SALT_ROUNDS = 10;
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

UserSchema.methods.verifyPassword = async function (plainTextPassword) {
  return bcrypt.compare(plainTextPassword, this.password);
  // bcrypt.compare(password, this.password, (err, isMatch) => {
  //   if (err) {
  //     return cb(err);
  //   }
  //   cb(null, isMatch);
  // });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
