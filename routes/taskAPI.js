const express = require("express");
const db = require("../models");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

// get all tasks
router.get("/api/task", isAuthenticated, async (req, res) => {
  try {
    const task = await db.Task.find({ martianID: req.user.id });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// create a single new task
router.post("/api/task", isAuthenticated, async (req, res) => {
  try {
    const task = await db.Task.create({ ...req.body, martianID: req.user.id });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
    n;
  }
});

// Post bulk tasks when retrieved from indexedDB
router.post("/api/task/bulk", isAuthenticated, async ({ body }, res) => {
  try {
    const task = await db.Task.insertMany({
      ...req.body,
      martianID: req.user.id,
    });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
    n;
  }
});

// read one task by task id
router.get("/api/task/:id", isAuthenticated, async (req, res) => {
  try {
    const task = await db.Task.findById({ _id: req.params.id });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// Update one task by id
router.put("/api/task/:id", isAuthenticated, async (req, res) => {
  try {
    const task = await db.Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// delete one task by task id
router.delete("/api/task/:id", isAuthenticated, async (req, res) => {
  try {
    const task = await db.Task.remove({ _id: req.params.id });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// export the router
module.exports = router;
