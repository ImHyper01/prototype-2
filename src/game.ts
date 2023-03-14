import * as PIXI from 'pixi.js'
import bomImage from "./images/bom.png"
import planeImage from "./images/plane.png"
import cloudImage from "./images/wolken.jpg"
import { Bom } from "./bom"
import { Plane } from "./plane"

class game {
    pixi : PIXI.Application
    loader : PIXI.Loader
    plane : Plane
    bom : Bom

constructor(){
    this.pixi = new PIXI.Application({ width: 1500, height: 700 })
    const pixiCanvas = document.getElementById("pixi-canvas")
   
    if (pixiCanvas != null) {
        pixiCanvas.appendChild(this.pixi.view)
    }


    this.loader = new PIXI.Loader()
    this.loader.add('bomTexture', bomImage)
        .add('planeTexture', planeImage)
        .add('cloudTexture', cloudImage)
    this.loader.load(()=> this.loadCompleted())

}

loadCompleted(){
    let bg = new PIXI.TilingSprite(this.loader.resources["cloudTexture"].texture!, 1200, 700)
    this.pixi.stage.addChild(bg)
    bg.scale.set (1.4) 

    this.plane = new Plane (this.loader.resources["planeTexture"].texture!)
    this.pixi.stage.addChild(this.plane)

    this.pixi.ticker.add(() => this.update())
    
}

update(){
    this.plane.thrive()
}

}

let g = new game()