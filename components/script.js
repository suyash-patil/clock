const secHand = document.querySelector('.second-hand')
      const minHand = document.querySelector('.min-hand');
      const hourHand = document.querySelector('.hour-hand');
      const digital = document.querySelector('.digital');      
      const date = document.querySelector('.date');
      const day = document.querySelector('.day');

      function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secDegrees = ((seconds/60) * 360) + 90;
        secHand.style.transform = `rotate(${secDegrees}deg)`;

        const minutes = now.getMinutes();
        const minDegrees = ((minutes/60)*360) + (seconds* 360/60)/60 +  90;
        minHand.style.transform = `rotate(${minDegrees}deg)`;

        const hours = now.getHours();
        const hourDegrees = ((hours/12)*360) + ((minutes/60)*360)/12 + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;

        digital.textContent = String(now.getHours()).padStart(2,"0") + ":"  + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0") + " hours";
        date.textContent = String(now.getDate()).padStart(2,"0") + "-" + String(now.getMonth() + 1).padStart(2,"0") + "-" +  String(now.getFullYear());
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var n = weekday[d.getDay()];
        day.textContent = n;
      }

      setInterval(setDate, 1000)