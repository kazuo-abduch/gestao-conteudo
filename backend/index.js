require('dotenv/config');
const express = require('express');
const PORT = process.env.PORT;
const postsControllers = require('./controllers/postsControllers');

const app = express();

app.use(express.json());
app.post('/posts',
  postsControllers.createPost
);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));
