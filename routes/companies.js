const express = require('express');
const router = express.Router();
const companies = require('../controllers/companies');

router.route('/')
    .get(companies.index)
    .post(companies.createCompany);

router.route('/new')
    .get(companies.renderNewForm);

router.route('/:id')
    .get(companies.viewCompany)
    .patch(companies.updateCompany)
    .delete(companies.destroyCompany);

router.route('/:id/edit')
    .get(companies.renderEditForm);

module.exports = router;