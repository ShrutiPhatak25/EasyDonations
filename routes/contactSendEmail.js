var Donation = require('../models/models');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

//api for sending email

router.use('/contact', function(req, res, next){
        
    if(!req.isAuthenticated()){
        return res.redirect('/#login');
    }
    
    return next();
});

router.route('/contact')
    //Send an email
.post()