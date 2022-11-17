import * as PIXI from 'pixi.js'

export class gameover extends PIXI.Sprite{


    constructor(texture: PIXI.Texture, pixi: PIXI.Application) {
        super(texture);
        this.scale.set(-5, 5)
    }
}