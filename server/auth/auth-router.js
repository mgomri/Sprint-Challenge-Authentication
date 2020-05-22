const router = require('express').Router();
const Users = require('../database/dbConfig.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Token
const generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const secret = 'uyhshaske4@k/*lsiopsnpm&&uty';
  const options = {
    expiresIn: '24h'
  };
  return jwt.sign(payload, secret, options);
};



//Register
router.post('/register', (req, res) => {
  const credentials = req.body;
  credentials.password = bcrypt.hashSync(credentials.password, 12);

  Users.add(credentials)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to register the user'})
    });
});


//Login
router.post('/login', (req, res) => {
 let { username, password } = req.body;
 Users.findBy({ username }).first()
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
          const token = generateToken(user);
          res.status(200).json({ 
            message: `welcome ${user.username}`,
            token
          });
        }else{
          res.status(401).json({ message: 'Invalid Credentials'});
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });

});

module.exports = router;