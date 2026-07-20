const fs = require('fs');
const path = require('path');

const tripsFile = path.join(__dirname, '..', '..', 'data', 'trips.json');

const travelList = (req, res) => {
  fs.readFile(tripsFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading trips.json:', err);
      return res.render('travel', { title: 'Travel', trips: [] });
    }

    let trips = [];
    try {
      trips = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing trips.json:', parseErr);
    }

    res.render('travel', {
      title: 'Travel',
      trips: trips
    });
  });
};

module.exports = {
  travelList
};
