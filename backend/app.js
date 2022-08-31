const express = require('express');

const postRoutes = require('./api/postsRoutes');

const app = express();

app.use(express.json());

app.use('/post', postRoutes);

export default app;