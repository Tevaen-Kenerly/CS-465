const axios = require('axios');

const travellist = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/trips');

    res.render('travel', {
      title: 'Available Trips',
      trips: response.data
    });
  } catch (err) {
    console.error('Error fetching trips from API:', err.message);
    res.render('travel', {
      title: 'Available Trips',
      trips: []
    });
  }
};

module.exports = {
  travellist
};
