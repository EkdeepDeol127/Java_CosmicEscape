/// <reference path="_reference.ts"/>
var core;
(function (core) {
    var canvas = document.getElementById("canvas");
    //score and lives variables
    core.score = 0;
    core.lives = 5;
    //scene variables
    var currentScene;
    var menu;
    var over;
    var play;
    //asset manifest
    var assetData = [
        { id: "galaxy", src: "../../Assets/images/galaxy.png" },
        { id: "tutorial", src: "../../Assets/images/tutPage.png" },
        { id: "page", src: "../../Assets/images/spritesheet1.png" },
        { id: "mainPage", src: "../../Assets/images/mainMenu.png" },
        //{ id: "enemy", src: "../../Assets/images/enemy.png"},
        { id: "gameOver", src: "../../Assets/images/gameOver.png" },
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
                core.assets.getResult("page")
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
                "asteroid": [8],
                "player": [5],
                "againButton": [0],
                "backButton": [1],
                "playButton": [3],
                "tutButton": [4],
                "enemy": [3],
                "BUllet": [7]
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
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map