class button_1{
  constructor(x,y,z){
    let button = document.createElement("a-triangle");
    button.setAttribute("position",{x:x,y:y,z:z});
    button.setAttribute("color", "rgb(140,0,0)");
    button.setAttribute("vertex-c", "0.15 -0.5 0");
    button.setAttribute("vertex-a", "0 -0.15 0");
    button.setAttribute("vertex-b", "-0.15 -0.5 0");
    button.setAttribute("rotation", "0");
    button.addEventListener("mouseenter",function(){
      openDoor1 = true;
    })

    scene.append(button);
  }
}
