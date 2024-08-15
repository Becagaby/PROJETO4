let palavra;
let musica;
let imagem;

function setup() {
   createCanvas(500, 500);
  palavra = strogonoff();
musica.loop();
}

function preload(){
  imagem = loadImage("foto.avif");
  musica = loadSound("musica.mp3");
}
function draw() {
  chocolate();
  strogonoff();
  
  let maximo= width;
  let minimo= 0;
  
  let aparecer = map(mouseX, 0, width, 1,palavra .length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 200, 200);
}

function chocolate(){
background("violet");
  image(imagem,0,0,500,500);
fill("lightblue");
  textSize(64);
  textAlign(CENTER,CENTER);
}
function strogonoff() {let palavra =["beca","gaby","mafer","ccb","jesus"];
 return random (palavra);                     
}