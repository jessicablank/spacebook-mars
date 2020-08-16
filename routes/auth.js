const express = require("express");
const auth = require("../config/auth");
const db = require("../models");

const router = express.Router();

router.post("/api/login", (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then((result) => {
      if (result.success) {
        return res.json(result);
      }
      res.status(400).json(result);
    })
    .catch(() => res.sendStatus(500));
});

router.post("/api/signup", (req, res) => {
  db.User.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
