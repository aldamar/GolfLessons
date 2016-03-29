var express = require('express')
  , router = express.Router()
  , Lesson = require('../models/lesson');
// ----------------------------------------------------
router.route('/golfLesson')

    // create a lesson (accessed at POST http://localhost:8080/api/createNewLesson)
    .post(function(req, res) {
        
        var golfLesson = new Lesson();      // create a new instance of the Lesson model
        golfLesson.StartDate = "21 March";  
        golfLesson.Duration = 30; 
        golfLesson.Student = "";
        golfLesson.Coach = "Danny";
        golfLesson.Description = "";
        golfLesson.Status = "unbooked";
        // golfLesson.StartDate = req.body.vouchercode;  

        // save the lesson and check for errors
        golfLesson.save(function(err) {
            if (err)
                res.send(err);
                
            res.jsonp({ message: 'Lesson Added!' });
        });
    })
    
    // get all the bears (accessed at GET http://localhost:8080/api/create)
    .get(function(req, res) {
         Lesson.find(function(err, golfLesson) {

             if (err)
                 res.send(err);

             res.jsonp(golfLesson);
        });
})
     
router.route('/bookedGolfLesson')  
    // get all the bears (accessed at GET http://localhost:8080/api/create)
    .get(function(req, res) {
         Lesson.find({ Status: 'booked'},
             function(err, golfLesson) {

             if (err)
                res.json(err);
    
            res.jsonp(golfLesson);
        });
})
  
 router.route('/availGolfLesson')  
    // get all the bears (accessed at GET http://localhost:8080/api/create)
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

    // get the lesson with that id (accessed at GET http://localhost:8080/api/voucher/:voucher_id)
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
    
    .delete(function (req, res) {
        
        Lesson.findById(req.params.lesson_id, 
            function(err, golfLesson) {
                if (err)
                    res.send(err);
                
                 golfLesson.remove(function(err) {
                    if (err) {
                        res.statusCode = 403;
                        res.send(err);
                    } else {
                        //res.json(golfLesson);
                        res.jsonp({ message: 'Lesson Removed' });
                    }
                });   
                    
        });
})
module.exports = router