import * as ROT from "./lib/index.js"
// LEARN: optimize/tree-shaking imports

// LEARN: better pattern for this? Non-singleton?
export class Game  {
    private _display: ROT.Display;
    get display(): ROT.Display {return this._display}

    constructor(width=80,height=24) {
        this._display = new ROT.Display({width,height})
    }
}

let Bongo = {
    num: 10
}

// LEARN: check if this is still up-to-date
window.onload = function() {

    let game = new Game();

    document.body.appendChild(game.display.getContainer() as HTMLElement);
    
}

// NEXT:
/*
https://stackoverflow.com/questions/15335474/multiple-files-making-up-type-script-project

Or just:
screens.ts
import {Game} from "./game"

*/