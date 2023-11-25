function startProgress() {
    let progressBar = document.getElementById("progressBar"); 
    let progressValue = 0; 
  
    let intervalId = setInterval(function() {
      progressValue += 10; 
      progressBar.value = progressValue; 
  
      if (progressValue >= 100) { 
        clearInterval(intervalId);
      }
    }, 1000); 
  }
  