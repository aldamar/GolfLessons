var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VoucherSchema   = new Schema({
    VoucherCode: String,
    Total: Number,
    Used: Number
});

module.exports = mongoose.model('Voucher', VoucherSchema);


// Create new comment in your database and return its id
