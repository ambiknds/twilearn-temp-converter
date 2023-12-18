function tempConversion() {
  var temperature = document.getElementById('temperature').value;
  var unit = document.getElementById('unit').value;

  if (unit == 'fahrenheit') {
    var result = (temperature - 32) * 5 / 9;
    result = result.toFixed(2);
    result = result + '°C';
  }
  else{
    var result = (temperature * (9/5)) + 32;
    result = result.toFixed(2);
    result = result + '°F';
  }
  document.getElementById('result').innerHTML = result;

}