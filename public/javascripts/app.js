$(document).ready(function () {
  var piece = {
    position: {
        rows: [1],
        columns: [2,1]
    }
  } 
  var start = {
    position: {
      rows: [1],
      columns: [2,1]
    }
  }

  var end = {
    position: {
      rows: [3,4],
      columns: [4]
    }
  }

  var blockPosition = [
    {
      row: 7,
      col: 1
    }, 
    //test
    {
      row: 4,
      col: 5
    }
  ];


  if($('.board').size() > 0 ) {
    $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').addClass('active');
    $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').addClass('active'); 
    _.each(start.position.rows, function (row) {
      _.each(start.position.columns, function (column) {
        $('tr').find('td[data-row='+row+'][data-column='+column+']').css('color', 'green');
      });
    });
    _.each(end.position.rows, function (row) {
      _.each(end.position.columns, function (column) {
        $('tr').find('td[data-row='+row+'][data-column='+column+']').css('color', 'red');
      });
    });
  }

  $('.move').on('click', function (e) {
    $target = $(e.currentTarget);
    var move = $target.data('move');
    movement(move);
  });

  function removePositionClass() {
    _.each(piece.position.rows, function (row) {
      _.each(piece.position.columns, function (column) {
          $('tr').find('td[data-row='+row+'][data-column='+column+']').removeClass('active');
      });
    }); 
  }

  function addPositionClass () {
    _.each(piece.position.rows, function (row) {
      _.each(piece.position.columns, function (column) {
          $('tr').find('td[data-row='+row+'][data-column='+column+']').addClass('active');
      });
    }); 
  }

  function isMovedToBlockPosition (movement) {
    //console.log(movement, piece.position);
    _.each(blockPosition, function (block) {
      console.log(block);
    });
  }

  var movement = function (move) {
    switch(move) {
      case 'up':
        upDown('u');
        break;
      case 'down':
        upDown('d');
        break;
      case 'left':
        leftRight('l');
        break;
      case 'right':
       leftRight('r');
        break;
    }

    function upDown (ud) {
      var rowSize = _.size(piece.position.rows),
        colSize = _.size(piece.position.columns);
      if (rowSize == 1 && colSize == 2) {
        var actualRow = piece.position.rows[0],
          actualCol = piece.position.columns;

        // console.log(actualRow + 1, actualCol);
        // console.log((actualRow + 1 == 7 && actualCol[0] == 1 && actualCol[1] == 1));

        //&& (actualRow + 1 != blockPosition[0].row && (actualCol[0] != blockPosition[0].col || actualCol[1] != blockPosition[0].col ) ) 
        if (ud == 'u' && actualRow + 1 < 9 ) {
          isMovedToBlockPosition('u');
          removePositionClass();
          piece.position.rows = [actualRow + 1];
          addPositionClass();
        }
        //&& (actualRow + 1 != 7 && (actualCol[0] != 1 || actualCol[1] != 1) ) 
        if (ud == 'd' && actualRow - 1 > 0 ) {
          removePositionClass();
          piece.position.rows = [actualRow - 1];
          addPositionClass();
        }
      }

      if (rowSize == 1 && colSize == 1) {
        var actualRow = piece.position.rows[0],
          actualCol = piece.position.columns[0];
        // && ( (actualRow + 1 != 7 || actualRow + 2 != 7) && actualCol != 1 ) 
        if (ud == 'u' && actualRow + 2 < 9 ) {
          removePositionClass();
          piece.position.rows = [actualRow + 1, actualRow + 2];
          addPositionClass();
        }
        //&& ( (actualRow - 1 != 7 || actualRow - 2 != 7 ) && actualCol != 1 ) 
        if (ud == 'd' && actualRow - 2 > 0 ) {
          removePositionClass();
          piece.position.rows = [actualRow - 1, actualRow - 2];
          addPositionClass();
        }
      }

      if (rowSize == 2 && colSize == 1) {
        var maxRow = _.max(piece.position.rows);
        var minRow = _.min(piece.position.rows);
        if (ud == 'u' && maxRow + 1 < 9 ) {
          removePositionClass();
          piece.position.rows = [maxRow + 1];
          addPositionClass();
        }
        if (ud == 'd' && minRow - 1 > 0) {
          removePositionClass();
          piece.position.rows = [minRow - 1];
          addPositionClass();
        }
      }
    }
    function leftRight (lr) {
      var rowSize = _.size(piece.position.rows),
        colSize = _.size(piece.position.columns);
      if (rowSize == 1 && colSize == 2) {
        var maxCol = _.max(piece.position.columns),
          minCol = _.min(piece.position.columns);
        if (lr == 'l' && maxCol + 1 < 7 ) {
          removePositionClass();
          piece.position.columns = [maxCol + 1];
          addPositionClass();
        }
        if (lr == 'r' && minCol - 1 > 0) {
          removePositionClass();
          piece.position.columns = [minCol - 1];
          addPositionClass();
        }
      }

      if (rowSize == 1 && colSize == 1) {
        var actualCol = piece.position.columns[0];
        if (lr == 'l' && actualCol + 2 < 7) {
          removePositionClass();
          piece.position.columns = [actualCol + 2, actualCol + 1];
          addPositionClass();
        }
        if (lr == 'r' && actualCol - 2 > 0) {
          removePositionClass();
          piece.position.columns = [actualCol - 1, actualCol - 2];
          addPositionClass();
        }
      }

      if (rowSize == 2 && colSize == 1) {
        var actualCol = piece.position.columns[0];
        if (lr == 'l' && actualCol + 1 < 7) {
          removePositionClass();
          piece.position.columns = [actualCol + 1];
          addPositionClass();
        }
        if (lr == 'r' && actualCol - 1 > 0) {
          removePositionClass();
          piece.position.columns = [actualCol - 1];
          addPositionClass();
        }
      }
    }

  }


});