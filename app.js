const express = require('express');
const cors = require('cors');
const { Robot } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

// Get all robots
app.get('/robots', async (req, res) => {
    const robots = await Robot.findAll();
    res.json(robots);
});

// Get a single robot by ID
app.get('/robots/:id', async (req, res) => {
    const robot = await Robot.findByPk(req.params.id);
    res.json(robot);
});

// Create a new robot
app.post('/robots', async (req, res) => {
    const newRobot = await Robot.create(req.body);
    res.json(newRobot);
});

// Update a robot
app.put('/robots/:id', async (req, res) => {
    const robot = await Robot.findByPk(req.params.id);
    await robot.update(req.body);
    res.json(robot);
});

// Delete a robot
app.delete('/robots/:id', async (req, res) => {
    const robot = await Robot.findByPk(req.params.id);
    if (robot) {
        await robot.destroy();
        res.json({ message: 'Robot deleted' });
    } else {
        res.status(404).json({ message: 'Robot not found' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});