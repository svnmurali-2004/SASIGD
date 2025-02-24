
  // Array of background images
  const images = [
    "SASIGD/img/intro-bg1.jpg",
    "../img/intro-bg2.jpg",
    "../img/intro-bg3.jpg"
  ];
  
  let currentIndex = 0;
  const introSection = document.getElementById("intro");
  console.log("introSection", introSection);
  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    introSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  }

  // Change background every 5 seconds
  setInterval(changeBackground, 5000);
