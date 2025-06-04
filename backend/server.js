const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let tasks = []; // Simple array to store tasks in-memory

// GET /tasks - Retrieve all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST /tasks - Add a new task
app.post('/tasks', (req, res) => {
    const { title, description, status } = req.body;
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT /tasks/:id - Update a task
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    res.json(task);
});

// DELETE /tasks/:id - Delete a task
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
