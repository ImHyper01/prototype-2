import * as PIXI from 'pixi.js'
import bomImage from "./images/bom.png"
import planeImage from "./images/plane.png"
import cloudImage from "./images/wolken.jpg"
import laserImage from "./images/laser.png"
import { Bom } from "./bom"
import { Plane } from "./plane"
import { Laser } from './laser'

class game {
    pixi : PIXI.Application
    loader : PIXI.Loader
    bom : Bom []=[]
    plane : Plane
    laser : Laser

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
        .add('laserTexture', laserImage)
    this.loader.load(()=> this.loadCompleted())

}

loadCompleted(){
    let bg = new PIXI.TilingSprite(this.loader.resources["cloudTexture"].texture!, 1200, 700)
    this.pixi.stage.addChild(bg)
    bg.scale.set (1.4) 

    for (let i=0; i<10; i++){
        let bigBomb = new Bom(this.loader.resources["bomTexture"].texture!)
        this.pixi.stage.addChild(bigBomb)
        this.bom.push(bigBomb)
    }

    this.plane = new Plane (this.loader.resources["planeTexture"].texture!)
    this.pixi.stage.addChild(this.plane)


    this.pixi.ticker.add(() => this.update())
}

update(){
    
    for (let bom of this.bom){
        bom.thrive()
    }

    this.plane.thrive()
}


}

let g = new game()