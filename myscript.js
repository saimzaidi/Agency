// Get a reference to the icon element
var icon = document.getElementById("icon");

// Get a reference to the mob-menu element
var mobMenu = document.querySelector(".mob-menu");

// Add a click event listener to the icon
icon.addEventListener("click", function() {
  // Check if the mob-menu is currently hidden
  var isHidden = mobMenu.style.display === "none" || mobMenu.style.display === "";

  if (isHidden) {
    // Display the mob-menu and start the fade-in animation
    mobMenu.style.display = "block";
    setTimeout(function() {
      mobMenu.style.opacity = "1";
    }, 10); // Delay to ensure the display change takes effect before fading in
  } else {
    // Start the fade-out animation and hide the mob-menu when done
    mobMenu.style.opacity = "0";
    setTimeout(function() {
      mobMenu.style.display = "none";
    }, 300); // 300ms matches the transition duration
  }
});

const learnMoreButton = document.querySelector('.meta .btn button');
const metaDiv = document.querySelector('.meta');

// Add a click event listener to the button
learnMoreButton.addEventListener('click', function () {
  // Change the display property to 'block'
  metaDiv.style.display = 'block';
});

console.log(learnMoreButton)