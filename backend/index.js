require('dotenv/config');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const postsControllers = require('./controllers/postsControllers');
const updatesControllers = require('./controllers/updateControllers');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/posts',
  postsControllers.getAllPosts
)
app.post('/posts',
  postsControllers.createPost
);
app.put('/posts/:id',
  postsControllers.updatePost
)
app.get('/updates/:id',
  updatesControllers.getUpdatesByPostId
)

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));
