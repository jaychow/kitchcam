var mongoose = require('mongoose');

var chefSchema = mongoose.Schema({
    firstName:       String,
    lastName:        String,
    username:        String,
    email:           String,
    phone:           String,
    ethnicity:       String,
    specialty:       String,
    bio:             String,
    rank:            Number,
    subscriberCount: Number,
    canStream:       Boolean,
    coverImage:      String,
});

module.exports = mongoose.model('Chef', chefSchema);