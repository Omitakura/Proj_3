const router = require('express').Router();
const User = require('../../db/User');
const Location = require('../../db/Location');

router.post('/login', async (req, res) => {
  if (await User.findOne({ email: req.body.email, password: req.body.password }) != null) {
    res.json({
      url: '/takeoff',
      email: req.body.email,
      password: req.body.password,
    });
  } else {
    res.json({ error: 'Invalid username or password.' });
  }
});

router.post('/register', async (req, res) => {
  if (!('email' in req.body)) {
    res.json({ error: 'Must use an email adress.' });
    return 0;
  }
  if (!req.body.email.includes('@') || !req.body.email.includes('.')) {
    res.json({ error: 'Invalid email address.' });
    return 0;
  }
  if (!('password' in req.body)) {
    res.json({ error: 'Must provide a password.' });
    return 0;
  }
  if (req.body.password.length < 6) {
    res.json({ error: 'Password must be at least 6 characters.' });
    return 0;
  }
  if (await User.findOne({email: req.body.email}) != null) {
    res.json({ error: 'A user with that email already exists.' });
    return 0;
  }
  User.create(req.body, (err) => {
    if (err) throw err;
    res.end();
  });
  return 0;
});

// Distance checking and relevant locations will be done here
router.get('/locations', async (req, res) => {
  // This will temporarily send the first five results from the db
  const locations = await Location.find({}).limit(5);
  res.json(locations);
});

module.exports = router;
