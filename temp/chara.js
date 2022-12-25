class chara{
  constructor(x,y,z){
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#chara");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("rotation", "0 0 0");
    this.obj.setAttribute("scale", "3 3 3");

    scene.append(this.obj);
  }
}