var hypnoticBall, database;
var position;
var game;
var player;
var form;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var cars, car1, car2, car3, car4;
var car1Image, car2Image, car3Image, car4Image;
var trackImage;
var carsAtEnd;

function preload(){
trackImage = loadImage("track.jpg");
car1Image = loadImage("car1.png");
car2Image = loadImage("car2.png");
car3Image = loadImage("car3.png");
car4Image = loadImage("car4.png");
}
function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(displayWidth-20, displayHeight-30);
  game = new Game();
  game.getState(); 
  game.start();

}

function draw(){
  background("white");
  if (playerCount == 4){
    game.update(1);
  }
  if (gameState == 1){
    clear();
    game.play(); 
  }
  if (gameState == 2){
    game.end();
  }
}
