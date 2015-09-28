$(document).ready(function () {

  var board;
  var pice = {
    form: 2,
    position: {
        row: 1,
        columns: [1,2]
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
        upDown();
        break;
      case 'down':
        positionRow -= 1;
        upDown();
        break;
      case 'left':
        //console.log(positionColumns);
        leftRight();
        break;
      case 'right':
       // console.log(positionColumns);
       leftRight();
        break;
      default:
        positionRow;
        positionColumns;
    }

    function upDown () {
      if (positionRow > 0 && positionRow < 9 && pice.form == 'A') {
        $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[0]+']').css('text-decoration', 'none');
        $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[1]+']').css('text-decoration', 'none'); 
        pice.position.row = positionRow;
        $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[0]+']').css('text-decoration', 'underline');
        $('tr').find('td[data-row='+pice.position.row+'][data-column='+pice.position.columns[1]+']').css('text-decoration', 'underline'); 
      }
    }
    function leftRight () {
      console.log(pice.form, 'before');
      if (pice.form == 2) {

        pice.form = 1;
      } else {
        pice.form = 2;
      }
      console.log(pice.form, 'after');
    }
    // console.log(positionRow, pice.position.row);
    // if (positionColumns.length == 2) {
    //   console.log(pice.position.columns);
    //   pice.position.columns = [1];
    //   console.log(pice.position.columns);

    // } 
    // if (positionRow)
    // console.log(positionRow, pice.position.row);
    // switch(move) {
    //   case 'up' {

    //   }
    // }
  }


});