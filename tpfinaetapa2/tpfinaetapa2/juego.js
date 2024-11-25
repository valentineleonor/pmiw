class Juego {

  constructor() {

    this.personaje = new Personaje(width / 2 - 25, 430);
    this.enemigo = [];
    for ( let i = 0; i < 5; i++ ) {
      this.enemigo.push(new Enemigo(random(-200, -150, -100 -50), 80 + i*70));
    }

    this.estado = "tutorial";
    this.fondo = loadImage('data/fondo.png');
  }


  actualiza() {

    if (this.estado === "tutorial") {
      this.personaje.vida = 3;
      this.personaje.posY = 430;
      this.personaje.posX = width / 2 - 25;

      return;
    }


    if (this.personaje.posY <= 70) {
      this.estado = "ganaste";
    } else if (this.personaje.vidas() == 0) {
      this.estado =  "perdiste";
    }

    for (let i = 0; i < 5; i++) {
      this.enemigo[i].actualiza();
      this.enemigo[i].colision(this.personaje);
    }
  }


  dibujar() {
    if ( this.estado === "tutorial" ) {
      background(200);

      textSize(30);
      fill(0, 0, 255);
      text("TUTORIAL", width / 2, height / 2);
      ///////
    } else if ( this.estado === "jugando" ) {
      image(this.fondo, 0, 0, 500, 500);

      this.personaje.dibujar();
      for (let i = 0; i < 5; i++) {
        this.enemigo[i].dibuja();
      }

      textSize(25);
      fill(255);
      text("Vidas:", 10, 20);
      text(this.personaje.vidas(), 80, 20);

      ///////
    } else if ( this.estado === "ganaste" ) {
      background(200);

      textSize(40);
      textAlign(CENTER, CENTER);
      fill(0, 255, 0);
      text("GANASTE", width / 2, height / 2);
      ///////
    } else if ( this.estado === "perdiste" ) {
      background(200);

      textSize(40);
      textAlign(CENTER, CENTER);
      fill(255, 0, 0);
      text("PERDISTE", width / 2, height / 2);
    }
  }

  teclaPresionada() {
    if (this.estado === "jugando") {
      this.personaje.mover(keyCode, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW);
    }
  }
}
