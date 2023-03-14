import * as PIXI from 'pixi.js'

export class Plane extends PIXI.Sprite {
xspeed : number = 0
yspeed : number = 0

constructor(texture: PIXI.Texture){
    super(texture)
    this.xspeed = 0
    this.yspeed = 0
    this.x = 100
    this.y = 100
    this.scale.set(1.7)
    

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    thrive() {
        this.x += this.xspeed
        this.y += this.yspeed
    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "W":
            case "ARROWUP":
                console.log("W")
                this.yspeed = -7
                break
            case "S":
            case "ARROWDOWN":
                console.log("S")
                this.yspeed = 7
                break
        }
    }

    onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }

}

