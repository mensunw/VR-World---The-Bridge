class camera{
  constructor(x, y, z){
    this.x = x;
    this.z = z;
    this.y = y;
    //this.dy = -0.1;
    this.dz = -0.20;
    this.entity = document.createElement("a-entity");

    this.c = document.createElement("a-camera");
    this.c.setAttribute("position",{x:x,y:y,z:z});

    this.cursor = document.createElement("a-cursor");

    this.entity.append(this.c);
    this.c.append(this.cursor);
    scene.append(this.entity);
  }
  motion(){
    if(inCar && carLock){
      this.c.setAttribute("position",{x:car.x + 0.8,y:car.y + 3,z:car.z - 2.5});
      this.c.setAttribute('wasd-controls-enabled',"false");
      this.x = car.x-1;
      this.z = car.z-3;
      this.y = car.y+2;
    } 
    if(car.z < -92.5 && oneTime){
      //1 time
      this.c.setAttribute('wasd-controls-enabled',"true");
      this.c.setAttribute("position",{x:this.x,y:this.y,z:this.z});
      oneTime = false;
    }
  }
  
  elevatorUp(){
    if(inElevatorUp && plat.y < 39.5){
      this.c.setAttribute("position",{x:plat.x,y:plat.y+2,z:plat.z});
    }
  }
  elevatorDown(){
    if(inElevatorDown && plat.y > 0){
      this.c.setAttribute("position",{x:plat.x,y:plat.y+2,z:plat.z});
    }
  }
  
  //wanted to create something that checks camera position if z > -220 y position increase, but HOW CAN I KNOW CAMERA POSITION?? 

}
