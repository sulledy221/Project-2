const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = require('express').Router();
const { ObjectId } = require("bson");


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/beans',
    failureRedirect : '/beans'
  }
));


const BeanSchema = new Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    user: ObjectId
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Bean', BeanSchema);