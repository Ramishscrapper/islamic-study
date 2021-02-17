AOS.init({
        offset: 350,
        delay: 0, 
        duration: 1000 
      });

      var acc = document.getElementsByClassName("surah");
      var i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }