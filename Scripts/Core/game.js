/// <reference path="_reference.ts"/>
var core;
(function (core) {
    var canvas = document.getElementById("canvas");
    //scene variables
    var currentScene;
    var menu;
    // let over: scenes.Over;
    var play;
    //asset manifest
    var assetData = [
        { id: "player ", src: "../../Assets/images/player.png " },
        { id: "background ", src: " ../../Assets/images/background.png" },
        { id: "bullet ", src: " ../../Assets/images/laserRed.png" },
        { id: "atlas", src: "../../Assets/images/atlas.png" }
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
            "images": [
                core.assets.getResult("atlas")
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
                    "frames": [4, 6, 8],
                    "speed": 0.5
                }
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