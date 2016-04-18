var express = require('express')
  , router = express.Router()
  , Lesson = require('../models/lesson')
  , moment = require('moment')
  , nodemailer = require('nodemailer');

module.exports = {
    sendStudentEmail: function(req, res) {
        // Not the movie transporter!
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'damien.mcgrath7@gmail.com', // Your email id
                pass: 'vum93e3z' // Your password
            }
        });
        
        var text = 'Hello world from \n\n' + req.body.name;
        
        var mailOptions = {
            from: 'damien.mcgrath7@gmail.com', // sender address
            to: 'damien.mcgrath7@gmail.com', // list of receivers
            subject: 'Golf Lesson Confirmed', // Subject line
            generateTextFromHTML: true,
            //text: text //, // plaintext body
            html: '<h2>Golf Lesson Confirmed ✔</h2><p>Hi ' + req.query.studentname + ' <br/> Golf Lesson booked for Tuesday.</p>' // You can choose to send an HTML body instead
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                res.json({yo: 'error'});
            }else{
                console.log('Message sent: ' + info.response);
                res.json({yo: info.response});
            };
        });
    },
    
    sendCoachEmail: function(req, res) {
        // Not the movie transporter!
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'damien.mcgrath7@gmail.com', // Your email id
                pass: 'vum93e3z' // Your password
            }
        });
        
        var text = 'Hello world from \n\n' + req.body.name;
        
        var mailOptions = {
            from: 'damien.mcgrath7@gmail.com', // sender address
            to: 'damien.mcgrath7@gmail.com', // list of receivers
            subject: 'Email Example', // Subject line
            //text: text //, // plaintext body
            html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                res.json({yo: 'error'});
            }else{
                console.log('Message sent: ' + info.response);
                res.json({yo: info.response});
            };
        });
    }
};