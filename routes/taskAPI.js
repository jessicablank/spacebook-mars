const express = require("express");
const auth = require("../config/auth");
const db = require("../models");

const router = express.Router();

// add routes to create a new task
router.post("/api/task", async (req, res) => {
    try {
      const task = await db.Task.create(req.body);
      res.json(task);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  });

  router.get("/api/task", async (req, res) => {
    try {
      const task = await db.Task.find({});
      res.json(task);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  });
  // export the router
module.exports = router;