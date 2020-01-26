var time = 0;

//wait 3 secs and print to console
/*
setTimeout(function(){
  console.log("Hey Joe");
},3000);
*/

//Pause 2 secs and output to console
//Use ctrl-c to break as it is a loop
/*
setInterval(function(){
  time += 2;
  console.log(time + " secs have passed");
},2000);
*/

//setInterval loop but break after 6 secs
var timer = setInterval(function(){
  time += 2;
  if (time > 5){
    clearInterval(timer);
  }
  console.log(time + " secs have passed");
},2000);
