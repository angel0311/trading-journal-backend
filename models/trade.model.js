const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    // New fields based on your request
    symbol: { type: String, required: true },
    futureContract: { type: String, required: true },
    expirationDate: { type: Date, required: true },
    timeToStopTrading: { type: String },
    strategy: { type: String, enum: ['', 'TF', 'TR', 'OL'] },
    tradeType: { type: String, enum: ['long', 'short'], required: true },
    investment: { type: Number },
    initialPrice: { type: Number, required: true },
    finalPrice: { type: Number }, // No longer required at creation
    initialDateTime: { type: Date, required: true },
    finalDateTime: { type: Date }, // No longer required at creation
    limitOrder: { type: Boolean, default: false },
    stopOrder: { type: Boolean, default: false },
    targetOrder: { type: Boolean, default: false },
    motivation: { type: String },
    outcome: { type: String },
}, {
    timestamps: true, // This adds createdAt and updatedAt fields automatically
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;