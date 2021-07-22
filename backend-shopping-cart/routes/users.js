const express = require('express');
const getUserById = require('../data/getUserById');
const delUserById = require('../data/getUserById');
const router = express.Router();


//MODELS
const User = require('../models/User');

// GET USERS
router.get('/', async (req, res) => {
  try {
    const usersFromDB = await User.find();
    res.json(usersFromDB);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// GET USER
router.get('/user', async (req, res) => {
  const userId = req.body.userId;
  try {
    const userFromDB = await getUserById(userId);
    res.json(userFromDB);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// CREATE ITEM
router.post('/', async (req, res) => {
  console.log(req.body);
  const user = new User({
    id: req.body.id,
    name: req.body.name,
    lastname: req.body.lastname,
    address: req.body.address,
    historyG: req.body.historyG,
  });
  try {
    const newUser = await user.save();
    res.json(newUser);
    console.log("create success");
  } catch (err) {
    res.json({ message: err.message });
    console.log("create error");
  }
});

// DELETE USER/*
router.delete('/user', async (req, res) => {
  const userId = req.body.userId;
  try {
    const userFromDB = await delUserById(userId);
    res.json(userFromDB);
    console.log("delete success");
  } catch (err) {
    res.json({ message: err.message });
    console.log("delete error");

  }
});

module.exports = router;
