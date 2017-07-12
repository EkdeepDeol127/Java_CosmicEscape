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
        { id: "sprites", src: "../../Assets/images/spritesheet1.png" }
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
            "images": ["spritesheet1.png"],
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
                "mainButton": { "frames": [0] },
                "playerb": { "frames": [1] },
                "playButton": { "frames": [2] },
                "backButton": { "frames": [3] },
                "playerc": { "frames": [4] },
                "playerd": { "frames": [5] },
                "playerA": { "frames": [6] },
                "star1": { "frames": [7] },
                "star2": { "frames": [8] },
                "bullet": { "frames": [9] },
                "asteroidA": { "frames": [10] },
                "asteroidb": { "frames": [11] },
                "asteroidc": { "frames": [12] },
                "asteroidd": { "frames": [13] }
            },
            "texturepacker": [
                "SmartUpdateHash: $TexturePacker:SmartUpdate:89f23e71238fb897420b7bec0f52b5c3:73faf267d0d6becefab35e615c159ccf:bdd4b1bd95a26fb1dd6c3c9dc46315cb$",
                "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
            ]
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