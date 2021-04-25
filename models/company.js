const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema ({
    name: String,
    clientCode: String,
    type: {
        type: String,
        enum: ['Lead', 'Prospect', 'Client', 'Inactive Client']
    },
    summary: String
});

module.exports = mongoose.model('company', companySchema);