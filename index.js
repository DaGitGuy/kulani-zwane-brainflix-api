const express = require('express');
const app = express();
const videosRoutes = require('./routes/videosRoutes');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(express.static('./public'));
app.use(cors());

app.use((req, res, next) => {
    console.log('Incoming request: ', req.path);
    next();
});

app.use((req, res, next) => {
    //POST JSON validation middleware
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
      res.status(400).send('Server requires application/json');
    } else {
      next();
    }
  });

app.use('/videos', videosRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on ${PORT}...`);
});