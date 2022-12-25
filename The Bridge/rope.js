class rope{
  constructor(x,y,z,h){
    this.entity = document.createElement("a-entity");
    this.entity.setAttribute("position",{x:x,y:y,z:z});

    this.box = document.createElement("a-box");
    this.box.setAttribute("position",{x:0,y:0,z:0});
    this.box.setAttribute("color", "gray");
    this.box.setAttribute("height", h);
    this.box.setAttribute("width", 0.1); 
    this.box.setAttribute("depth", 0.1);

    this.cylinder = document.createElement("a-cylinder");
    this.cylinder.setAttribute("position",{x:0,y:2.35,z:0}); //y based on height(/2?)
    this.cylinder.setAttribute("color", "gray");
    this.cylinder.setAttribute("height", "0.1");
    this.cylinder.setAttribute("radius", "0.5"); 
    this.cylinder.setAttribute("rotation", "0 -90 -90");

    this.entity.append(this.box);
    this.entity.append(this.cylinder);
    scene.append(this.entity);
  }
}
