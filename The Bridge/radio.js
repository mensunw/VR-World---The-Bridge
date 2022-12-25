class radio{
  constructor(x,y,z){
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","#radio");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("rotation", "0 -90 0");
    this.obj.setAttribute("scale", "0.5 0.5 0.5");
    this.obj.addEventListener("mouseenter", function(){
      playMusic = !playMusic; 
    });

    scene.append(this.obj);
  }
}