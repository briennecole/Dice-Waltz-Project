// added from stackoverflow
// https://stackoverflow.com/questions/52540974/show-dice-element-corresponding-to-random-number-generated-on-click
$('#roll').click(() => {
  let num = Math.floor(Math.random() * 6) + 1;
  let num2= Math.floor(Math.random() * 6) + 1;
  let cls = 'odd-'
  let cls1= 'odd-'
  if (num % 2 === 0) {
    cls= 'even-'
  }
  if (num2 % 2 === 0) {
      cls1= 'even-'
  }
  // console.log(num);
  // console.log(num2);
  // console.log(cls);
  // console.log(cls1);

  $('#die').empty();
  $('#die2').empty();
  for (let i = 1; i <= num; i++) {
    $('#die').append('<div class="dot ' + cls + i + '"></div>');
  }
  for (let i = 1; i <= num2; i++) {
    $('#die2').append('<div class="dot ' + cls1 + i + '"></div>');
  }
});
