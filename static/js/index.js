
function loadScene() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  // Setup base-planet Location
  anime({
    targets: '.base-planet',
    height:height * 0.5,
    width: width * 0.6,
    left:width * 0.2,
    bottom:-1 * height * 0.35,
    duration: 0
  });

  // Setup header-text location
  anime({
    targets: '.header-text',
    "min-height": height * 0.1,
    width: width * 0.8,
    "margin-top": height * 0.25,
    duration: 0
  });

  // Setup projects location
  anime({
    targets: '.projects',
    height: Math.max(height * 0.2, 200),
    width: Math.max(height * 0.2, 200),
    top: height * 0.15,
    left:width * 0.1,
    duration: 0
  });

  // Animate rotation in base-planet 
  anime({
    targets: '.base-planet',
    easing: 'easeInOutQuad',
    loop: true,
    scale: [
      { value: 1.02, duration: 1000},
      { value: 0.98, duration: 1000 }
    ]
  });
}

window.onload = loadScene;