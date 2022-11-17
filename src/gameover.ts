import * as PIXI from 'pixi.js'

export class gameover extends PIXI.Sprite{


    constructor(texture: PIXI.Texture) {
        super(texture);
        this.x = 90

        this.scale.set(1, 1)
        

    }


}