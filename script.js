"use strict";

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector,
  this.height = height,
  this.width = width,
  this.bg = bg,
  this.fontSize = fontSize,
  this.toCreate = function() {
    if (selector !== "" && selector.trim()[0] === ".") {
      const div = document.createElement("div");
      div.classList.add(this.selector.slice(1, this.selector.length));
      div.innerText = `It's a <div> class = "${div.className}"` ;
      div.setAttribute("style", "");
      div.style.cssText = 
        `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize}`;
      document.body.append(div);
    } else if (selector !== "" && selector.trim()[0] === "#")  {
      const prgf = document.createElement("p");
      prgf.setAttribute("id", this.selector.slice(1, this.selector.length));
      prgf.innerText = `It's a <p> id = "${prgf.id}"` ;

      prgf.setAttribute("style","");
      prgf.style.cssText = 
        `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize}`;
      document.body.append(prgf);
    }
  }
};

const newDom1 = new DomElement(".red", "30px", "100%", "red", "15px");
const newDom2 = new DomElement("#yellow" , "40px", "100%", "yellow", " 20px");
const newDom3 = new DomElement(".green" , "50px", "100%", "green", " 25px");

newDom1.toCreate();
newDom2.toCreate();
newDom3.toCreate();