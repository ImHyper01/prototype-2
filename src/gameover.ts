import * as PIXI from 'pixi.js'

export class gameover extends PIXI.Sprite{


    constructor(texture: PIXI.Texture) {
        super(texture);


        this.scale.set(-5, 5)
        
    }
}