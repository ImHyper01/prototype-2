import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Dino } from './dino'
import geldImage from "./images/geld.png"
import stoneImage from "./images/stone.png"
import dinoImage from "./images/dino.png"
import { Sprite } from 'pixi.js'
import { Enemy } from './enemy'
import { MoneyBag } from './money'
import { Enemy2 } from './enemy2'
import { gameover } from './gameover'
import gameImage from "./images/gameover.png"


export class Game {
    // eigenschappen
    loader: PIXI.Loader
    pixi: PIXI.Application
    dino: Dino
    water: PIXI.Sprite
    enemy: Enemy
    enemy2: Enemy2
    money: MoneyBag
    gameover: gameover
    

    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)


        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
        .add('bubbleTexture', bubbleImage)
        .add('waterTexture', waterImage)
        .add('geldImage', geldImage)
        .add('stoneImage', stoneImage)
        .add('dinoImage', dinoImage)
        .add('gameImage', gameImage)
        this.loader.load(()=>this.loadCompleted())
    }

    // functies
    loadCompleted() {

        this.gameover = new gameover(this.loader.resources["gameImage"].texture!)
       

        this.dino = new Dino(this.loader.resources["dinoImage"].texture!, this.pixi)
        this.pixi.stage.addChild(this.dino)

        this.enemy = new Enemy(this.loader.resources["stoneImage"].texture!, this.pixi)
        this.pixi.stage.addChild(this.enemy)

        this.money = new MoneyBag(this.loader.resources["geldImage"].texture!)
        this.pixi.stage.addChild(this.money)
        
        this.enemy2 = new Enemy2(this.loader.resources["stoneImage"].texture!)
        this.pixi.stage.addChild(this.enemy2)

       
        

        this.pixi.ticker.add(() => this.update())
        .add(() => this.dino.update())

    }
    update() {
        for (let i = - 1; i >= 0; i--) {

        }

        //hierzo wordt gecheckt als de dino de enemy of moneybag geraakt wordt
        if(this.collision(this.dino, this.enemy)){

            this.enemy.destroy()
            console.log("player touches enemy")
            this.pixi.stage.addChild(this.gameover)

        }


        if(this.collision(this.dino, this.money)){

            console.log("player touches moneybag")
            
        }

        
        if(this.collision(this.dino, this.enemy2)){

            this.enemy2.destroy();
            console.log("player touches enemy")

        }

        
         this.money.x = 465
         this.money.y += 3

         this.enemy.x = 190
         this.enemy.y += 3

         this.enemy2.x = 715
         this.enemy2.y += 3
        

    }

collision(enemy: Enemy , dino: Dino) {
    const bounds1 = enemy.getBounds();
    const bounds2 = dino.getBounds();

    return bounds1.x < bounds2.x + bounds2.width
        && bounds1.x + bounds1.width > bounds2.x
        && bounds1.y < bounds2.y + bounds2.height
        && bounds1.y + bounds1.height > bounds2.y;
}
    
}
    

let game = new Game()