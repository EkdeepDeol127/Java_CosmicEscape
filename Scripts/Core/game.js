/// <reference path="_reference.ts"/>
var core;
(function (core) {
    //export let pgImg: createjs.SpriteStage;
    var canvas = document.getElementById("canvas");
    //scene variables
    var currentScene;
    var menu;
    // let over: scenes.Over;
    var play;
    //asset manifest
    var assetData = [
        { id: "sheet", src: "../../Assets/images/spritesheet1.png" },
        { id: "mainPage", src: "../../Assets/images/mainMenu.png" },
        { id: "gameOver", src: "../../Assets/images/gameOver.png" }
    ];
    function preload() {
        core.assets = new createjs.LoadQueue();
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    function init() {
        core.stage = new createjs.Stage(canvas);
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        var atlasData = {
            "images": [core.assets.getResult("sheet")],
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
                "mainButton": [0],
                "playButton": [2],
                "backButton": [3],
                "playerA": { "frames": [6 /*,1,4,5 */], "speed": 0.5 },
                "star1": [7, 8],
                "bullet": [9],
                "asteroidA": { "frames": [10 /*,11,12,13*/], "speed": 0.3 }
            }
        };
        core.textureAtlas = new createjs.SpriteSheet(atlasData);
        core.scene = config.Scene.MENU;
        changeScene();
    }
    function gameLoop(event) {
        currentScene.Update();
        core.stage.update();
    }
    function changeScene() {
        //launch the scenes
        switch (core.scene) {
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map