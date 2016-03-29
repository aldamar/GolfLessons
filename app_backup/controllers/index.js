var express = require('express')
  , router = express.Router()
  , Voucher = require('./app/models/voucher')
  , Lesson = require('./app/models/lesson');

/*router.use('/comments', require('./comments'))
router.use('/users', require('./users'))*/

router.get('/', function(req, res) {
  /*Voucher.all(function(err, promovoucher) {
    res.render('index', {comments: comments})
  })*/
})

module.exports = router