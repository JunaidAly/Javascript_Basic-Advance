let startTime = new Date().getTime(); // get the current time in milliseconds

setTimeout(function() {
  let endTime = new Date().getTime(); // get the current time again
  let timePassed = endTime - startTime; // calculate the time that has passed
  var result = document.getElementById("test");
  result.value = "Time passed: " + timePassed + " milliseconds";
}, 3000); 
