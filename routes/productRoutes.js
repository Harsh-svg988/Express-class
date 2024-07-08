const express = require('express');
const router = require('express').Router()
const productControllers = require('../controllers/productControllers');

// Create 
router.post('/',productControllers.createProducts);
// GET ALL BY PRODUCTS
router.get('/',productControllers.getAllProducts)
// GET PRODUCTS BY ID
router.get('/:id',productControllers.getById)
// UPDATE
router.put('/:id',productControllers.updateProducts);
// DELETE
router.delete('/:id',productControllers.deletedProduct)
// DELETE ALL PRODUCTS
router.delete('/',productControllers.allDeletedProducts)

module.exports = router;
