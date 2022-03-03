//importing express 
const express = require("express");
//importing controller
const usersController = require("../controllers/users");

//creating router
let router  = new express.Router();

router.get('/', usersController.getAllUsers);
router.post('/add', usersController.addUser);
module.exports(router);