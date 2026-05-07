const router = require("express").Router();

const Project = require("../models/Project");

// GET PROJECTS
router.get("/", async (req, res) => {
  const projects = await Project.find();

  res.json(projects);
});

// CREATE PROJECT
router.post("/", async (req, res) => {
  const project = new Project({
    name: req.body.name,

    description: req.body.description,
  });

  await project.save();

  res.json(project);
});

module.exports = router;