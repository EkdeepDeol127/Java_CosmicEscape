/// <reference path="_reference.ts"/>

namespace core {
export let assets: createjs.LoadQueue;
//declare textureatlas && page img
export let textureAtlas: createjs.SpriteSheet;


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
let tutorial: scenes.Tutorial;
    
    //asset manifest
   let assetData: objects.Asset[] = [
{ id: "galaxy", src: "../../Assets/images/galaxy.png"}, 
{ id: "tutorial", src: "../../Assets/images/tutPage.png"},       
{ id: "page", src: "../../Assets/images/spritesheet1.png"},
{ id: "mainPage", src: "../../Assets/images/mainMenu.png"},
//{ id: "enemy", src: "../../Assets/images/enemy.png"},
{ id: "gameOver", src: "../../Assets/images/gameOver.png"},
//{ id: "menuButton", src: "../../Assets/images/menuButton.png"},
{ id: "menuTheme", src: "../../Assets/audio/mainTheme.ogg"},
{ id: "hit", src: "../../Assets/audio/explode.ogg"}





    ];

 function preload():void{
assets = new createjs.LoadQueue();
 assets.installPlugin(createjs.Sound);
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
   assets.getResult("page")
],

"frames": [
   [1, 1, 250, 34, 0, 0, -90],
    [1, 37, 250, 34, 0, 0, -90],
    [1, 73, 250, 34, 0, 0, -90],
    [1, 109, 250, 34, 0, 0, -90],
    [1, 145, 250, 34, 0, 0, -90],
    [1, 181, 115, 62, 0, 0, -22],
    [118, 181, 96, 100, 0, -4, 0],
    [216, 181, 13, 22, 0, -11, -4],
    [1, 245, 50, 63, 0, 0, 0]
],

"animations": {
    
    "asteroid":  [8],
    "player": [5],
    "againButton": [0],
    "backButton": [1],
    "playButton": [3],
    "tutButton": [4],
    "enemy":[3],
    "BUllet": [7] 
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

                // Show the TUTORIAL Scene
            case config.Scene.TUTORIAL:
                stage.removeAllChildren();
                tutorial = new scenes.Tutorial();
                currentScene = tutorial;
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
    
