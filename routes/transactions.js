const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const multer = require('../multer/multer')

router.get('/', controller.defaultController);
router.post('/todoApp', multer.single("posterName"), controller.todoApp);
router.get('/editTodoController/:id', controller.editTodoController);
router.post('/updateMovie/:id', multer.single("posterName"), controller.updateMovie);
router.get('/deleteVolTood/:id', controller.deleteVolTood);

module.exports = router; 