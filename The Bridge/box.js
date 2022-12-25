class box{
  constructor(x,y,z,r,h){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dz = 0.1;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#minecraft");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("animation-mixer","");
    scene.append(this.obj);
  }
}
