var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
   Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var bg;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function preload() {
bg=loadImage("bg.PNG");

}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,800,800,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background(bg);
  textSize(30);
  fill("red");
  textStyle("bold");
  text("Score : "+score,20,40);
  
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35);
  fill("blue");
  text(" 0 ", 5, 550);
  text(" 0 ", 80, 550);
  text(" 50 ", 160, 550);
  text(" 100 ", 240, 550);
  text(" 200 ", 320, 550);
  text("500 ", 405, 550);
  text(" 200 ", 480, 550);
  text(" 100 ", 560, 550);
  text(" 50 ", 640, 550);
  text(" 0 ", 720, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    fill("green")
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 160) 
              {
                  score=score+0;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 240 && particle.body.position.x > 161 ) 
              {
                    score = score + 50;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 320 && particle.body.position.x > 241 )
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              else if (particle.body.position.x < 400 && particle.body.position.x > 321 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }     
              else if (particle.body.position.x < 480 && particle.body.position.x > 401 )
              {
                    score = score + 500;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }       
              else if (particle.body.position.x < 560 && particle.body.position.x > 481 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }    
              else if (particle.body.position.x <640 && particle.body.position.x > 561 )
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }    
              else if (particle.body.position.x < 720 && particle.body.position.x > 641 )
              {
                    score = score + 50;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }          
              else if (particle.body.position.x < 800 && particle.body.position.x > 721 )
              {
                    score = score + 0;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}