import * as ROT from "./lib/index.js"

let display = new ROT.Display({width:80, height:20});
let container = display.getContainer() as HTMLElement;

document.body.appendChild(container);

console.log("Hello, World!");