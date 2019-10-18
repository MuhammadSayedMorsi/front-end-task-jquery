// define variable
// $(function () {
//   $('#sizePicker').submit(function makeGrid(e) {
//     // clear the table when click on the submit button again
//     $('table tr').remove();
//       // rowHeight
//     let rows = $('#inputHeight').val();

//     // colWidth
//     let cols  = $('#inputWidth').val();

//     // loop through table element and creat the cell
//       // 1- if i <= row then create tr,, then if x <= cols then create the td, and the value for each set in html by 1..
//       // 2- add calss to TD to put an click function on it, & change background color to the one i choose.
//     for (let i = 1; i <= rows; i++) {
//       $('table').append('<tr></tr>');
//         for (let x = 1; x <= cols; x++) {
//           $('tr:last').append('<td></td>');
//           $('td').attr('class', 'tdClicked');

//         }
//     }
//     // prevent the page from behaviour default.
//     e.preventDefault();

//       // change the background-color of the TD to the one i choose
//     $('.tdClicked').click(function (event) {
//         let colored = $('#colorPicker').val();
//         $(event.target).css('background-color', colored);
//     });

//   });
// });






// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // select dom elements
  const table = document.querySelector('#pixelCanvas');
  const gridWidth = document.querySelector('#inputWidth').value;
  const gridHeight = document.querySelector('#inputHeight').value;

  // remove the colored tr when the user click the submit button again.. instead of adding another grid.
  table.innerHTML = "";

  // add change listener to the input color && and set attribute value to it
  document.querySelector('#colorPicker').addEventListener('change', function() {
    this.setAttribute('value', document.querySelector('#colorPicer').value)
  });

  // we will check it the i < gridhight then, create a tr
  for (let i = 0; i < gridHeight; i++) {
    const cell = document.createElement('tr');

    // check if the x < gridwidth then create a td
    for (let x = 0; x < gridWidth; x++) {
      const td = document.createElement('td');

      // add td to tr element
      cell.append(td);
    }
    // add tr to the table
    table.append(cell);
  }
    // add an click event to the table && when the user click on any of the cell,, change the background-color to the choosen color.
    table.addEventListener('click', function(e) {
      e.target.style.background = document.querySelector('#colorPicker').value;
    });
}

// add an click event to the submit button and call the makeGrid func
document.querySelector('form #submit').addEventListener('click', function(e) {

  // prevent default behaviour
  e.preventDefault();

  // run the makeGridFunction
  makeGrid();
});
