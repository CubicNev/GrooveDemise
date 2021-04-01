const express = require('express')
const router = express.Router()
const treeRequestController =   require('../controllers/treerequest.controller');
// Retrieve all treeRequest
router.get('/', treeRequestController.findAll);
// Create a new treeRequest
router.post('/', treeRequestController.create);
// Retrieve a single treeRequest with id
router.get('/:id', treeRequestController.findById);
module.exports = router