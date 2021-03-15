const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
const Bean = require('../models/bean');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
})),

function(accessToken, refreshToken, profile, cb) {
  Bean.findOne({ 'googleId': profile.id }, function(err, bean) {
    if (err) return cb(err);
    if (bean) {
      return cb(null, bean);
    } else {
      // we have a new beans via OAuth!
      var newBean = new Bean({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id
      });
      newBean.save(function(err) {
        if (err) return cb(err);
        return cb(null, newBean);
      });
    }
  });
}


passport.serializeUser(function(bean, done) {
  done(null, bean.id);
});

passport.deserializeUser(function(id, done) {
Bean.findById(id, function(err, bean) {
  done(err, bean);
});
});

passport.serializeUser(function (user, done) {
  done(null, user.id);
}),

passport.deserializeUser(function (id, done) {

  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user

});



