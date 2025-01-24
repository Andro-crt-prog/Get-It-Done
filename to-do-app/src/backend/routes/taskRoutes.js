import express from 'express';
import TaskService from '../services/taskService.js';

const router = express.Router();
const taskService = new TaskService();

router.get('/', async (req, res) => {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const { title, timestamp } = req.body;
    const task = await taskService.addTask(title, timestamp);
    res.status(201).json(task);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const task = await taskService.removeTask(parseInt(id, 10));
    if (task) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

router.patch('/:id/complete', async (req, res) => {
    const { id } = req.params;
    const task = await taskService.markTaskCompleted(parseInt(id, 10));
    if (task) {
        res.json(task);
    } else {
        res.status(404).send();
    }
});

export default router;