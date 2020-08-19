const express = require("express");
const auth = require("../config/auth");
const db = require("../models");

const router = express.Router();

// create a new task
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

  router.delete("/api/task/:id", async (req, res) => {
    try {
      const task = await db.Task.remove({_id: req.params.id});
      res.json(task);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  });

  router.put("/api/task/:id", async (req, res) => {
    try {
      const task = await db.Task.remove();
      res.json(task);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  });

  router.get("/api/task/:id", async (req, res) => {
    try {
      const task = await db.Task.remove();
      res.json(task);
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  });





  // export the router
module.exports = router;