import * as PIXI from 'pixi.js'

export class Enemy extends PIXI.Sprite{

    //eigenschappen
    constructor(texture: PIXI.Texture, pixi: PIXI.Application) {
        super(texture)
        this.x = 190
        this.y += 3


        this.scale.set(-2, 2)
        pixi.stage.addChild(this)
    
    }

    //functies
    

}