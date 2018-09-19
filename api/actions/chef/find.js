var mongoose = require('mongoose');
var Chef = require('../models/chefModel.js');


export default function findTopChefs(req) {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost/kitchcam', { useNewUrlParser: true });
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Failed to Connect to Mongo:'));
        db.once('open', function(){
            return Chef.find({rank: { $gt: 10}}).exec(function (err, chefs) {
                if (err) return console.error(err);
                resolve(chefs);
            });
        });
    });
}