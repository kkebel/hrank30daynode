var counter = function(arr){
  return "length of array is " + arr.length;
}

module.exports.adder = function(a,b){
  return `Sum of variables is ${a+b}`;
}

var pi = 3.142

module.exports.counter = counter;
// module.exports.adder = adder;
module.exports.pi = pi;

//Another way to do this is as follows:
// module.exports = {
//  counter:counter,
//  adder:adder,
//  pi:pi,
//};
