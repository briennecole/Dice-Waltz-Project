// added from stackoverflow
// https://stackoverflow.com/questions/52540974/show-dice-element-corresponding-to-random-number-generated-on-click
function roll() {
  var die = Math.floor(Math.random() * 6) + 1;
  $('#die').removeAttr('class').addClass('die' + die);
}
$('#roll').click(() => {
  let num = Math.floor(Math.random() * 6) + 1;
  let cls = 'odd-'
  if (num % 2 === 0) {
    cls = 'even-'
  }
  $('#die').empty();
  for (let i = 1; i <= num; i++) {
    $('#die').append('<div class="dot ' + cls + i + '"></div>');
  }
});
