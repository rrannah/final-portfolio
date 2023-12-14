document.addEventListener('scroll', function () {
    // Set the distance from the top where the fadeout should start (in pixels)
    var fadeStartDistance = -200;
  
    // Get all elements with the specified class
    var fadeElements = document.querySelectorAll('.fadeOnScroll');
    // Loop through each element and calculate its distance from the top of the viewport
    fadeElements.forEach(function (element) {
      var elementTop = element.getBoundingClientRect().top;
      console.log(elementTop);
      // Add/remove the fadeOut class based on the element's position
      if (elementTop < fadeStartDistance) {
        element.classList.add('fadeOut');
      } else {
        element.classList.remove('fadeOut');
      }
    
    });


  });
  
  document.addEventListener('scroll', function () {
    var fadeStartDistance =700;

    // Get the height of the viewport
    var viewportHeight = window.innerHeight;
  
    // Calculate the distance from the bottom of the viewport
    var fadeStartFromBottom = viewportHeight - fadeStartDistance;
    // Get all elements with the specified class
    var fadeElements = document.querySelectorAll('.fadeInScroll');
  
    // Loop through each element and calculate its distance from the top of the viewport
    fadeElements.forEach(function (element) {
      var elementTop = element.getBoundingClientRect().top;
  
      // Add/remove the fadeOut class based on the element's position
      if (elementTop < fadeStartDistance) {
        element.classList.add('fadeIn');
      } else {
        element.classList.remove('fadeIn');
      }
    });
  });
  
  