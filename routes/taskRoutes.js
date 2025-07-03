// taskRoutes.js - URL Paths for Tasks

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    getTasks, createTask, updateTask, deleteTask
} = require('../controllers/taskController');

router.get('/', auth, getTasks);
router.post('/', auth, createTask);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;