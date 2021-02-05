
var box1,box2,box3,box4,ball;
var game;
function preload() {
   game.loadSound("music.mp3");
    
}
function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(100,550,200,50);
box1.shapeColor="blue"

box2=createSprite(300,550,200,50);
box2.shapeColor="red";

box3=createSprite(500,550,200,50);
box3.shapeColor="green";

box4=createSprite(700,550,200,50);
box4.shapeColor="pink"
    //create box sprite and give velocity
ball=createSprite(100,100,25,25);
ball.shapeColor="white";
}

function draw() {
    background(110,110,110);
    //create edgeSprite
    edges=createEdgeSprite();
ball.bounceoff(edges);
   
 //add condition to check if box touching surface and make it box
if(box1.isTouching(ball) && ball.bounceoff(box1)){
    ball.shapeColor="blue";
    game.play();
}
if(box2.isTouching(ball) && ball.bounceoff(box1)){
    ball.shapeColor="red";
    game.play();

}
if(box3.isTouching(ball) ){
    ball.shapeColor="green";
    ball.velocityX=0;
    ball.velocityY=0;
    game.stop();

}
if(box2.isTouching(ball) && ball.bounceoff(box1)){
    ball.shapeColor="pink";
    game.play();

}


drawSprite();
}
