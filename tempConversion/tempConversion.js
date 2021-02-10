const ftoc = function(farenheit) {
  const conv = (farenheit - 32) * (5/9);

  return Math.round(conv * 10) / 10;
}

const ctof = function(celsius) {
  const conv = (celsius * (9/5)) + 32;

  return Math.round(conv * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
