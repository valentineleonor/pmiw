class Enemigo {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.r = [-50, -100, -150];

    this.imagen1 = loadImage('data/n1.png');
    //this.imagen2 = loadImage('data/n0.png');
    //this.n = random (this.imagen1, this.imagen2);
  }

  actualiza() {
    if (this.posX >= 500 ) {
      this.posX = random(this.r);
    }
    this.posX += 5;
  }

  dibuja() {
    image(this.imagen1, this.posX, this.posY, 50, 68);
  }

  colision(jugador) {
    if (jugador.posX + 50 > this.posX && jugador.posX < this.posX + 50 && jugador.posY + 68 > this.posY && jugador.posY < this.posY + 68) {
      jugador.posX = width / 2 - 25;
      jugador.posY = 430;
      jugador.restarVida();
    }
  }
}
