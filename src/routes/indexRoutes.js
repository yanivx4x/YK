let express = require('express');
let indexRouter = express.Router();



let router = function(nav) {

    indexRouter.get('/', function(req, res) {
        res.render('index', {

        })
    });

    return indexRouter;
};


module.exports = router;