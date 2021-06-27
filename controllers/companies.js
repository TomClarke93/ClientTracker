const Company = require('../models/company');

module.exports.index = async (req, res) => {
    const companies = await Company.find({});
    res.render('companies/index', {companies});
}

module.exports.renderNewForm = (req, res) => {
    res.render('companies/new')
}

module.exports.createCompany = async (req, res) => {
    const newCompany = new Company(req.body.company);
    await newCompany.save();
    res.redirect('/companies');
}

module.exports.viewCompany = async (req, res) => {
    const {id} = req.params;
    const foundCompany = await Company.findById(id);
    res.render('companies/show', {company: foundCompany});
}

module.exports.renderEditForm = async (req, res) => {
    const {id} = req.params;
    const foundCompany = await Company.findById(id);
    res.render('companies/edit', {company: foundCompany});
}

module.exports.updateCompany = async (req, res) => {
    const {id} = req.params;
    const foundCompany = await Company.findByIdAndUpdate(id, {...req.body.company});
    res.redirect(`/companies/${id}`);
}

module.exports.destroyCompany = async (req, res) => {
    const {id} = req.params;
    const foundCompany = await Company.findByIdAndDelete(id);
    res.redirect('/companies');
}