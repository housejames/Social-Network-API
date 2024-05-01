const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./api/routes/userRoutes');
const thoughtRoutes = require('./api/routes/thoughtRoutes');

// app.use(express.urlencoded({ extended: true }));
// app.use(routes);

const app = express();
const PORT = 3001;

app.use(express.json());

mongoose.connect('mongodb://localhost/social_network_db');

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });