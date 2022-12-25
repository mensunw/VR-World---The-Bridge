class plane{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dz = 0.5;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#plane");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("rotation","0 -180 0");
    this.obj.setAttribute("scale", "2 2 2");
    this.obj.setAttribute("animation-mixer", "");

    scene.append(this.obj);
  }
  fly(){

    this.z += this.dz;
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    if(this.z >= 200){
      this.z = -200;
      this.x = rnd(-100,100);
    }

  }
}