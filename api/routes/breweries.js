const config = require('../config');
const { Router } = require('express');
const paginate = require('express-paginate');

const router = Router();

// Initialize Controller
const breweriesController = require('../controllers/breweriesController');

// Get All
router.get('/breweries', paginate.middleware(10, 50), breweriesController.all);

// Get One
router.get('/breweries/:id', breweriesController.show);

// List
router.get('/list/breweries', breweriesController.list);

// Get Locations of Breweries
router.get('/locations/breweries', breweriesController.getLocations);

// Create
router.post('/breweries', config.isAuthenticated, breweriesController.create);

// Update
router.put(
  '/breweries/:id',
  config.isAuthenticated,
  breweriesController.update
);

// Delete
router.delete(
  '/breweries/:id',
  config.isAuthenticated,
  breweriesController.delete
);

// Update Locations and Return None Location Breweries
router.get('/updateLocations/breweries', breweriesController.updateLocation);

module.exports = router;
