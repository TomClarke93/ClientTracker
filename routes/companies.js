// /companies routes
const express = require('express');
const router = express.Router();

const Company = require('../models/company');

router.get('/', async (req, res) => {
    const companies = await Company.find({});
    res.render('companies/index', {companies});
})

router.get('/new', (req, res) => {
    res.render('companies/new')
})

router.post('/', async (req, res) => {
    const newCompany = new Company(req.body.company);
    await newCompany.save();
    res.redirect('/companies');
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const foundCompany = await Company.findById(id);
    res.render('companies/show', {company: foundCompany});
})

router.get('/:id/edit', async (req, res) => {
    const {id} = req.params;
    const foundCompany = await Company.findById(id);
    res.send(foundCompany);
})

router.patch('/:id', async (req, res) => {
    const {id} = req.params;
    const foundCompany = await Company.findByIdAndUpdate(id, {...req.body.company});
    res.redirect(`/companies/${id}`);
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const foundCompany = await Company.findByIdAndDelete(id);
    res.redirect('/companies');
})

module.exports = router;