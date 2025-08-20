const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    symbolTraded: { type: String, required: true },
    futureContractName: { type: String, required: true },
    contractExpiration: { type: Date, required: true },
    priceBought: { type: Number, required: true },
    priceSold: { type: Number, required: true },
    dateBought: { type: Date, required: true },
    dateSold: { type: Date, required: true },
    commentBuyReason: { type: String },
    commentTradeOutcome: { type: String }
}, {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;