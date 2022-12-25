//open, close functions
class door_1{
  constructor(x,y,z){
    this.x1 = x;
    this.dx = 0.025;
    this.x2 = x;


    this.entity = document.createElement("a-entity");
    this.entity.setAttribute("position",{x:x,y:y,z:z});

    this.box1 = document.createElement("a-box");
    this.box1.setAttribute("position",{x:this.x1 - 1.5,y:0,z:0});
    this.box1.setAttribute("color", "rgb(180, 180, 180)");
    this.box1.setAttribute("height",7.3);
    this.box1.setAttribute("width",3);
    this.box1.setAttribute("depth",0.65);
    this.box1.setAttribute("opacity",0.5);

    this.box2 = document.createElement("a-box");
    this.box2.setAttribute("position",{x:this.x2 + 1.5,y:0,z:0});
    this.box2.setAttribute("color", "rgb(180, 180, 180)");
    this.box2.setAttribute("height",7.3);
    this.box2.setAttribute("width",3);
    this.box2.setAttribute("depth",0.65);
    this.box2.setAttribute("opacity",0.5);

    this.entity.append(this.box1);
    this.entity.append(this.box2);
    scene.append(this.entity);
  }
  open(){
    if(openDoor1){
      if(this.x1 > -2.8){
        this.x1 -= this.dx;
        this.x2 += this.dx; 
      }
      
      this.box1.setAttribute("position",{x:this.x1 - 1.5,y:0,z:0});
      this.box2.setAttribute("position",{x:this.x2 + 1.5,y:0,z:0});
    }
  }
  close(){
    if(!openDoor1){
      if(this.x1 < 0){
        this.x1 += this.dx;
        this.x2 -= this.dx;
      }

      this.box1.setAttribute("position",{x:this.x1 - 1.5,y:0,z:0});
      this.box2.setAttribute("position",{x:this.x2 + 1.5,y:0,z:0});
    }
  }
}
