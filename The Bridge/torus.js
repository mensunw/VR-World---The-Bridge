class torus{
  constructor(x,y,z,c,r){
    let thing = document.createElement("a-torus");
    thing.setAttribute("position",{x:x,y:y,z:z});
    thing.setAttribute("color", c);
    thing.setAttribute("radius", r);
    thing.setAttribute("radius-tubular", 0.3);
    thing.setAttribute("arc", 180);
    scene.append(thing);
  }
}
