class Aventura {

  constructor () {
    this.estado = 1;
    this.objJuego = new juego();
    this.ve = [];
    for (this.i = 1; this.i < 18; this.i++) {
      this.ve[this.i] = loadImage('data/p' + this.i + '.png');
    }
    this.objJeringa = new Jeringa();
    //this.objCamara = new Camara();
    this.objOveja = new Oveja();
  }


  dibujar() {


    dibujar() {


      if (this.estado == 0) { //INICIO
        image(this.ve[0], 0, 0, 500, 500);
      } else
        if (this.estado == 1) {
          image(this.ve[1], 0, 0, 500, 500);//IMAGEN
          image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
        } else
          if (this.estado == 2) { // PANTALLA A Y B
            image(this.ve[2], 0, 0, 500, 500);
            image(this.ve[19], 30, 400, 90, 90);//BOTON B
            image(this.ve[18], 380, 400, 90, 90);//BOTON A
          } else
            if (this.estado == 3) {
              image(this.ve[3], 0, 0, 500, 500);//IMAGEN
              image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
            } else
              if (this.estado == 4) { // PANTALLA A Y B
                image(this.ve[4], 0, 0, 500, 500);
                image(this.ve[19], 30, 400, 90, 90);//BOTON B
                image(this.ve[18], 380, 400, 90, 90);//BOTON A
              } else
                if (this.estado == 5) {
                  image(this.ve[5], 0, 0, 500, 500);//IMAGEN
                  image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
                } else
                  if (this.estado == 16) {
                    image(this.ve[16], 0, 0, 500, 500);//IMAGEN
                    image(this.ve[21], 210, 400, 90, 90); //BOTON CREDITOS
                  } else
                    if (this.estado == 6) {
                      image(this.ve[6], 0, 0, 500, 500);//IMAGEN
                      image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
                    } else
                      if (this.estado == 7) { // PANTALLA A Y B
                        image(this.ve[7], 0, 0, 500, 500);
                        image(this.ve[18], 30, 400, 90, 90);//BOTON B
                        image(this.ve[19], 380, 400, 90, 90);//BOTON A
                      } else
                        if (this.estado == 8) {
                          image(this.ve[8], 0, 0, 500, 500);//IMAGEN
                          image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
                        } else
                          if (this.estado == 17) {
                            image(this.ve[17], 0, 0, 500, 500);//IMAGEN
                            image(this.ve[21], 210, 400, 90, 90); //BOTON CREDITOS
                          } else
                            if (this.estado == 9) { // PANTALLA A Y B
                              image(this.ve[9], 0, 0, 500, 500);
                              image(this.ve[18], 30, 400, 90, 90);//BOTON B
                              image(this.ve[19], 380, 400, 90, 90);//BOTON A
                            } else
                              if (this.estado == 30) { //JUEGO
                                this.objJuego.dibujar();
                                this.objJeringa.dibujar();
                                this.objOvejaa.dibujar();
                                // Verificar la pérdida del jugador
                                if (this.objJuego.verificarPerdida()) {
                                  this.estado = 16; // Cambiar al estado correspondiente a la pérdida


                                  // Verificar la victoria del jugador
                                  if (this.objJuego.verificarGanar()) {
                                    this.estado = 12; // Cambiar al estado correspondiente a la victoria
                                  }
                                }
                              } else //
                              if (this.estado == 12) {
                                image(this.ve[12], 0, 0, 500, 500);//IMAGEN
                                image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
                              } else
                                if (this.estado == 15) {
                                  image(this.ve[15], 0, 0, 500, 500);//IMAGEN
                                  image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
                                }
    }
  }
  distanciaS(x_, y_) {
    return dist(250, 440, this.x_, this.y_) < 70;
  }



  click() {
    if (this.estado == 0) {
      this.estado = 1;
    } else if ((this.estado == 1) && (dist(250, 440, mouseX, mouseY) < 30)) {
      this.estado = 2;
    } else if (this.estado == 2) {
      if (dist(50, 440, mouseX, mouseY) < 30) { //boton A
        this.estado = 6;
      } else if (dist(400, 440, mouseX, mouseY) < 30) { //boton B
        this.estado = 3;
      }
    } else if ((this.estado == 3) && (dist(250, 440, mouseX, mouseY) < 30)) {
      this.estado = 4;
    } else if (this.estado == 4) {
      if (dist(50, 440, mouseX, mouseY) < 30) { //boton A
        this.estado = 6;
      } else if (dist(400, 440, mouseX, mouseY) < 30) { //boton B
        this.estado = 5;
      }
    } else if (this.estado == 5) {
      this.estado = 16; //
    } else if (this.estado == 6) {
      if (dist(50, 440, mouseX, mouseY) < 30) { //boton A
        this.estado = 7;
      } else if (this.estado == 7) {
        if (dist(50, 440, mouseX, mouseY) < 30) { //boton A
          this.estado = 9;
        } else if (dist(400, 440, mouseX, mouseY) < 30) { //boton B
          this.estado = 8;
        } else if (dist(400, 440, mouseX, mouseY) < 30) { //boton B
          this.estado = 17;
        } else if (this.estado == 9) {
          if (dist(50, 440, mouseX, mouseY) < 30) { //boton A
            this.estado = 10;
          } else if (dist(400, 440, mouseX, mouseY) < 30) { //boton B
            this.estado = 12;
          } else
            if (this.estado == 10) { //JUEGO
              this.objJuego.dibujar();
              this.objJeringa.dibujar();
              this.objOvejaa.dibujar();
              // Verificar la pérdida del jugador
              if (this.objJuego.verificarPerdida()) {
                this.estado = 16; // Cambiar al estado correspondiente a la pérdida


                // Verificar la victoria del jugador
                if (this.objJuego.verificarGanar()) {
                  this.estado = 12; // Cambiar al estado correspondiente a la victoria
                }
              }
            } else //
            if (this.estado == 12) {
              image(this.ve[12], 0, 0, 500, 500);//IMAGEN
              image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
            } else
              if (this.estado == 15) {
                image(this.ve[15], 0, 0, 500, 500);//IMAGEN
                image(this.ve[20], 210, 400, 90, 90); //BOTON SIGUIENTE
              }
        }

        this.estado = 30; // Cambiar al estado siguiente
      } else if ((this.estado == 13) && (dist(250, 440, mouseX, mouseY) < 30)) {
        this.estado = 14;
      } else if ((this.estado == 14) && (dist(250, 440, mouseX, mouseY) < 30)) {
        this.estado = 9;
      } else if ((this.estado == 9 ) && (dist(250, 440, mouseX, mouseY) < 30)) {
        this.estado = 10;
      } else if (this.estado == 10) {
        if (dist(50, 440, mouseX, mouseY) < 30) { //boton A
          this.estado = 11;
        } else if (dist(400, 440, mouseX, mouseY) < 30) { //boton B
          this.estado = 12;
        } else if ((this.estado == 12) && (dist(250, 440, mouseX, mouseY) < 30)) {
          this.estado = 14;
        } else if ((this.estado == 14) && (dist(250, 440, mouseX, mouseY) < 30)) {
          this.estado = 15;
        }
      }
    }
  }
