/// <reference path="_reference.ts"/>

namespace core {

export let assets: createjs.LoadQueue;
//declare textureAtlas
export let textureAtlas: createjs.SpriteSheet;
let canvas: HTMLElement = document.getElementById("canvas");
export let stage: createjs.Stage;
//scene variables
let currentScene: objects.Scene;
export let scene:number;
let menu: scenes.Menu;
   // let over: scenes.Over;
let play: scenes.Play;
    
    //asset manifest
   let assetData: objects.Asset[] = [
{ id: "player ", src: "../../Assets/images/player.png "},
{ id: "background ", src: " ../../Assets/images/background.png"},
{ id: "bullet ", src: " ../../Assets/images/laserRed.png"},
{ id: "atlas", src: "../../Assets/images/atlas.png"}

    ];

 function preload():void{
assets = new createjs.LoadQueue();
assets.on("complete",init,this);
assets.loadManifest(assetData);
 }

function init():void{
stage = new createjs.Stage(canvas);
stage.enableMouseOver(20);
createjs.Ticker.framerate = 60;
createjs.Ticker.on("tick", gameLoop);

 let atlasData = {

            "images": [
                assets.getResult("atlas")
            ],

            "frames": [
                [1, 1, 226, 178, 0, 0, 0],
                [229, 1, 200, 50, 0, 0, 0],
                [431, 1, 62, 62, 0, 0, 0],
                [229, 53, 200, 50, 0, 0, 0],
                [431, 65, 62, 51, 0, -3, -9],
                [229, 105, 200, 50, 0, 0, 0],
                [431, 118, 62, 51, 0, -3, -9],
                [229, 157, 200, 50, 0, 0, 0],
                [431, 171, 62, 51, 0, -3, -9]
            ],

            "animations": {
                "cloud": [0],
                "exitButton": [1],
                "island": [2],
                "nextButton": [3],
                "restartButton": [5],
                "startButton": [7],
                "plane": {
                    "frames":[4,6,8],
                    "speed": 0.5
                } 
            }

        };

textureAtlas = new createjs.SpriteSheet(atlasData);
scene = config.Scene.MENU;
changeScene();

}

function gameLoop(event: createjs.Event): void {
currentScene.Update();
stage.update();
}

export function changeScene():void{
//launch the scenes
switch (scene) {

    case config.Scene.MENU:
    stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
           
           /*
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
*/
}
}
 
window.addEventListener("load",preload);
}
    
