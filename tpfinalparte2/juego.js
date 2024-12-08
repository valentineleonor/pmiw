class Juego {
  constructor() {
    this.iniciarJuego();
    this.estado = "tutorial";
    this.fondo = loadImage('data/fondo.png'); 
  }

  iniciarJuego() {
    this.personaje = new Personaje(width / 2 - 25, 430);

    this.oveja = [];
    for (let i = 0; i < 3; i++) {
      this.oveja.push(new Oveja(random(-200, -150, -100, -50), 80 + i * 140));
    }

    this.jeringa = [];
    for (let i = 0; i < 2; i++) {
      this.jeringa.push(new Jeringa(random(-200, -150, -100, -50), 150 + i * 140));
    }
  }

  reinicio() {
    textAlign(CENTER, CENTER);
    textSize(15);
    this.estado = "tutorial";

    this.personaje.vida = 3;
    this.personaje.posY = 430;
    this.personaje.posX = width / 2 - 25;

    for (let i = 0; i < 3; i++) {
      this.oveja[i].posX = random(-50, -300);
      this.oveja[i].posY = 80 + i * 140;
    }

    for (let i = 0; i < 3; i++) {
      this.jeringa[i].posX = random(500, 750);
      this.jeringa[i].posY = 150 + i * 140;
    }
  }

  actualiza() {
    for (let i = 0; i < 3; i++) {
      this.oveja[i].actualiza();
      this.oveja[i].colision(this.personaje);
    }

    for (let i = 0; i < 2; i++) {
      this.jeringa[i].actualiza();
      this.jeringa[i].colision(this.personaje);
    }

    if (this.estado === "tutorial") {
      this.personaje.vida = 3;
      this.personaje.posY = 430;
      this.personaje.posX = width / 2 - 25;
      return;
    } else if (this.estado === "jugando") {
      if (this.personaje.posY <= 70) {
        this.estado = "ganaste";
      } else if (this.personaje.vidas() == 0) {
        this.estado = "perdiste";
      }
    }
  }

  dibujar() {
    if (this.estado === "tutorial") {
      background(135, 206, 235);
      textSize(45);
      textAlign(CENTER, CENTER);
      fill(220, 0, 5);
      textFont("Arial");
      text("¡Ayuda a Judy a escapar!", width / 2, height / 2-30);
      textFont("Arial-Bold");
      textSize(40);
      text ("Utiliza las flechas del teclado", width / 2, height / 2 + 20)
    } else if (this.estado === "jugando") {
      
      image(this.fondo, 0, 0, width, height);

      this.personaje.dibujar();

      for (let i = 0; i < 3; i++) {
        this.oveja[i].dibujar();
      }
      for (let i = 0; i < 2; i++) {
        this.jeringa[i].dibujar();
      }

      textSize(25);
      fill(255);
      text("Vidas:", 45, 20);
      text(this.personaje.vidas(), 95, 20);
    } else if (this.estado === "ganaste") {
      background(150);
      textSize(50);
      textAlign(CENTER, CENTER);
      fill(34, 139, 34);
      text("¡GANASTE!", width / 2, height / 2);
    } else if (this.estado === "perdiste") {
      background(200);
      textSize(50);
      textAlign(CENTER, CENTER);
      fill(255, 0, 0);
      text("PERDISTE :(", width / 2, height / 2);
    }
  }

  teclaPresionada() {
    if (this.estado === "jugando") {
      this.personaje.mover(keyCode, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW);
    }
  }
}
