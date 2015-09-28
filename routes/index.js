var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var board = [];
  for (var i = 1; i <= 8; i++) {
      for (var j = 1; j <= 7; j++) {
          board.push({
              column:j,
              row: i
          });
      }
  }
  res.render('index', { 
    title: 'CL', 
    board: JSON.stringify(board)
  });

});

module.exports = router;
