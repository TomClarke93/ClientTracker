const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema ({
    name: String,
    clientCode: String,
    type: {
        type: String,
        enum: ['lead', 'prospect', 'client', 'inactive']
    },
    summary: String
});

module.exports = mongoose.model('company', companySchema);