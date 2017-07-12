/// <reference path="_reference.ts"/>

namespace core {
export let assets: createjs.LoadQueue;
//declare textureatlas && page img
export let textureAtlas: createjs.SpriteSheet;
//export let pgImg: createjs.SpriteStage;

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
{ id: "sheet", src: "../../Assets/images/spritesheet1.png"},
{ id: "mainPage", src: "../../Assets/images/mainMenu.png"},
{ id: "gameOver", src: "../../Assets/images/gameOver.png"}
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

/* let pageImg = {
"img": [assets.getResult("mainPage") ],
"mag": [assets.getResult ("gameOver") ],      
}
*/
 let atlasData = {  
"images": [ assets.getResult("sheet") ],
"frames": [
    [1, 1, 370, 42, 0, -147, -259],
    [373, 1, 70, 127, 0, -70, -3],
    [1, 45, 367, 52, 0, -127, -162],
    [1, 99, 362, 50, 0, -129, -124],
    [1, 151, 70, 67, 0, 0, -73],
    [73, 151, 70, 67, 0, -70, -73],
    [365, 130, 70, 68, 0, 0, -3],
    [145, 200, 11, 14, 0, -10, -6],
    [158, 200, 9, 10, 0, -11, -40],
    [145, 151, 13, 22, 0, -11, -4],
    [145, 175, 19, 19, 0, -7, -3],
    [160, 151, 19, 19, 0, -39, -3],
    [166, 172, 19, 19, 0, -7, -35],
    [181, 151, 19, 19, 0, -39, -35]
],

"animations": {
    "mainButton": [0] ,
    "playButton": [2] ,
    "backButton": [3] ,
    "playerA": { "frames": [6/*,1,4,5 */], "speed": 0.5 },
    "star1": [7,8],
    "bullet": [9],
    "asteroidA": { "frames": [10/*,11,12,13*/],  "speed": 0.3 }
    
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
    
