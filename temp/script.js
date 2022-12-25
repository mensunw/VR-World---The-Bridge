class Bridge_Tile{
  constructor(x,y,z,h){
    
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z})

    let box1 = document.createElement("a-plane");
    box1.setAttribute("position",{x:0,y:0.01,z:0});
    box1.setAttribute("width",0.25);
    box1.setAttribute("height", h);
    box1.setAttribute("color","white");
    box1.setAttribute("rotation","-90 0 0");
    this.obj.append(box1);
    scene.append(this.obj);
  }
}

class Sphere{
  constructor(x,y,z){
    let rope = document.createElement("a-sphere");
    rope.setAttribute("position",{x:x,y:y,z:z});
    rope.setAttribute("color", "rgb(71, 71, 107)");
    rope.setAttribute("radius", 0.39);

    scene.append(rope);
  }
}


let rnd = (l,u) => Math.floor(Math.random() * (u-l) + l);
let scene;
let cam;
let inCar = false;
let carLock = true;
let oneTime = true;
let openDoor1 = false;
let openDoor2 = false;
let inElevatorUp = false;
let inElevatorDown = false;
let timer = 0;
let startTimer = false;
let playMusic = false;
let planes = [];
let clouds = [];
let audio = new Audio('music.mp3');
audio.volume = 0.05;
function init(){
  scene = document.getElementById("scene");
  
  for(let i = 98; i > -100; i-=4.5){
    new Bridge_Tile(-3.875, 0, i, "4");
  }
  new Bridge_Tile(-3.875, 0, -99, "2");

  for(let i = 98; i > -100; i-=4.5){
    new Bridge_Tile(3.875, 0, i, "4");
  }
  new Bridge_Tile(3.875, 0, -99, "2");

  for(let i = -720; i < 0; i++){
    new Sphere(-8.4, 6+((0.125*(i*i)))/2050, 0-i*(0.1))
  }

  for(let i = -720; i < 0; i++){
    new Sphere(-8.4, 6+((0.125*(i*i)))/2050, 0+i*(0.1))
  }

  for(let i = -720; i < 0; i++){
    new Sphere(8.4, 6+((0.125*(i*i)))/2050, 0-i*(0.1))
  }

  for(let i = -720; i < 0; i++){
    new Sphere(8.4, 6+((0.125*(i*i)))/2050, 0+i*(0.1))
  }

  /*

  for(let i = 40; i < 201; i+=40){
    cars.push(new car(1.9375, 0, -100 + i)); //plus 20
  }

  for(let i = 40; i < 201; i+=40){
    cars.push(new car(-5.8125, 0, -80 + i)); //plus 20
  }

  */

  for(let i = 0; i < 32; i++){
    new torus(0, 20, -73.5 - (i*0.1), "rgb(153, 153, 153)", 10);
  }

  for(let i = 0; i < 32; i++){
    new torus(0, 20, 76.5 - (i*0.1), "rgb(153, 153, 153)", 10);
  }

  //Bridge side

  for(let i = 0; i < 16; i++){
    new box(8.4, -4, 90 - 12*(i), "60", 14); //12
  }

  for(let i = 0; i < 16; i++){
    new box(8.4, -4, 90 - 12*(i), "-60", 14); 
  }

  new box(8.4, -4, 96, "0", 8);
  new box(8.4, -4, 99.6, "0", 8);
  new box(8.4, -4, -96, "0", 8);
  new box(8.4, -4, -99.6, "0", 8);

  for(let i = 0; i < 16; i++){
    new box(-8.4, -4, 90 - 12*(i), "60", 14); //12
  }

  for(let i = 0; i < 16; i++){
    new box(-8.4, -4, 90 - 12*(i), "-60", 14); 
  }

  new box(-8.4, -4, 96, "0", 8);
  new box(-8.4, -4, 99.6, "0", 8);
  new box(-8.4, -4, -96, "0", 8);
  new box(-8.4, -4, -99.6, "0", 8);

  //Bridge Columns

  //Bridge Column 1 Left

  for(let i = 0; i < 8; i++){
    new box(-11.5, -19.1 + 7.4*i, 78.1, "0 0 45", 8.5);
    new box(-11.5, -19.1 + 7.4*i, 78.1, "0 0 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(-14.6, -19.1 + 7.4*i, 75, "0 -90 45", 8.5);
    new box(-14.6, -19.1 + 7.4*i, 75, "0 -90 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(-8.4, -19.1 + 7.4*i, 75, "0 -90 45", 8.5);
    new box(-8.4, -19.1 + 7.4*i, 75, "0 -90 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(-11.5, -19.1 + 7.4*i, 71.9, "0 0 45", 8.5);
    new box(-11.5, -19.1 + 7.4*i, 71.9, "0 0 -45", 8.5);
  }

  //Bridge Column 1 Right

  for(let i = 0; i < 8; i++){
    new box(11.5, -19.1 + 7.4*i, 78.1, "0 0 45", 8.5);
    new box(11.5, -19.1 + 7.4*i, 78.1, "0 0 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(14.6, -19.1 + 7.4*i, 75, "0 -90 45", 8.5);
    new box(14.6, -19.1 + 7.4*i, 75, "0 -90 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(8.4, -19.1 + 7.4*i, 75, "0 -90 45", 8.5);
    new box(8.4, -19.1 + 7.4*i, 75, "0 -90 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(11.5, -19.1 + 7.4*i, 71.9, "0 0 45", 8.5);
    new box(11.5, -19.1 + 7.4*i, 71.9, "0 0 -45", 8.5);
  }
  
  //Bridge Column 2 Left
  
  for(let i = 0; i < 8; i++){
    new box(-11.5, -19.1 + 7.4*i, -71.9, "0 0 45", 8.5); //-150 diff
    new box(-11.5, -19.1 + 7.4*i, -71.9, "0 0 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(-14.6, -19.1 + 7.4*i, -75, "0 -90 45", 8.5);
    new box(-14.6, -19.1 + 7.4*i, -75, "0 -90 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(-8.4, -19.1 + 7.4*i, -75, "0 -90 45", 8.5);
    new box(-8.4, -19.1 + 7.4*i, -75, "0 -90 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(-11.5, -19.1 + 7.4*i, -78.1, "0 0 45", 8.5);
    new box(-11.5, -19.1 + 7.4*i, -78.1, "0 0 -45", 8.5);
  }

  //Bridge Column 2 Right
  
  for(let i = 0; i < 8; i++){
    new box(11.5, -19.1 + 7.4*i, -71.9, "0 0 45", 8.5); //-150 diff
    new box(11.5, -19.1 + 7.4*i, -71.9, "0 0 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(14.6, -19.1 + 7.4*i, -75, "0 -90 45", 8.5);
    new box(14.6, -19.1 + 7.4*i, -75, "0 -90 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(8.4, -19.1 + 7.4*i, -75, "0 -90 45", 8.5);
    new box(8.4, -19.1 + 7.4*i, -75, "0 -90 -45", 8.5);
  }
  for(let i = 0; i < 8; i++){
    new box(11.5, -19.1 + 7.4*i, -78.1, "0 0 45", 8.5);
    new box(11.5, -19.1 + 7.4*i, -78.1, "0 0 -45", 8.5);
  }

  //Bridge Column Irregularities

  new box(-5.3, 32.7, 78.1, "0 0 45", 8.5);
  new box(-5.3, 32.7, 78.1, "0 0 -45", 8.5);
  new box(5.3, 32.7, 78.1, "0 0 45", 8.5);
  new box(5.3, 32.7, 78.1, "0 0 -45", 8.5);
  new box(0, 32.7, 78.1, "0 0 45", 8);
  new box(0, 32.7, 78.1, "0 0 -45", 8);
  new box(-5.3, 32.7, 71.9, "0 0 45", 8.5);
  new box(-5.3, 32.7, 71.9, "0 0 -45", 8.5);
  new box(5.3, 32.7, 71.9, "0 0 45", 8.5);
  new box(5.3, 32.7, 71.9, "0 0 -45", 8.5);
  new box(0, 32.7, 71.9, "0 0 45", 8);
  new box(0, 32.7, 71.9, "0 0 -45", 8);

  new box(-5.3, 32.7, -71.9, "0 0 45", 8.5);
  new box(-5.3, 32.7, -71.9, "0 0 -45", 8.5);
  new box(5.3, 32.7, -71.9, "0 0 45", 8.5);
  new box(5.3, 32.7, -71.9, "0 0 -45", 8.5);
  new box(0, 32.7, -71.9, "0 0 45", 8);
  new box(0, 32.7, -71.9, "0 0 -45", 8);
  new box(-5.3, 32.7, -78.1, "0 0 45", 8.5);
  new box(-5.3, 32.7, -78.1, "0 0 -45", 8.5);
  new box(5.3, 32.7, -78.1, "0 0 45", 8.5);
  new box(5.3, 32.7, -78.1, "0 0 -45", 8.5);
  new box(0, 32.7, -78.1, "0 0 45", 8);
  new box(0, 32.7, -78.1, "0 0 -45", 8);

  new rope(-8.4, 3.65, 0, 4);
  new rope(8.4, 3.65, 0, 4);

  //car
  car = new car(-1.9375, 0, 100); //-1.9375, 0, 100

  cam = new camera(3,2, 100); //3,0.5,100    2

  //Elevator

  button1 = new button_1(-4,2.12,-119.44);
  door1 = new door_1(0,3.65,-120);
  moveButton1 = new moveButton_1(0, 0, -128);
  plat = new platform(0,0,-128);

  button2 = new button_2(-4, 41.08, -119.44);
  door2 = new door_2(0,43.65,-120);
  moveButton2 = new moveButton_2(0, 40, -128);

  //3d models

  for(let i = 0; i < 3; i++){
    planes.push(new plane(rnd(-100, 100), 80, rnd(-200,200)));
  }
  for(let i = 0; i < 50; i++){
    clouds.push(new cloud(rnd(-200,200), 80, rnd(-200, 200)));
  }

  new radio(10, 0, -114);

  new chara(0, 39.5, -75);

  loop();
} 

function loop(){
  car.move();
  cam.motion();
  plat.movement();
  cam.elevatorUp();
  cam.elevatorDown();
  door1.open();
  door1.close();
  door2.open();
  door2.close();
  for(let i = 0; i < planes.length; i++){
    planes[i].fly();
  }
  for(let i = 0; i < clouds.length; i++){
    clouds[i].collision();
  }
  if(startTimer){
    timer++;
  }
  if(playMusic){
    audio.play();
  }
  if(!playMusic){
    audio.pause();
  }
  setTimeout(loop, 10);
}


