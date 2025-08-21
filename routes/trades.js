const router = require('express').Router();
let Trade = require('../models/trade.model');

// Route to get all trades: GET /trades/
router.route('/').get((req, res) => {
    Trade.find()
        .then(trades => res.json(trades))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route to add a new trade: POST /trades/add
router.route('/add').post((req, res) => {
    const {
        symbol,
        futureContract,
        expirationDate,
        timeToStopTrading,
        strategy,
        tradeType,
        investment,
        initialPrice,
        finalPrice,
        initialDateTime,
        finalDateTime,
        limitOrder,
        stopOrder,
        targetOrder,
        motivation,
        outcome
    } = req.body;

    const newTrade = new Trade({
        symbol,
        futureContract,
        expirationDate,
        timeToStopTrading,
        strategy,
        tradeType,
        investment,
        initialPrice,
        finalPrice,
        initialDateTime,
        finalDateTime,
        limitOrder,
        stopOrder,
        targetOrder,
        motivation,
        outcome,
    });

    newTrade.save()
        .then(() => res.json('Trade added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route to delete a trade: DELETE /trades/delete/:id
router.route('/delete/:id').delete((req, res) => {
    Trade.findByIdAndDelete(req.params.id)
        .then(() => res.json('Trade deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route to update an existing trade: POST /trades/update/:id
router.route('/update/:id').post((req, res) => {
    Trade.findById(req.params.id)
        .then(trade => {
            // This will take all the fields from the request body and update the trade
            Object.assign(trade, req.body);

            trade.save()
                .then(() => res.json('Trade updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;