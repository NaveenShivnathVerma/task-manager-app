const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const auth = require('../middleware/authMiddleware');

// Get all tasks for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

// Add a new task
router.post('/', auth, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description, user: req.user });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Error adding task" });
  }
});

// Update a task (Edit / Mark Complete)
router.put('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
});

// Delete a task
router.delete('/:id', auth, async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({ _id: req.params.id, user: req.user });
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
});

module.exports = router;
