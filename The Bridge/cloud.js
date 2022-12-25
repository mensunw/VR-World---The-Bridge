class cloud{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.entity = document.createElement("a-entity");
    this.entity.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.entity.setAttribute("rotation", {x:0, y: rnd(0,360), z:0});
    
    this.shape1 = document.createElement("a-icosahedron");
    this.shape1.setAttribute("position",{x:0,y:0,z:0});
    this.shape1.setAttribute("color", "white");
    this.shape1.setAttribute("radius",5);
    this.shape1.setAttribute("rotation", {x: rnd(0,360), y: rnd(0,360), z:rnd(0,360)})
    this.shape1.setAttribute("visible", true);

    this.shape2 = document.createElement("a-dodecahedron");
    this.shape2.setAttribute("position",{x:4,y:0,z:5});
    this.shape2.setAttribute("color", "white");
    this.shape2.setAttribute("radius",5);
    this.shape2.setAttribute("rotation", {x: rnd(0,360), y: rnd(0,360), z:rnd(0,360)})
    this.shape2.setAttribute("visible", true);

    this.shape3 = document.createElement("a-dodecahedron");
    this.shape3.setAttribute("position",{x:4,y:0,z:-6});
    this.shape3.setAttribute("color", "white");
    this.shape3.setAttribute("radius",5);
    this.shape3.setAttribute("rotation", {x: rnd(0,360), y: rnd(0,360), z:rnd(0,360)})
    this.shape3.setAttribute("visible", true);

    this.shape4 = document.createElement("a-icosahedron");
    this.shape4.setAttribute("position",{x:7,y:0,z:-1});
    this.shape4.setAttribute("color", "white");
    this.shape4.setAttribute("radius",5);
    this.shape4.setAttribute("rotation", {x: rnd(0,360), y: rnd(0,360), z:rnd(0,360)})
    this.shape4.setAttribute("visible", true);

    this.shape5 = document.createElement("a-icosahedron");
    this.shape5.setAttribute("position",{x:4,y:-1.5,z:0});
    this.shape5.setAttribute("color", "white");
    this.shape5.setAttribute("radius",5);
    this.shape5.setAttribute("rotation", {x: rnd(0,360), y: rnd(0,360), z:rnd(0,360)})
    this.shape5.setAttribute("visible", true);

    this.entity.append(this.shape1);
    this.entity.append(this.shape2);
    this.entity.append(this.shape3);
    this.entity.append(this.shape4);
    this.entity.append(this.shape5);
    scene.append(this.entity);
  }
  collision(){
    for(let i = 0; i < 3; i++){
      if((planes[i].x <= this.x + 5 && planes[i].x >= this.x - 5) && (planes[i].z <= this.z + 5 && planes[i].z + 5 >= this.z - 5)){
        this.entity.setAttribute("visible", false);
      }
    }
  }
}