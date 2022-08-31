const express = require('express');
const postsControllers = require('./controllers/postsControllers');

const app = express();

app.use(express.json());
app.post('/posts',
  postsControllers.createPost
);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
