import * as PIXI from 'pixi.js'

export class Bom extends PIXI.Sprite {
    speed : number

    constructor(texture: PIXI.Texture) {
        super(texture)
        this.speed = 3
        this.x = window.innerWidth + 100 + (Math.random() * 3000)
        this.y = Math.random() * 1000
        this.anchor.set(0.4)
        this.scale.set(0.7)
    }

    thrive() {
        this.x -= this.speed

        if (this.x < -100) {
            this.x = window.innerWidth + 100
            this.y = Math.random() * window.innerHeight
        }

        
    }
}