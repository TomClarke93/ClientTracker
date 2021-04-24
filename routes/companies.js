// /companies routes
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Companies');
})

router.get('/new', (req, res) => {
    res.send('Add new Company');
})

router.post('/', (req, res) => {
    res.redirect('/companies');
})

router.get('/:id', (req, res) => {
    res.send('View Company');
})

router.get('/:id/edit', (req, res) => {
    res.send('Edit Company');
})

router.patch('/:id', (req, res) => {
    res.redirect('/:id');
})

router.delete('/:id', (req, res) => {
    res.redirect('/companies');
})

module.exports = router;