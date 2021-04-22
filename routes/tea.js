const express = require('express');  //import express
const multer = require('multer');
const upload = multer();

// Create an express router object to set up our routes
const router  = express.Router(); 

// Import teaController from our controllers/tea.js file 
const teaController = require('../controllers/tea'); 

// Routes with the controller function as the callback to handle the request.
router.get('/tea', teaController.getAllTea);
router.post("/tea", upload.none(), teaController.newTea);
router.delete('/tea', teaController.deleteAllTea);

router.get('/tea/:name', teaController.getOneTea);
router.post('/tea/:name', teaController.newComment);
router.delete('/tea/:name', teaController.deleteOneTea);

// Export the route to use in our server.js
module.exports = router;