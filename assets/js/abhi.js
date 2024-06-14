/*!
=========================================================
* Abhishek PortFolio
=========================================================

* Copyright: 2024 Abhishek 
* Licensed: 
* Coded by Abhishek

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 25.34440, lng: 86.95221},
        zoom: 15,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}

const intro = document.getElementById('intro');
const title = document.getElementById('developer-title');
const words = ['WordPress','Laravel','Backend', 'Fullstack'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function showNextWord() {
    const word = words[wordIndex];
    if (!isDeleting && charIndex < word.length) {
        title.textContent = word.substring(0, charIndex + 1); // Display characters one by one
        charIndex++;
        setTimeout(showNextWord, 100); // Adjust character delay
    } else if (isDeleting && charIndex >= 0) {
        title.textContent = word.substring(0, charIndex); // Delete characters one by one
        charIndex--;
        setTimeout(showNextWord, 50); // Adjust character delay when deleting
    } else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(showNextWord, 500); // Delay before deleting
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
            charIndex = 0;
            setTimeout(showNextWord, 1000); // Delay before showing next word
        }
    }
}

// Start the animation
showNextWord();

// for google drive resume

document.getElementById("download-my-cv").addEventListener("click", function() {
  var pdfURL = "https://drive.google.com/file/d/17FZDb8JiXXzVP6aaxBT6RpBRbyNEfYDy/view?usp=sharing"; // Replace this with your Google Drive PDF URL
  var anchor = document.createElement("a");
  anchor.href = pdfURL;
  anchor.download = "resume.pdf"; // Optional: You can specify the filename here
  anchor.click();
});

//for download
document.getElementById("print-resume-btn").addEventListener("click", function() {
  var pdfURL = "https://drive.google.com/file/d/17FZDb8JiXXzVP6aaxBT6RpBRbyNEfYDy/view?usp=sharing"; // Replace this with your Google Drive PDF URL

  fetch(pdfURL)
  .then(response => response.blob())
  .then(blob => {
      var anchor = document.createElement('a');
      anchor.href = window.URL.createObjectURL(blob);
      anchor.download = "resume.pdf"; // Optional: You can specify the filename here
      anchor.click();
  })
  .catch(error => console.error('Error fetching PDF:', error));
});


//counter

function increaseCounters() {
  // Increment the counters
  let totalHours = parseInt(document.getElementById('totalHours').innerText);
  let totalProjects = parseInt(document.getElementById('totalProjects').innerText);
  let totalClient = parseInt(document.getElementById('totalClient').innerText);
  let coffeeDrinked = parseInt(document.getElementById('coffeeDrinked').innerText);
  
  // Increase values until reaching the specified numbers
  if (totalHours < 80) {
    totalHours += 1;
  }
  if (totalProjects < 10) {
    totalProjects += Math.floor(Math.random() * 5); // Increment happy customers randomly
  }
  if (totalClient < 10) {
    totalClient += Math.floor(Math.random() * 2); // Increment certificates randomly
  }
  if (coffeeDrinked < 30) {
    coffeeDrinked += Math.floor(Math.random() * 2); // Increment certificates randomly
  }

  // Update the counter values
  document.getElementById('totalHours').innerText = totalHours;
  document.getElementById('totalProjects').innerText = totalProjects;
  document.getElementById('totalClient').innerText = totalClient;
  document.getElementById('coffeeDrinked').innerText = coffeeDrinked;
  
  // Stop the counter when reaching the specified numbers
  if (totalHours >= 80 && totalProjects >= 10 && totalClient >= 10 && coffeeDrinked >= 30) {
    clearInterval(counterInterval);
  }
}

// Call the function to start increasing counters
let counterInterval = setInterval(increaseCounters, 50); // Change the interval as needed (milliseconds)

// custom cursor
if ($(".custom-cursor").length) {
  var cursor = document.querySelector(".custom-cursor__cursor");
  var cursorinner = document.querySelector(".custom-cursor__cursor-two");
  var a = document.querySelectorAll("a");

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
  });

  document.addEventListener("mousedown", function () {
    cursor.classList.add("click");
    cursorinner.classList.add("custom-cursor__innerhover");
  });

  document.addEventListener("mouseup", function () {
    cursor.classList.remove("click");
    cursorinner.classList.remove("custom-cursor__innerhover");
  });

  a.forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("custom-cursor__hover");
    });
    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("custom-cursor__hover");
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", function (e) {
    // Update cursor position
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
});


  // window scroll event
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top
        },
        1000
      );

      return false;
    });
  };

  $(window).on("scroll", function () {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }
  });
