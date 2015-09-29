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

  if($('.board').size() > 0 ) {
    $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
    $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'underline'); 
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
      default:
        positionRows;
        positionColumns;
    }

    function upDown (ud) {
      var rowSize = _.size(piece.position.rows),
        colSize = _.size(piece.position.columns);
      if (rowSize == 1 && colSize == 2) {
        var actualRow = piece.position.rows[0];
        if (ud == 'u' && actualRow + 1 < 9) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'none');
          piece.position.rows = [actualRow + 1];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'underline');
        }
        if (ud == 'd' && actualRow - 1 > 0 ) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'none');
          piece.position.rows = [actualRow - 1];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'underline');
        }
      }

      if (rowSize == 1 && colSize == 1) {
        var actualRow = piece.position.rows[0];
        if (ud == 'u' && actualRow + 2 < 9) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          piece.position.rows = [actualRow + 1, actualRow + 2];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
          $('tr').find('td[data-row='+piece.position.rows[1]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
        }
        if (ud == 'd' && actualRow - 2 > 0) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          piece.position.rows = [actualRow - 1, actualRow - 2];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
          $('tr').find('td[data-row='+piece.position.rows[1]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
        }
      }

      if (rowSize == 2 && colSize == 1) {
        var maxRow = _.max(piece.position.rows);
        var minRow = _.min(piece.position.rows);
        if (ud == 'u' && maxRow + 1 < 9) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          $('tr').find('td[data-row='+piece.position.rows[1]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          piece.position.rows = [maxRow + 1];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
        }
        if (ud == 'd' && minRow - 1 > 0) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          $('tr').find('td[data-row='+piece.position.rows[1]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          piece.position.rows = [minRow - 1];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
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
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'none'); 
          piece.position.columns = [maxCol + 1];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
        }
        if (lr == 'r' && minCol - 1 > 0) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'none'); 
          piece.position.columns = [minCol - 1];

          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
        }
      }

      if (rowSize == 1 && colSize == 1) {
        var actualCol = piece.position.columns[0];
        if (lr == 'l' && actualCol + 2 < 7) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          piece.position.columns = [actualCol + 2, actualCol + 1];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'underline'); 
        }
        if (lr == 'r' && actualCol - 2 > 0) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          piece.position.columns = [actualCol - 1, actualCol - 2];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[1]+']').css('text-decoration', 'underline'); 
        }
      }

      if (rowSize == 2 && colSize == 1) {
        var actualCol = piece.position.columns[0];
        if (lr == 'l' && actualCol + 1 < 7) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          $('tr').find('td[data-row='+piece.position.rows[1]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          piece.position.columns = [actualCol + 1];

          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
          $('tr').find('td[data-row='+piece.position.rows[1]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline'); 
        }
        if (lr == 'r' && actualCol - 1 > 0) {
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          $('tr').find('td[data-row='+piece.position.rows[1]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'none');
          piece.position.columns = [actualCol - 1];
          $('tr').find('td[data-row='+piece.position.rows[0]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline');
          $('tr').find('td[data-row='+piece.position.rows[1]+'][data-column='+piece.position.columns[0]+']').css('text-decoration', 'underline'); 
        }
      }
    }

  }


});