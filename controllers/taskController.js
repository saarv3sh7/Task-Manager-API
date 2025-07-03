// taskController.js - Task Logic (CRUD)

const Task = require('../models/Task');

// getTasks - Show User's Tasks
exports.getTasks = async(req, res) => {
    const tasks = await Task.find({user: req.user._id});
        res.json(tasks);
};

// createTask - Add a New Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, user: req.user._id });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// updateTask - Edit Task
exports.updateTask = async(req, res) => {
    const task = await Task.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
            req.body,
        {new: true}
    );
    res.json(task);
};

// deleteTask - Remove a Task
exports.deleteTask = async(req, res) => {
    await Task.findByIdAndDelete({_id: req.params.id, user: req.user._id});
        res.status(204).end();                            // 204 -> sucess but no content in response
};