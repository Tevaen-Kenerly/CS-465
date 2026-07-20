const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = 3000;

// ROUTES
const travelerRoutes = require('./app_server/routes/index');
app.use('/', travelerRoutes);

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.listen(PORT, () => {
    console.log(`Travlr Getaways app running on port ${PORT}`);
});
