// On sélectionne le gif avec des constantes
const duck = document.getElementById("duck");
const duckWidth = duck.offsetWidth;
const duckHeight = duck.offsetHeight;

// On fait en sorte que le canard se déplace aléatoirement et rapidement sur la page
setInterval(() => {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);

  // Fait en sorte que le canard ne sorte pas de la fenêtre
  if (x + duckWidth > window.innerWidth) {
    x = window.innerWidth - duckWidth;
  }
  if (y + duckHeight > window.innerHeight) {
    y = window.innerHeight - duckHeight;
  }
  duck.style.setProperty("--target-x", `${x}px`);
  duck.style.setProperty("--target-y", `${y}px`);
  duck.style.setProperty("--current-x", `${x}px`);
  duck.style.setProperty("--current-y", `${y}px`);
}, 150);

//Fait en sorte qu'un son "coin coin" soit joué 3 fois si on clique sur le gif"
const sound = document.getElementById("canard");
duck.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      sound.currentTime = 0;
      sound.play();
    }, i * 1000);
  }

  //Fait en sorte qu'un effet "flashing" soit éxecuté une fois le gif du canard cliqué
  duck.classList.toggle("flashing");
  setTimeout(() => {
    duck.src = "duck.gif";
  }, 3000);

  //Fait en sorte que l'effet "flashing" s'arrête après 3 secondes quand le canard à finis de faire coin coin
  setTimeout(() => {
    duck.classList.remove("flashing");
  }, 3000);
});
