    // Modal Image Gallery
    function onClick(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
      }
      
      // Change style of navbar on scroll
      window.onscroll = function() {myFunction()};
      function myFunction() {
          var navbar = document.getElementById("myNavbar");
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
              navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
          } else {
              navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
          }
      }
      
      // Used to toggle the menu on small screens when clicking on the menu button
      function toggleFunction() {
          var x = document.getElementById("navDemo");
          if (x.className.indexOf("w3-show") == -1) {
              x.className += " w3-show";
          } else {
              x.className = x.className.replace(" w3-show", "");
          }
      }
    //串接Instagram Platform API
      var getAuthUrl = "https://api.instagram.com/oauth/authorize/?client_id=d1aff441dd5a4f36ad032dc1b6e1d280&redirect_uri=http://127.0.0.1:5500/index.html&response_type=token"

      function authFunc(){
        var win = window.open(getAuthUrl, "auth_window");
      }
      
      var accessToken = window.location.hash.replace('#','?')
      console.log(accessToken);
      
      var xhr = new XMLHttpRequest();
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          var response = JSON.parse(this.responseText)
          console.log(response);
          response.data.map(function(item){
            var img = document.createElement('img');
            img.src =  item.images.low_resolution.url; 
            document.querySelector(".container").appendChild(img);
            })
        }
      });
      
      xhr.open("GET", "https://api.instagram.com/v1/users/self/media/recent/"+accessToken);
      
      xhr.send();
      
      