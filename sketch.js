var canvas,backgroundImage;

var gameState=0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database=fgirebase.database();
  quiz =new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  console.log(gameState);

  if(contestantCount===2){
    quiz.update(1);
  }
  if(gameState===1){
    clear();
    quiz.play();
  }
}
