<!-- From here the JavaScript part begins -->
         
    <script>
            const secondsSpan = document.querySelector(".seconds");
            const millisecondsSpan = document.querySelector(".milliseconds");
            const startBtn = document.querySelector(".startBtn");
            const lapBtn = document.querySelector(".lapBtn");
            const stopBtn = document.querySelector(".stopBtn");
            const laps = document.querySelector(".laps");

   
          let seconds = 0,
          milliseconds = 0;
          var stopwatch;

            startBtn.addEventListener("click", () => {
            startBtn.style.display = "none";
            lapBtn.style.display = "inline-block";
            stopBtn.style.display = "inline-block";

              stopwatch = setInterval(() => {
              milliseconds++;
              
              if (milliseconds == 100) {
              seconds++;
              milliseconds = 0;
              }
        
              if (seconds<= 9) secondsSpan.innerText = "0" + seconds + " : ";
              else secondsSpan.innerText = seconds + " : ";
              if (milliseconds>=10 && milliseconds <= 100) millisecondsSpan.innerText = milliseconds;
              else millisecondsSpan.innerText =  "0" + milliseconds;
              }, 1000);
            });

            lapBtn.addEventListener("click", () => {
            const lap = document.createElement("div");
            lap.innerText = seconds + " : " + milliseconds;
            laps.appendChild(lap);
          });

      stopBtn.addEventListener("click", () => {
      lapBtn.style.display = "none";
      stopBtn.style.display = "none";
      startBtn.style.display = "inline-block";

      clearInterval(stopwatch);

      
      secondsSpan.innerText = "00 : ";
      millisecondsSpan.innerText = "00";

     
      seconds = 0;
      milliseconds = 0;

      laps.innerHTML = "<p>LAP Record </p>";
    });
    </script>
