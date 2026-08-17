const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { username, password } = req.body;

  // Temporary mock login
  if (username === 'admin' && password === 'password') {

    const token = jwt.sign(
      { username: username },
      'MY_SECRET_KEY',
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      token: token
    });

  }

  return res.status(401).json({
    message: 'Invalid credentials'
  });
};

module.exports = {
  login
};