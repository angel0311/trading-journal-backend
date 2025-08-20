const router = require('express').Router();
let Trade = require('../models/trade.model');

// Route to get all trades: GET /api/trades/
router.route('/').get((req, res) => {
    Trade.find()
        .then(trades => res.json(trades))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route to add a new trade: POST /api/trades/add
router.route('/add').post((req, res) => {
    const {
        symbolTraded,
        futureContractName,
        contractExpiration,
        priceBought,
        priceSold,
        dateBought,
        dateSold,
        commentBuyReason,
        commentTradeOutcome
    } = req.body;

    const newTrade = new Trade({
        symbolTraded,
        futureContractName,
        contractExpiration,
        priceBought,
        priceSold,
        dateBought,
        dateSold,
        commentBuyReason,
        commentTradeOutcome,
    });

    newTrade.save()
        .then(() => res.json('Trade added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;