//https://youtu.be/7BXX1WkyJVA VIDEO
let imagen;
let mouseColor;

function setup() {
  createCanvas(800, 400);
  // cargar imagen
  imagen = loadImage("data/tp1.jpg");
  mouseColor = color(255);
}

function draw() {
  background(255);
  image(imagen, 0, 0, 400, 400);
  
  // Dibujar circulitos 
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 2; i++) {
      circulo(500 + 170 * i, 120 + 170 * j, 150, 100, 15, 15, 9);
      circulo(515 + 170 * i, 135 + 170 * j, 100, 50, 10, -10, 9);
      circulo(525 + 170 * i, 125 + 170 * j, 50, 5, -12, 0, 9);
    }
  }
}

//funcion que dibuja los circulos 
function circulo(x, y, size, size2, dx, dy, cantidad) {
  let negro = true;
  noStroke();
  for (let i = 0; i < cantidad; i++) {
    // tamaño de los circulitos
    let tamano = map(i, 0, cantidad - 1, size, size2);
    // Suma para calcular el centro
    let xx = x + map(i, 0, cantidad - 1, 0, dx);
    let yy = y + map(i, 0, cantidad - 1, 0, dy);
    // Alternar colores
    fill(negro ? 0 : mouseColor);
   
    negro = !negro;
    ellipse(xx, yy, tamano, tamano);
  }
}

// Calcular un color por el mouse
function calcularColor(rojo, verde) {
  return color(rojo, verde, 255);
}

// Restaurar color con tecla 
function keyPressed() {
  mouseColor = color(255);
}

// Cambiar el color según la posición del mouse cuando se clikea
function mousePressed() {
  let cantidadMouseX = map(mouseX, 0, width, 0, 255);
  let cantidadMouseY = map(mouseY, 0, height, 0, 255);
  mouseColor = calcularColor(cantidadMouseX, cantidadMouseY);
}
