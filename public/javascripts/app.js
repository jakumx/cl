$(document).ready(function () {

  var board;
  var pice = {
    form: 'A',
    position: {
        row: 1,
        columns: [6,7]
    }
    
  } 

  if($('.board').size() > 0 ) {
    board = $('.board').data('table');
    $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[0]+']').css('text-decoration', 'underline');
    $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[1]+']').css('text-decoration', 'underline'); 
  }

  $('.move').on('click', function (e) {
    // body...
    $target = $(e.currentTarget);
    var move = $target.data('move');
    console.log(move);
    movement(move);

  });

  var movement = function (move) {
    var positionRow = pice.position.row,
      positionColumns = pice.position.columns;
    switch(move) {
      case 'up':
        positionRow += 1;
        break;
      case 'down':
        positionRow -= 1;
        break;
      case 'left':
        //console.log(positionColumns);
        break;
      case 'right':
        //console.log(positionColumns);
        break;
      default:
        positionRow;
        positionColumns;
    }
    // console.log(positionRow, pice.position.row);
    if (positionRow > 0 && positionRow < 9 && pice.form == 'A') {
      $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[0]+']').css('text-decoration', 'none');
      $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[1]+']').css('text-decoration', 'none'); 
      pice.position.row = positionRow;
      $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[0]+']').css('text-decoration', 'underline');
      $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[1]+']').css('text-decoration', 'underline'); 
    }
    if (positionColumns.length == 2) {
      console.log(pice.position.columns);
      pice.position.columns = [1];
      console.log(pice.position.columns);

    } 
    // if (positionRow)
    // console.log(positionRow, pice.position.row);
    // switch(move) {
    //   case 'up' {

    //   }
    // }
  }


});