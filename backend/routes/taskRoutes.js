const router = require("express").Router();
const Task = require("../models/Task");

// GET ALL TASKS
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// CREATE TASK
router.post("/", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    status: req.body.status || "Pending",
  });

  await task.save();
  res.json(task);
});

// UPDATE TASK STATUS
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      status: req.body.status,
    },
    { new: true }
  );

  res.json(task);
});
router.post("/", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    status: req.body.status || "Pending",
    priority: req.body.priority || "Medium",
    dueDate: req.body.dueDate,
  });

  await task.save();
  res.json(task);
});

module.exports = router;
