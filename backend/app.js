const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/apartments', require('./src/routes/apartmentRoutes'));
app.use('/api/rooms', require('./src/routes/roomRoutes'));
app.use('/api/houses', require('./src/routes/houseRoutes'));
app.use('/api/collectives', require('./src/routes/collectiveRoutes'));
app.use('/api/applications', require('./src/routes/applicationRoutes'));
app.use('/api/landlords', require('./src/routes/landlordRoutes'));
app.use('/api/payments', require('./src/routes/payments'));


module.exports = app;