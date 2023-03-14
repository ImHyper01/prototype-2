import * as PIXI from 'pixi.js'

export class Laser extends PIXI.Sprite {
    xspeed : number = 0
    yspeed : number = 0

    constructor(texture: PIXI.Texture){
    super(texture)
        this.xspeed = 0
        this.yspeed = 0
        this.x = 100
        this.y = 100
        this.scale.set(1)

    }

    shoot(){

    }

    
}