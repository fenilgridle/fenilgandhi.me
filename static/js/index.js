'use strict';

class SceneManager {  
  constructor() {
    let width = window.innerWidth;
    let height = window.innerHeight;
  }

  loadScene = () => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    if (this.width < 500) {
      return;
    }

    // Render earth
    const earthDiameter = Math.floor(this.height * 0.3);
    anime({
      targets: '.earth',
      'width': earthDiameter,
      'height': earthDiameter,
      'opacity': 1
    });
    
    // Render mars
    const marsDiameter = Math.floor(this.height * 0.2);
    anime({
      targets: '.mars',
      'width': marsDiameter,
      'height': marsDiameter,
      'opacity': 1
    });
  }
}

window.sceneManager = new SceneManager();
window.onload = window.sceneManager.loadScene();
