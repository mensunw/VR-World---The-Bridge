class moveButton_1{
  constructor(x,y,z){
    this.entity = document.createElement("a-entity");
    this.entity.setAttribute("position",{x:x,y:y,z:z});

    this.box3 = document.createElement("a-box");
    this.box3.setAttribute("position",{x:-4,y:1.6,z:7.5});
    this.box3.setAttribute("color", "rgb(140, 0, 0)");
    this.box3.setAttribute("height",0.4);
    this.box3.setAttribute("width",0.4);
    this.box3.setAttribute("depth",0.2); //0.2
    this.box3.addEventListener("mouseenter",function(){
      openDoor1 = false;
      inElevatorUp = true;
    });
    this.entity.append(this.box3);
    scene.append(this.entity);
  }
}