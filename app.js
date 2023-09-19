const express = require("express");
const cors = require("cors");
const { Robot } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Common function to handle robot operations.
 *
 * @param {Function} operation - The operation to perform.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const handleRobotOperation = async (operation, req, res) => {
    try {
        const result = await operation(req, res);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: "Robot not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

/**
 * Get all robots.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/robots", (req, res) =>
    handleRobotOperation(async () => Robot.findAll(), req, res)
);

/**
 * Get a single robot by ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/robots/:id", (req, res) =>
    handleRobotOperation(async () => Robot.findByPk(req.params.id), req, res)
);

/**
 * Create a new robot.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.post("/robots", (req, res) =>
    handleRobotOperation(async () => Robot.create(req.body), req, res)
);

/**
 * Update a robot.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.put("/robots/:id", (req, res) =>
    handleRobotOperation(async () => {
    const robot = await Robot.findByPk(req.params.id);
    return robot ? robot.update(req.body) : null;
    }, req, res)
);

/**
 * Delete a robot.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.delete("/robots/:id", (req, res) =>
    handleRobotOperation(async () => {
    const robot = await Robot.findByPk(req.params.id);
    return robot ? robot.destroy() : null;
    }, req, res)
);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});