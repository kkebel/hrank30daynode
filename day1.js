process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
})

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
})

function readLine(){
  return input_stdin_array[input_currentline++];
}

function main() {
  var i = 4;
  var d = 4.0;
  var s = "Hacker Rank ";

var j = parseInt(readLine());
var e = parseFloat(readLine());
var t = readLine();

var a = Math.floor(d+e);

console.log(`Sum of two ints = ${i+j}`);
console.log(`Sum of two dbls =  ${parseFloat(d+e).toPrecision(2)}`);
console.log(s + t);

}
