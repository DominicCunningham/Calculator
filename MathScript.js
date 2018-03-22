function GetNumber() {
  // RNG
  var randomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  // declares number variables
  var number = [1,2,3,4,5,6,7,8,9,0];
  var OutputNumber = console.log(number[randomNumber]);
  document.getElementById('Output').innerHTML = number[randomNumber];
}
