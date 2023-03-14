import * as PIXI from 'pixi.js'
import { game } from "./game"

export class Laser extends PIXI.Sprite {
     game:game
    
    constructor(texture: PIXI.Texture, game: game , x: number, y: number) {
        super(texture)
        this.game = game
        this.pivot.x = 30
        this.pivot.y = 30
        this.x = x + 20
        this.y = y + 20
    }

    public update() {
        this.x += 3
        if (this.x > 900) this.game.removeBullet(this)
    }

               
}

        