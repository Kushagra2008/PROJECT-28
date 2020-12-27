
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone1, tree1, ground1, boy, rope1;
var mango1, mango2, mango3, mango4, mango5;
var mango6, mango7, mango8, mango9, mango10;

function preload()
{
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1535, 706);

	boy = createSprite(260, 620, 20, 20)
	boy.addImage(boyImage)
	boy.scale = 0.09;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new stone(150, 570, 50, 50);
	tree1 = new tree(1200, 450, 50, 50);
	ground1 = new ground(750, 680, 1580, 20);

	rope1 = new rope({x: 212, y: 569}, stone1.body);
	Engine.run(engine);


	mango4 = new Mango(1140, 300, 50, 50);
	mango5 = new Mango(1350, 400, 50, 50);
	mango6 = new Mango(1230, 290, 40, 40);
	mango8 = new Mango(1100, 400, 50, 50);
	mango9 = new Mango(1270, 370, 50, 50);
	mango10 = new Mango(1180, 380, 40, 40);

}


function draw() {
	Engine.update(engine)
  //image(boyImage, 200, 200, 20, 20)
  rectMode(CENTER);
  background("pink");
  drawSprites();
  text(mouseX + "," + mouseY, mouseX, mouseY)
  stone1.display();
  tree1.display();
  ground1.display();
  rope1.display();

  mango4.display()
  mango5.display()
  mango6.display()
  mango8.display()
  mango9.display()
  mango10.display()

  detectCollison(stone1, mango4)
  detectCollison(stone1, mango5)
  detectCollison(stone1, mango6)
  detectCollison(stone1, mango8)
  detectCollison(stone1, mango9)
  detectCollison(stone1, mango10)

  //strokeWeight(5)
  //line(130, 220, 200, 200)
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
	rope1.fly();
}

function keyPressed()
{
	if (keyCode == 32)
	{
		rope1.attach(stone1.body);
	}
}

function detectCollison(stone, mango)
{
	mbp = mango.body.position;
	sbp = stone.body.position;
	var distance = dist(sbp.x, sbp.y, mbp.x, mbp.y)
	if (distance <= mango.width + stone.width)
	{
		Matter.Body.setStatic(mango.body, false)
	}
}