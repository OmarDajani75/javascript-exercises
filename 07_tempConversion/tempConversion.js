const convertToCelsius = function(faren) {
  cel = (faren - 32) * 5/9;
  cel_round = Math.round(cel * 10) / 10;
  return cel_round;
};

const convertToFahrenheit = function(cel) {
  faren = (cel * 9/5) + 32;
  faren_round = Math.round(faren * 10) / 10;
  return faren_round;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Math.round(num * 10) / 10