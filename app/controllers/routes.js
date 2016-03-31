var express = require('express')
  , router = express.Router()
  , Lesson = require('../models/lesson')
  , moment = require('moment');
// ----------------------------------------------------
router.route('/golfLesson')

    // create a lesson (accessed at POST http://localhost:8080/api/createNewLesson)
    .post(function(req, res) {
        
        // create a new instance of the Lesson model
        var golfLesson = new Lesson();     
        golfLesson.StartDate = "21 March";  
        golfLesson.StartTime = "7.30pm"
        golfLesson.Duration = 30; 
        golfLesson.Student = "";
        golfLesson.Coach = "Danny";
        golfLesson.Description = "";
        golfLesson.Status = "unbooked";

        // save the lesson and check for errors
        golfLesson.save(function(err) {
            if (err)
                res.send(err);
                
            res.jsonp({ message: 'Lesson Added!' });
        });
    })
    
    .get(function(req, res) {
         Lesson.find(function(err, golfLesson) {

             if (err)
                 res.send(err);

             res.jsonp(golfLesson);
        });
})
     
router.route('/bookedGolfLesson')  
    .get(function(req, res) {
         Lesson.find({ Status: 'booked'},
             function(err, golfLesson) {

             if (err)
                res.json(err);
    
            res.jsonp(golfLesson);
        });
})
  
 router.route('/availGolfLesson')  
    .get(function(req, res) {
         Lesson.find({ Status: 'unbooked'},
             function(err, golfLesson) {

             if (err)
                res.json(err);
    
            res.jsonp(golfLesson);
        });
})
  
  

// ----------------------------------------------------
router.route('/golfLesson/:lesson_id')

    // get the lesson with that id
    .get(function(req, res) {
        Lesson.findById(req.params.lesson_id, function(err, golfLesson) {
            if (err)
                res.send(err);
            res.jsonp(golfLesson);
        });
    })
    
    .put(function(req, res) {
        // use our lesson model to find the lesson we want
        Lesson.findById(req.params.lesson_id, function(err, golfLesson) {

            if (err)
                res.send(err);

            golfLesson.Status = "booked";  // update the lesson info

            // save the lesson
            golfLesson.save(function(err) {
                if (err)
                    res.send(err);

                res.jsonp({ message: 'Lesson updated!' });
            });
        });
    })
    
    .post(function (req, res) {
        
        Lesson.findById(req.params.lesson_id, 
            function(err, golfLesson) {
                if (err)
                    res.send(err);
                
                 golfLesson.remove(function(err) {
                    if (err) {
                        res.statusCode = 403;
                        res.send(err);
                    } else {
                        res.jsonp({ message: 'Lesson Removed' });
                    }
                });   
                    
        });
})

router.route('/availGolfLesson/:bookingId')

    // get the lesson with that id (accessed at GET http://localhost:8080/api/voucher/:voucher_id)
    .get(function(req, res) {
        Lesson.findById(req.params.bookingId, function(err, golfLesson) {
            if (err)
                res.send(err);
            res.jsonp(golfLesson);
        });
    })
    
    // .put(function(req, res) {
    //     // use our lesson model to find the lesson we want
    //     Lesson.findById(req.params.lesson_id, function(err, golfLesson) {

    //         if (err)
    //             res.send(err);

    //         golfLesson.Status = "booked";  // update the lesson info

    //         // save the lesson
    //         golfLesson.save(function(err) {
    //             if (err)
    //                 res.send(err);

    //             res.jsonp({ message: 'Lesson updated!' });
    //         });
    //     });
    // })
    
    // .post(function (req, res) {
        
    //     Lesson.findById(req.params.lesson_id, 
    //         function(err, golfLesson) {
    //             if (err)
    //                 res.send(err);
                
    //              golfLesson.remove(function(err) {
    //                 if (err) {
    //                     res.statusCode = 403;
    //                     res.send(err);
    //                 } else {
    //                     //res.json(golfLesson);
    //                     res.jsonp({ message: 'Lesson Removed' });
    //                 }
    //             });   
                    
    //     });
//})

// ----------------------------------------------------
router.route('/addGolfLesson')

    // create a lesson
    .post(function(req, res) {
        
        var formDate = new Date(req.body.startdate);
        var formStartDate = moment(formDate);
        
        // create a new instance of the Lesson model
        var golfLesson = new Lesson(); 
        golfLesson.StartDate = formStartDate;
        golfLesson.StartTime = req.body.starttime;
        golfLesson.Duration = 30; 
        golfLesson.Student = "Barry";
        golfLesson.Coach = "Danny";
        golfLesson.Description = "irons lesson";
        golfLesson.Status = "booked";

        //save the lesson and check for errors
        golfLesson.save(function(err) {
            if (err)
                res.send(err);
                
            res.jsonp({ message: 'Lesson Added!' });
        });
})
    
module.exports = router