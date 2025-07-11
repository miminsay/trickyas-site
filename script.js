function mostrarSurpresa() {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('surpresa').style.display = 'block';

  // Faz os corações subirem
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.animation = 'float 5s linear';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}