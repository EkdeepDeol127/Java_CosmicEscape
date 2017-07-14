/// <reference path="_reference.ts"/>

namespace core {
export let assets: createjs.LoadQueue;
//declare textureatlas && page img
export let textureAtlas: createjs.SpriteSheet;
//export let pgImg: createjs.SpriteStage;

let canvas: HTMLElement = document.getElementById("canvas");
export let stage: createjs.Stage;

//score and lives variables
export let score: number = 0;
export let lives: number = 5;

//scene variables
let currentScene: objects.Scene;
export let scene:number;
let menu: scenes.Menu;
let over: scenes.Over;
let play: scenes.Play;
    
    //asset manifest
   let assetData: objects.Asset[] = [
{ id: "galaxy", src: "../../Assets/images/galaxy.png"},       
{ id: "sheet", src: "../../Assets/images/spritesheet1.png"},
{ id: "mainPage", src: "../../Assets/images/mainMenu.png"},
{ id: "gameOver", src: "../../Assets/images/gameOver.png"},

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
   assets.getResult("sheet")
],

"frames": [
    [1, 1, 145, 150, 0, 70, 75],
    [1, 153, 80, 99, 0, 40, 50],
    [83, 153, 78, 99, 0, 38, 50],
    [148, 1, 142, 150, 0, 67, 75],
    [163, 153, 78, 99, 0, 38, 50],
    [243, 153, 150, 78, 0, 75, 44],
    [292, 1, 150, 78, 0, 75, 44],
    [292, 81, 250, 34, 0, 125, 35],
    [444, 1, 150, 78, 0, 75, 44],
    [292, 117, 250, 34, 0, 125, 35],
    [395, 153, 250, 34, 0, 125, 35],
    [395, 189, 250, 34, 0, 125, 35]
],

"animations": {
    
    "asteroid":  [1],
    "player": [5],
    "againButton": [7],
    "backButton": [9],
    "menuButton": [10],
    "playButton": [11],
    "enemy":[3] 
}};

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
           
           
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;

}
}
 
window.addEventListener("load",preload);
}
    
