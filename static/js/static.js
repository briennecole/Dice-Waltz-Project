// added from stackoverflow
// https://stackoverflow.com/questions/52540974/show-dice-element-corresponding-to-random-number-generated-on-click
$('#roll').click(() => {
  let num = Math.floor(Math.random() * 6) + 1;
  let num2= Math.floor(Math.random() * 6) + 1;
  let cls = 'odd-'
  if (num % 2 === 0) {
    cls = 'even-'
  }
  if (num2 % 2 === 0) {
      cls= 'even-'
  }
  $('#die').empty();
  for (let i = 1; i <= num; i++) {
    $('#die').append('<div class="dot ' + cls + i + '"></div>');
  }
  $('#die2').empty();
  for (let i = 1; i <= num2; i++) {
    $('#die2').append('<div class="dot ' + cls + i + '"></div>');
  }
});
