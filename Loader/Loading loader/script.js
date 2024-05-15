document.addEventListener("DOMContentLoaded", function() {
    var loadingBar = document.querySelector(".loading-bar .bar");
  
    var progress = 0;
    var interval = setInterval(function() {
      progress += 1;
      loadingBar.style.width = progress + "%";
  
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(function() {
          document.querySelector(".loading-bar").style.display = "none";
          document.querySelector(".content").style.display = "block";
        }, 500);
      }
    }, 30);
  });
  