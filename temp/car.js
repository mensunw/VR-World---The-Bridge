class car{
  constructor(x, y, z){
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = 0;
    this.dz = -0.20;
    this.dr = -3.5;

    let cylinder1 = document.createElement("a-cylinder");
    cylinder1.setAttribute("position",{x:0,y:0.5,z:0});
    cylinder1.setAttribute("rotation","-90 -90 0");
    cylinder1.setAttribute("height","0.5");
    cylinder1.setAttribute("radius","0.5");
    cylinder1.setAttribute("color","black");

    let cylinder2 = document.createElement("a-cylinder");
    cylinder2.setAttribute("position",{x:0,y:0.5,z:0});
    cylinder2.setAttribute("rotation","-90 -90 0");
    cylinder2.setAttribute("height","0.6");
    cylinder2.setAttribute("radius","0.3");
    cylinder2.setAttribute("color","silver");

    let cylinder3 = document.createElement("a-cylinder");
    cylinder3.setAttribute("position",{x:3.875,y:0.5,z:0});
    cylinder3.setAttribute("rotation","-90 -90 0");
    cylinder3.setAttribute("height","0.5");
    cylinder3.setAttribute("radius","0.5");
    cylinder3.setAttribute("color","black");

    let cylinder4 = document.createElement("a-cylinder");
    cylinder4.setAttribute("position",{x:3.875,y:0.5,z:0});
    cylinder4.setAttribute("rotation","-90 -90 0");
    cylinder4.setAttribute("height","0.6");
    cylinder4.setAttribute("radius","0.3");
    cylinder4.setAttribute("color","silver");

    let cylinder5 = document.createElement("a-cylinder");
    cylinder5.setAttribute("position",{x:0,y:0.5,z:-5});
    cylinder5.setAttribute("rotation","-90 -90 0");
    cylinder5.setAttribute("height","0.5");
    cylinder5.setAttribute("radius","0.5");
    cylinder5.setAttribute("color","black");

    let cylinder6 = document.createElement("a-cylinder");
    cylinder6.setAttribute("position",{x:0,y:0.5,z:-5});
    cylinder6.setAttribute("rotation","-90 -90 0");
    cylinder6.setAttribute("height","0.6");
    cylinder6.setAttribute("radius","0.3");
    cylinder6.setAttribute("color","silver");

    let cylinder7 = document.createElement("a-cylinder");
    cylinder7.setAttribute("position",{x:3.875,y:0.5,z:-5});
    cylinder7.setAttribute("rotation","-90 -90 0");
    cylinder7.setAttribute("height","0.5");
    cylinder7.setAttribute("radius","0.5");
    cylinder7.setAttribute("color","black");

    let cylinder8 = document.createElement("a-cylinder");
    cylinder8.setAttribute("position",{x:3.875,y:0.5,z:-5});
    cylinder8.setAttribute("rotation","-90 -90 0");
    cylinder8.setAttribute("height","0.6");
    cylinder8.setAttribute("radius","0.3");
    cylinder8.setAttribute("color","silver");

    this.cylinder9 = document.createElement("a-cylinder");
    this.cylinder9.setAttribute("position",{x:-0.3,y:0.5,z:0});
    this.cylinder9.setAttribute("height","0.65");
    this.cylinder9.setAttribute("radius","0.05");
    this.cylinder9.setAttribute("color","black");
    this.cylinder9.setAttribute("rotation",{x:90, y:0, z:0});

    this.cylinder10 = document.createElement("a-cylinder");
    this.cylinder10.setAttribute("position",{x:-0.3,y:0.5,z:0});
    this.cylinder10.setAttribute("height","0.65");
    this.cylinder10.setAttribute("radius","0.05");
    this.cylinder10.setAttribute("color","black");
    this.cylinder10.setAttribute("rotation",{x:0, y:0, z:0});

    this.cylinder11 = document.createElement("a-cylinder");
    this.cylinder11.setAttribute("position",{x:0.3,y:0.5,z:0});
    this.cylinder11.setAttribute("height","0.65");
    this.cylinder11.setAttribute("radius","0.05");
    this.cylinder11.setAttribute("color","black");
    this.cylinder11.setAttribute("rotation",{x:90, y:0, z:0});

    this.cylinder12 = document.createElement("a-cylinder");
    this.cylinder12.setAttribute("position",{x:0.3,y:0.5,z:0});
    this.cylinder12.setAttribute("height","0.65");
    this.cylinder12.setAttribute("radius","0.05");
    this.cylinder12.setAttribute("color","black");
    this.cylinder12.setAttribute("rotation",{x:0, y:0, z:0});

    this.cylinder13 = document.createElement("a-cylinder");
    this.cylinder13.setAttribute("position",{x:3.575,y:0.5,z:0});
    this.cylinder13.setAttribute("height","0.65");
    this.cylinder13.setAttribute("radius","0.05");
    this.cylinder13.setAttribute("color","black");
    this.cylinder13.setAttribute("rotation",{x:90, y:0, z:0});

    this.cylinder14 = document.createElement("a-cylinder");
    this.cylinder14.setAttribute("position",{x:3.575,y:0.5,z:0});
    this.cylinder14.setAttribute("height","0.65");
    this.cylinder14.setAttribute("radius","0.05");
    this.cylinder14.setAttribute("color","black");
    this.cylinder14.setAttribute("rotation",{x:0, y:0, z:0});

    this.cylinder15 = document.createElement("a-cylinder");
    this.cylinder15.setAttribute("position",{x:4.175,y:0.5,z:0});
    this.cylinder15.setAttribute("height","0.65");
    this.cylinder15.setAttribute("radius","0.05");
    this.cylinder15.setAttribute("color","black");
    this.cylinder15.setAttribute("rotation",{x:90, y:0, z:0});

    this.cylinder16 = document.createElement("a-cylinder");
    this.cylinder16.setAttribute("position",{x:4.175,y:0.5,z:0});
    this.cylinder16.setAttribute("height","0.65");
    this.cylinder16.setAttribute("radius","0.05");
    this.cylinder16.setAttribute("color","black");
    this.cylinder16.setAttribute("rotation",{x:0, y:0, z:0});

    this.cylinder17 = document.createElement("a-cylinder");
    this.cylinder17.setAttribute("position",{x:-0.3,y:0.5,z:-5});
    this.cylinder17.setAttribute("height","0.65");
    this.cylinder17.setAttribute("radius","0.05");
    this.cylinder17.setAttribute("color","black");
    this.cylinder17.setAttribute("rotation",{x:90, y:0, z:0});

    this.cylinder18 = document.createElement("a-cylinder");
    this.cylinder18.setAttribute("position",{x:-0.3,y:0.5,z:-5});
    this.cylinder18.setAttribute("height","0.65");
    this.cylinder18.setAttribute("radius","0.05");
    this.cylinder18.setAttribute("color","black");
    this.cylinder18.setAttribute("rotation",{x:0, y:0, z:0});

    this.cylinder19 = document.createElement("a-cylinder");
    this.cylinder19.setAttribute("position",{x:0.3,y:0.5,z:-5});
    this.cylinder19.setAttribute("height","0.65");
    this.cylinder19.setAttribute("radius","0.05");
    this.cylinder19.setAttribute("color","black");
    this.cylinder19.setAttribute("rotation",{x:90, y:0, z:0});

    this.cylinder20 = document.createElement("a-cylinder");
    this.cylinder20.setAttribute("position",{x:0.3,y:0.5,z:-5});
    this.cylinder20.setAttribute("height","0.65");
    this.cylinder20.setAttribute("radius","0.05");
    this.cylinder20.setAttribute("color","black");
    this.cylinder20.setAttribute("rotation",{x:0, y:0, z:0});

    this.cylinder21 = document.createElement("a-cylinder");
    this.cylinder21.setAttribute("position",{x:3.575,y:0.5,z:-5});
    this.cylinder21.setAttribute("height","0.65");
    this.cylinder21.setAttribute("radius","0.05");
    this.cylinder21.setAttribute("color","black");
    this.cylinder21.setAttribute("rotation",{x:90, y:0, z:0});

    this.cylinder22 = document.createElement("a-cylinder");
    this.cylinder22.setAttribute("position",{x:3.575,y:0.5,z:-5});
    this.cylinder22.setAttribute("height","0.65");
    this.cylinder22.setAttribute("radius","0.05");
    this.cylinder22.setAttribute("color","black");
    this.cylinder22.setAttribute("rotation",{x:0, y:0, z:0});

    this.cylinder23 = document.createElement("a-cylinder");
    this.cylinder23.setAttribute("position",{x:4.175,y:0.5,z:-5});
    this.cylinder23.setAttribute("height","0.65");
    this.cylinder23.setAttribute("radius","0.05");
    this.cylinder23.setAttribute("color","black");
    this.cylinder23.setAttribute("rotation",{x:90, y:0, z:0});

    this.cylinder24 = document.createElement("a-cylinder");
    this.cylinder24.setAttribute("position",{x:4.175,y:0.5,z:-5});
    this.cylinder24.setAttribute("height","0.65");
    this.cylinder24.setAttribute("radius","0.05");
    this.cylinder24.setAttribute("color","black");
    this.cylinder24.setAttribute("rotation",{x:0, y:0, z:0});

    let box1 = document.createElement("a-box");
    box1.setAttribute("color", "silver");
    box1.setAttribute("position", {x:1.9365,y:1.2,z:-2.5});
    box1.setAttribute("depth", "7");
    box1.setAttribute("width", "3.375");

    let box2 = document.createElement("a-box");
    box2.setAttribute("color", "silver");
    box2.setAttribute("position", {x:1.9365,y:1.4,z:1.25});
    box2.setAttribute("depth", "0.5");
    box2.setAttribute("width", "4.2");
    box2.setAttribute("height", "0.6");

    let box3 = document.createElement("a-box");
    box3.setAttribute("color", "silver");
    box3.setAttribute("position", {x:1.9365,y:1.2,z:0.75});
    box3.setAttribute("depth", "0.5");
    box3.setAttribute("width", "4.2");

    let box4 = document.createElement("a-box");
    box4.setAttribute("color", "silver");
    box4.setAttribute("position", {x:1.9365,y:1.2,z:-5.75});
    box4.setAttribute("depth", "0.5");
    box4.setAttribute("width", "4.2");
    box4.setAttribute("height", "1");

    let box5 = document.createElement("a-box");
    box5.setAttribute("color", "silver");
    box5.setAttribute("position", {x:1.9365,y:1.4,z:-2.5});
    box5.setAttribute("depth", "6");
    box5.setAttribute("width", "4.2");
    box5.setAttribute("height", "0.6");

    let box6 = document.createElement("a-box");
    box6.setAttribute("color", "silver");
    box6.setAttribute("position", {x:1.9365,y:0.9,z:-2.5});
    box6.setAttribute("depth", "4");
    box6.setAttribute("width", "4.2");
    box6.setAttribute("height", "0.4");

    let box7 = document.createElement("a-box");
    box7.setAttribute("color", "silver");
    box7.setAttribute("position", {x:1.9365,y:1.375,z:-6.25});
    box7.setAttribute("depth", "1");
    box7.setAttribute("width", "4.2");
    box7.setAttribute("height", "0.65");

    let box8 = document.createElement("a-box");
    box8.setAttribute("color", "silver");
    box8.setAttribute("position", {x:1.9365,y:1.2,z:1});
    box8.setAttribute("depth", "0.6");
    box8.setAttribute("width", "4.2");
    box8.setAttribute("height", "0.65");

    let box9 = document.createElement("a-box");
    box9.setAttribute("color", "silver");
    box9.setAttribute("position", {x:1.9365,y:1,z:-6.25});
    box9.setAttribute("depth", "1");
    box9.setAttribute("width", "3.8");
    box9.setAttribute("height", "0.65");

    let box10 = document.createElement("a-box");
    box10.setAttribute("color", "silver");
    box10.setAttribute("position", {x:1.9365,y:1.1,z:0.5});
    box10.setAttribute("depth", "0.3");
    box10.setAttribute("width", "4.2");
    box10.setAttribute("height", "0.3");

    let box11 = document.createElement("a-box");
    box11.setAttribute("color", "silver");
    box11.setAttribute("position", {x:1.9365,y:1.1,z:-0.5});
    box11.setAttribute("depth", "0.3");
    box11.setAttribute("width", "4.2");
    box11.setAttribute("height", "0.3");

    let box12 = document.createElement("a-box");
    box12.setAttribute("color", "silver");
    box12.setAttribute("position", {x:1.9365,y:1.1,z:-4.5});
    box12.setAttribute("depth", "0.3");
    box12.setAttribute("width", "4.2");
    box12.setAttribute("height", "0.3")

    let box13 = document.createElement("a-box");
    box13.setAttribute("color", "silver");
    box13.setAttribute("position", {x:1.9365,y:1.1,z:-5.5});
    box13.setAttribute("depth", "0.3");
    box13.setAttribute("width", "4.2");
    box13.setAttribute("height", "0.3")

    //Break

    let box14 = document.createElement("a-box");
    box14.setAttribute("color", "silver");
    box14.setAttribute("position", {x:1.9365,y:1.75,z:-5.487});
    box14.setAttribute("depth", "2.5");
    box14.setAttribute("width", "4.2");
    box14.setAttribute("height", "0.4");
    box14.setAttribute("rotation", "-10 0 0");

    let box15 = document.createElement("a-box");
    box15.setAttribute("color", "silver");
    box15.setAttribute("position", {x:1.9365,y:1.9,z:-1.5});
    box15.setAttribute("depth", "6");
    box15.setAttribute("width", "4.2");
    box15.setAttribute("height", "0.4");

    let box16 = document.createElement("a-box");
    box16.setAttribute("color", "gray");
    box16.setAttribute("position", {x:1.9365,y:2.21,z:1.205});
    box16.setAttribute("depth", "0.5");
    box16.setAttribute("width", "4");
    box16.setAttribute("height", "0.4");
    box16.setAttribute("rotation", "60 0 0");
    box16.setAttribute("opacity","0.5");

    let box17 = document.createElement("a-box");
    box17.setAttribute("color", "gray");
    box17.setAttribute("position", {x:1.9365,y:3,z:0.75});
    box17.setAttribute("depth", "1.4");
    box17.setAttribute("width", "4");
    box17.setAttribute("height", "0.4");
    box17.setAttribute("rotation", "60 0 0");
    box17.setAttribute("opacity","0.5");

    let box18 = document.createElement("a-box");
    box18.setAttribute("color", "silver");
    box18.setAttribute("position", {x:3.987,y:2.815,z:0.855});
    box18.setAttribute("depth", "1.9");
    box18.setAttribute("width", "0.1");
    box18.setAttribute("height", "0.4");
    box18.setAttribute("rotation", "60 0 0");

    let box19 = document.createElement("a-box");
    box19.setAttribute("color", "silver");
    box19.setAttribute("position", {x:-0.113,y:2.815,z:0.855});
    box19.setAttribute("depth", "1.9");
    box19.setAttribute("width", "0.1");
    box19.setAttribute("height", "0.4");
    box19.setAttribute("rotation", "60 0 0");

    let box20 = document.createElement("a-box");
    box20.setAttribute("color", "silver");
    box20.setAttribute("position", {x:1.9375,y:3.567,z:0.427});
    box20.setAttribute("depth", "0.1");
    box20.setAttribute("width", "4");
    box20.setAttribute("height", "0.4");
    box20.setAttribute("rotation", "60 0 0");

    let box21 = document.createElement("a-box");
    box21.setAttribute("color", "silver");
    box21.setAttribute("position", {x:1.9375,y:3.567,z:-1.35});
    box21.setAttribute("depth", "4");
    box21.setAttribute("width", "4.2");
    box21.setAttribute("height", "0.4");
    box21.setAttribute("rotation", "0 0 0");

    let box22 = document.createElement("a-box");
    box22.setAttribute("color", "silver");
    box22.setAttribute("position", {x:1.9375,y:2.8,z:-3.78});
    box22.setAttribute("depth", "0.2");
    box22.setAttribute("width", "4");
    box22.setAttribute("height", "2");
    box22.setAttribute("rotation", "32 0 0");
    box22.setAttribute("opacity","0.5");

    let box23 = document.createElement("a-box");
    box23.setAttribute("color", "silver");
    box23.setAttribute("position", {x:-0.113,y:2.815,z:-3.78});
    box23.setAttribute("depth", "2");
    box23.setAttribute("width", "0.1");
    box23.setAttribute("height", "0.2");
    box23.setAttribute("rotation", "-59 0 0");

    let box24 = document.createElement("a-box");
    box24.setAttribute("color", "silver");
    box24.setAttribute("position", {x:3.987,y:2.815,z:-3.78});
    box24.setAttribute("depth", "2");
    box24.setAttribute("width", "0.1");
    box24.setAttribute("height", "0.2");
    box24.setAttribute("rotation", "-59 0 0");

    let box25 = document.createElement("a-box");
    box25.setAttribute("color", "silver");
    box25.setAttribute("position", {x:3.987,y:2.815,z:-1.8});
    box25.setAttribute("depth", "1.5");
    box25.setAttribute("width", "0.1");
    box25.setAttribute("height", "0.2");
    box25.setAttribute("rotation", "-90 0 0");

    let box26 = document.createElement("a-box");
    box26.setAttribute("color", "silver");
    box26.setAttribute("position", {x:-0.113,y:2.815,z:-1.8});
    box26.setAttribute("depth", "1.5");
    box26.setAttribute("width", "0.1");
    box26.setAttribute("height", "0.2");
    box26.setAttribute("rotation", "-90 0 0");

    let box27 = document.createElement("a-box");
    box27.setAttribute("color", "silver");
    box27.setAttribute("position", {x:3.987,y:2.815,z:-0.7});
    box27.setAttribute("depth", "1.8");
    box27.setAttribute("width", "0.05");
    box27.setAttribute("height", "2.2");
    box27.setAttribute("rotation", "-90 0 0");
    box27.setAttribute("opacity", "0.5");

    let box28 = document.createElement("a-box");
    box28.setAttribute("color", "silver");
    box28.setAttribute("position", {x:3.987,y:2.1,z:0.625});
    box28.setAttribute("depth", "2.2");
    box28.setAttribute("width", "0.05");
    box28.setAttribute("height", "0.45");
    box28.setAttribute("rotation", "-90 0 0");
    box28.setAttribute("opacity", "0.5");

    let box29 = document.createElement("a-box");
    box29.setAttribute("color", "silver");
    box29.setAttribute("position", {x:3.987,y:2,z:1});
    box29.setAttribute("depth", "1");
    box29.setAttribute("width", "0.05");
    box29.setAttribute("height", "0.35");
    box29.setAttribute("rotation", "-90 0 0");
    box29.setAttribute("opacity", "1");

    let box30 = document.createElement("a-box");
    box30.setAttribute("color", "silver");
    box30.setAttribute("position", {x:-0.113,y:2.815,z:-0.7});
    box30.setAttribute("depth", "1.8");
    box30.setAttribute("width", "0.05");
    box30.setAttribute("height", "2.2");
    box30.setAttribute("rotation", "-90 0 0");
    box30.setAttribute("opacity", "0.5");

    let box31 = document.createElement("a-box");
    box31.setAttribute("color", "silver");
    box31.setAttribute("position", {x:-0.113,y:2.1,z:0.625});
    box31.setAttribute("depth", "2.2");
    box31.setAttribute("width", "0.05");
    box31.setAttribute("height", "0.45");
    box31.setAttribute("rotation", "-90 0 0");
    box31.setAttribute("opacity", "0.5");

    let box32 = document.createElement("a-box");
    box32.setAttribute("color", "silver");
    box32.setAttribute("position", {x:-0.113,y:2,z:1});
    box32.setAttribute("depth", "1");
    box32.setAttribute("width", "0.05");
    box32.setAttribute("height", "0.35");
    box32.setAttribute("rotation", "-90 0 0");
    box32.setAttribute("opacity", "1");

    let box33 = document.createElement("a-box");
    box33.setAttribute("color", "silver");
    box33.setAttribute("position", {x:-0.113,y:2,z:-2.9});
    box33.setAttribute("depth", "1.2");
    box33.setAttribute("width", "0.05");
    box33.setAttribute("height", "2.3");
    box33.setAttribute("rotation", "-90 0 0");
    box33.setAttribute("opacity", "0.5");

    let box34 = document.createElement("a-box");
    box34.setAttribute("color", "silver");
    box34.setAttribute("position", {x:3.987,y:2,z:-2.9});
    box34.setAttribute("depth", "1.2");
    box34.setAttribute("width", "0.05");
    box34.setAttribute("height", "2.3");
    box34.setAttribute("rotation", "-90 0 0");
    box34.setAttribute("opacity", "0.5");

    //Break

    let cylinder25 = document.createElement("a-cylinder");
    cylinder25.setAttribute("position",{x:0,y:1,z:1.4});
    cylinder25.setAttribute("rotation","-90 0 0");
    cylinder25.setAttribute("height","0.3");
    cylinder25.setAttribute("radius","0.1");
    cylinder25.setAttribute("color","black");

    let cylinder26 = document.createElement("a-cylinder");
    cylinder26.setAttribute("position",{x:3.874,y:1,z:1.4});
    cylinder26.setAttribute("rotation","-90 0 0");
    cylinder26.setAttribute("height","0.3");
    cylinder26.setAttribute("radius","0.1");
    cylinder26.setAttribute("color","black");

    let cylinder27 = document.createElement("a-cylinder");
    cylinder27.setAttribute("position",{x:0.2,y:1.4,z:-6.75});
    cylinder27.setAttribute("rotation","-90 0 0");
    cylinder27.setAttribute("height","0.1");
    cylinder27.setAttribute("radius","0.25");
    cylinder27.setAttribute("color","yellow");

    let cylinder28 = document.createElement("a-cylinder");
    cylinder28.setAttribute("position",{x:3.674,y:1.4,z:-6.75});
    cylinder28.setAttribute("rotation","-90 0 0");
    cylinder28.setAttribute("height","0.1");
    cylinder28.setAttribute("radius","0.25");
    cylinder28.setAttribute("color","yellow");

    let torus1 = document.createElement("a-torus");
    torus1.setAttribute("position",{x:0,y:0.5,z:0});
    torus1.setAttribute("rotation","0 90 0");
    torus1.setAttribute("radius","0.65");
    torus1.setAttribute("color","silver");
    torus1.setAttribute("arc", "180");

    let torus2 = document.createElement("a-torus");
    torus2.setAttribute("position",{x:3.875,y:0.5,z:0});
    torus2.setAttribute("rotation","0 90 0");
    torus2.setAttribute("radius","0.65");
    torus2.setAttribute("color","silver");
    torus2.setAttribute("arc", "180");

    let torus3 = document.createElement("a-torus");
    torus3.setAttribute("position",{x:0,y:0.5,z:-5});
    torus3.setAttribute("rotation","0 90 0");
    torus3.setAttribute("radius","0.65");
    torus3.setAttribute("color","silver");
    torus3.setAttribute("arc", "180");

    let torus4 = document.createElement("a-torus");
    torus4.setAttribute("position",{x:3.875,y:0.5,z:-5});
    torus4.setAttribute("rotation","0 90 0");
    torus4.setAttribute("radius","0.65");
    torus4.setAttribute("color","silver");
    torus4.setAttribute("arc", "180");

    //Break

    let box35 = document.createElement("a-box");
    box35.setAttribute("color", "rgb(140, 0, 0)");
    box35.setAttribute("position", {x:1.9375,y:1.6,z:-3});
    box35.setAttribute("depth", "0.4");
    box35.setAttribute("width", "4.25");
    box35.setAttribute("height", "0.15");
    box35.addEventListener("mouseenter",function(){
      inCar = true;
    });

    this.obj.append(cylinder1);
    this.obj.append(cylinder2);
    this.obj.append(cylinder3);
    this.obj.append(cylinder4);
    this.obj.append(cylinder5);
    this.obj.append(cylinder6);
    this.obj.append(cylinder7);
    this.obj.append(cylinder8);
    this.obj.append(this.cylinder9);
    this.obj.append(this.cylinder10);
    this.obj.append(this.cylinder11);
    this.obj.append(this.cylinder12);
    this.obj.append(this.cylinder13);
    this.obj.append(this.cylinder14);
    this.obj.append(this.cylinder15);
    this.obj.append(this.cylinder16);
    this.obj.append(this.cylinder17);
    this.obj.append(this.cylinder18);
    this.obj.append(this.cylinder19);
    this.obj.append(this.cylinder20);
    this.obj.append(this.cylinder21);
    this.obj.append(this.cylinder22);
    this.obj.append(this.cylinder23);
    this.obj.append(this.cylinder24);
    this.obj.append(box1);
    this.obj.append(box2);
    this.obj.append(box3);
    this.obj.append(box4);
    this.obj.append(box5);
    this.obj.append(box5);
    this.obj.append(box6);
    this.obj.append(box7);
    this.obj.append(box8);
    this.obj.append(box9);
    this.obj.append(box10);
    this.obj.append(box11);
    this.obj.append(box12);
    this.obj.append(box13);
    this.obj.append(box14);
    this.obj.append(box15);
    this.obj.append(box16);
    this.obj.append(box17);
    this.obj.append(box18);
    this.obj.append(box19);
    this.obj.append(box20);
    this.obj.append(box21);
    this.obj.append(box22);
    this.obj.append(box23);
    this.obj.append(box24);
    this.obj.append(box25);
    this.obj.append(box26);
    this.obj.append(box27);
    this.obj.append(box28);
    this.obj.append(box29);
    this.obj.append(box30);
    this.obj.append(box31);
    this.obj.append(box32);
    this.obj.append(box33);
    this.obj.append(box34);
    this.obj.append(cylinder25);
    this.obj.append(cylinder26);
    this.obj.append(cylinder27);
    this.obj.append(cylinder28);
    this.obj.append(torus1);
    this.obj.append(torus2);
    this.obj.append(torus3);
    this.obj.append(torus4);
    this.obj.append(box35);
    scene.append(this.obj);
  } move(){
    if(inCar && carLock){
      this.z += this.dz;

      if(this.dz < 0.5){
        this.dz -= 0.0002;
        this.dr -= 0.002;
      }

      if(this.z < -93){
        carLock = false;
      }

      this.r += this.dr;

      this.cylinder9.setAttribute("rotation",{x:90 + this.r, y:0, z:0});
      this.cylinder10.setAttribute("rotation",{x:0 + this.r, y:0, z:0});
      this.cylinder11.setAttribute("rotation",{x:90 + this.r, y:0, z:0});
      this.cylinder12.setAttribute("rotation",{x:0 + this.r, y:0, z:0});
      this.cylinder13.setAttribute("rotation",{x:90 + this.r, y:0, z:0});
      this.cylinder14.setAttribute("rotation",{x:0 + this.r, y:0, z:0});
      this.cylinder15.setAttribute("rotation",{x:90 + this.r, y:0, z:0});
      this.cylinder16.setAttribute("rotation",{x:0 + this.r, y:0, z:0});
      this.cylinder17.setAttribute("rotation",{x:90 + this.r, y:0, z:0});
      this.cylinder18.setAttribute("rotation",{x:0 + this.r, y:0, z:0});
      this.cylinder19.setAttribute("rotation",{x:90 + this.r, y:0, z:0});
      this.cylinder20.setAttribute("rotation",{x:0 + this.r, y:0, z:0});
      this.cylinder21.setAttribute("rotation",{x:90 + this.r, y:0, z:0});
      this.cylinder22.setAttribute("rotation",{x:0 + this.r, y:0, z:0});
      this.cylinder23.setAttribute("rotation",{x:90 + this.r, y:0, z:0});
      this.cylinder24.setAttribute("rotation",{x:0 + this.r, y:0, z:0});

      this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    }
  }
}