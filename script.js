function animateDiv(div) {
    let x = 0;
    let y = 0;
    const dx = Math.random() * 2 - 1; // Velocidad en X
    const dy = Math.random() * 2 - 1; // Velocidad en Y
  
    function updatePosition() {
      x += dx;
      y += dy;
  
      // Limitar el movimiento dentro de la ventana
      if (x < 0 || x > window.innerWidth - div.offsetWidth) {
        dx *= -1;
      }
      if (y < 0 || y > window.innerHeight - div.offsetHeight) {
        dy *= -1;
      }
  
      div.style.left = `${x}px`;
      div.style.top = `${y}px`;
  
      requestAnimationFrame(updatePosition);
    }
  
    updatePosition();
  }
  
  for (let i = 0; i < 50; i++) {
    const div = document.createElement('div');
    const size = getRandomSize();
    const { x, y } = getRandomPosition(size);
  
    div.classList.add('random-div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();
    div.style.position = 'absolute';
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
  
    document.body.appendChild(div);
    animateDiv(div);
  }
  