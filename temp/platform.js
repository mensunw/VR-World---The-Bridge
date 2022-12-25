class platform{
  constructor(x,y,z){
    this.x = x;
    this.z = z;
    this.y = y;
    this.dy = 0.1; //0.05

    this.entity = document.createElement("a-entity");
    this.entity.setAttribute("position",{x:x,y:y,z:z});

    this.box1 = document.createElement("a-box");
    this.box1.setAttribute("position",{x:0,y:0.3,z:0});
    this.box1.setAttribute("color", "rgb(65,65,65)");
    this.box1.setAttribute("height",0.2);
    this.box1.setAttribute("width",15);
    this.box1.setAttribute("depth",15);

    this.box2 = document.createElement("a-box");
    this.box2.setAttribute("position",{x:0,y:8,z:0});
    this.box2.setAttribute("color", "rgb(65,65,65)");
    this.box2.setAttribute("height",0.2);
    this.box2.setAttribute("width",15);
    this.box2.setAttribute("depth",15);

    this.entity.append(this.box1);
    this.entity.append(this.box2);
    scene.append(this.entity);
  } movement(){
    if(inElevatorUp && this.y < 39.5 && door1.x1 >= 0){
      this.y += this.dy;
      if(this.y >= 39.5){
        inElevatorUp = false;
        openDoor2 = true;
        //timer
        startTimer = true;
      }
      this.entity.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    }
    if(inElevatorDown && this.y > 0 && door2.x1 >= 0){
      this.y -= this.dy;
      if(this.y <= 0){
        inElevatorDown = false;
        openDoor1 = true;
        startTimer = true;
      }
      this.entity.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    }
    if(timer == 250){
      openDoor1 = false;
      openDoor2 = false;
      startTimer = false;
      timer = 0;
    }
  }
}
