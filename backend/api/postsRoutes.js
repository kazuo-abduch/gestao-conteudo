const { Router } = require('express');
const postsControllers = require('../controllers/postsControllers');

const router = Router();

router.get('/', postsControllers.createPosts);

export default router;