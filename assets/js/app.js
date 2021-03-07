AOS.init({
        offset: 350,
        delay: 0, 
        duration: 1000 
} );
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

      function openTab(cityName,element,color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(cityName).style.display = "block";
        element.style.backgroundColor = color;
      
      }
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();