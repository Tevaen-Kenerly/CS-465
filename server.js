const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = 3000;

const travelerRoutes = require('./app_server/routes/traveler');
app.use('/', travelerRoutes);


app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.listen(PORT, () => {
    console.log(`Travlr Getaways app running at http://localhost:${PORT}`);
});