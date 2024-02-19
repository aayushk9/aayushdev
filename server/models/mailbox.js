const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
    mail: {
        type: String
    }
});

const mail = mongoose.model('mail', mailSchema)

module.exports = {
    mail
}