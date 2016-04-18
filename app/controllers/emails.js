var express = require('express')
  , router = express.Router()
  , Lesson = require('../models/lesson')
  , moment = require('moment')
  , nodemailer = require('nodemailer');

module.exports = {
    sendStudentEmail: function(req, res, date, time) {
        // Not the movie transporter!
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'damien.mcgrath7@gmail.com', // Your email id
                pass: 'vum93e3z' // Your password
            }
        });
        
        var formDate = new Date(date);
        var formStartDate = moment(formDate);
        var day = formStartDate.format("dddd, MMMM Do");
        
        var mailOptions = {
            from: 'damien.mcgrath7@gmail.com', // sender address
            to: 'damien.mcgrath7@gmail.com', // list of receivers
            subject: 'Golf Lesson Confirmed', // Subject line
            generateTextFromHTML: true,
            //text: text //, // plaintext body
            html: '<h2>Golf Lesson Confirmed ✔</h2><p>Hi ' + req.query.studentname + ', <br/><br/> Your Golf Lesson is booked for <b>' + day + ' at ' + time + '</b></p> <p>If you need to change your booking please call Danny on 087 669 4838</p>' // You can choose to send an HTML body instead
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
    
    sendCoachEmail: function(req, res, date, time) {
        // Not the movie transporter!
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'damien.mcgrath7@gmail.com', // Your email id
                pass: 'vum93e3z' // Your password
            }
        });
        
        var formDate = new Date(date);
        var formStartDate = moment(formDate);
        var day = formStartDate.format("dddd, MMMM Do");
        
        var mailOptions = {
            from: 'damien.mcgrath7@gmail.com', // sender address
            to: 'damien.mcgrath7@gmail.com', // list of receivers
            subject: 'Golf Lesson Confirmed', // Subject line
            //text: text //, // plaintext body
            html: '<h2>Golf Lesson Confirmed ✔</h2><p>Student: ' + req.query.studentname + '</p><p>Date: ' + day + '</p><p>Time: ' + time + '</p>' // You can choose to send an HTML body instead
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