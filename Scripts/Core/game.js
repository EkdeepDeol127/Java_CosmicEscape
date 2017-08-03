/// <reference path="_reference.ts"/>
var core;
(function (core) {
    var canvas = document.getElementById("canvas");
    //score and lives variables
    core.score = 0;
    core.lives = 1000;
    core.Time = 120;
    core.thisName = false;
    core.ifSpawn = false;
    core.ifSpawnPath = false;
    //scene variables
    var currentScene;
    //scenes
    var menu;
    var over;
    var play;
    var tutorial;
    var settings;
    var credits;
    var path;
    core.SCheck = true;
    core.SECheck = true;
    core.EnemyHit = false;
    //asset manifest
    var assetData = [
        //images
        { id: "galaxy", src: "../../Assets/images/lvlBackgr.png" },
        { id: "tutorial", src: "../../Assets/images/tutBackgr.png" },
        { id: "page", src: "../../Assets/images/spritesheet1.png" },
        { id: "mainPage", src: "../../Assets/images/mainMenu.png" },
        { id: "over", src: "../../Assets/images/gameOver.png" },
        { id: "gameWon", src: "../../Assets/images/gameWon.png" },
        //sounds
        { id: "menuTheme", src: "../../Assets/audio/mainMenu.ogg" },
        { id: "bossTheme", src: "../../Assets/audio/bossTheme.ogg" },
        { id: "explode", src: "../../Assets/audio/explode.ogg" },
        { id: "gameOver", src: "../../Assets/audio/gameOver.ogg" },
        { id: "gameWon", src: "../../Assets/audio/gameWon.ogg" },
        { id: "gamOver", src: "../../Assets/audio/gamOver.ogg" },
        { id: "mainTheme", src: "../../Assets/audio/mainTheme.ogg" },
        { id: "objDest", src: "../../Assets/audio/objDestroyed.ogg" },
        { id: "objHit", src: "../../Assets/audio/objectHit.ogg" },
        { id: "weaponFire", src: "../../Assets/audio/weaponFire.ogg" }
    ];
    function preload() {
        core.assets = new createjs.LoadQueue();
        core.assets.installPlugin(createjs.Sound);
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
                //buttons
                [12, 11, 245, 31, 0, 0, -90],
                [271, 11, 246, 32, 0, 0, -90],
                [527, 11, 247, 31, 0, 0, -90],
                [785, 11, 246, 32, 0, 0, -90],
                [11, 50, 247, 32, 0, 0, -90],
                [271, 50, 245, 32, 0, 0, -90],
                [528, 50, 245, 32, 0, 0, -90],
                //asteroid
                [637, 206, 45, 45, 0, 0, 0],
                [760, 206, 45, 45, 0, 0, 0],
                [891, 206, 45, 45, 0, 0, 0],
                //asteroid destroyed
                [65, 88, 17, 17, 0, 74, 97],
                [84, 89, 19, 19, 0, 94, 94],
                //bullets
                [109, 88, 20, 12, 0, 0, 0],
                [131, 88, 20, 12, 0, 0, 0],
                [151, 88, 19, 11, 0, 0, 0],
                //enemyship
                [15, 111, 143, 60, 0, 0, 0],
                //enemyship destroyed
                [160, 110, 142, 59, 0, 203, 140],
                [304, 110, 135, 59, 0, 365, 140],
                [450, 110, 111, 59, 0, 500, 140],
                //boss
                [14, 179, 150, 118, 0, 85, 240],
                //boss destroyed
                [172, 179, 150, 118, 0, 240, 235],
                [327, 179, 133, 119, 0, 390, 235],
                //player
                [12, 332, 149, 72, 0, 0, 0],
                [170, 332, 149, 72, 0, 0, 0],
                [327, 331, 149, 72, 0, 0, 0],
                //playerHit
                [490, 332, 148, 70, 0, 0, 0],
                //player destroyed
                [667, 334, 148, 70, 0, 740, 370],
                [814, 332, 149, 70, 0, 885, 365],
                [964, 333, 147, 70, 0, 1035, 370],
                [1114, 334, 149, 71, 0, 1185, 370]
            ],
            "animations": {
                "tutorialButton": { "frames": [0] },
                "playButton": { "frames": [1] },
                "menuButton": { "frames": [2] },
                "creditsButton": { "frames": [3] },
                "setButton": { "frames": [4] },
                "backButton": { "frames": [5] },
                "againButton": { "frames": [6] },
                "asteroid": { "frames": [7, 8, 9] },
                "astDest": { "frames": [10, 11] },
                "bossBullet": { "frames": [12] },
                "playerBullet": { "frames": [13] },
                "enemyBullet": { "frames": [14] },
                "enemyShip": { "frames": [15] },
                "enemDest": { "frames": [16, 17, 18] },
                "bossShip": { "frames": [19] },
                "bossDest": { "frames": [20, 21] },
                "player": { "frames": [22, 23, 24] },
                "playerHit": { "frames": [24, 25, 24, 25] },
                "playerDest": { "frames": [26, 27, 28, 29] } //add speed
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
            // Show the TUTORIAL Scene
            case config.Scene.TUTORIAL:
                core.stage.removeAllChildren();
                tutorial = new scenes.Tutorial();
                currentScene = tutorial;
                break;
            //PATH level
            case config.Scene.PATH:
                core.stage.removeAllChildren();
                path = new scenes.pathLevel();
                currentScene = path;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
            case config.Scene.CREDITS:
                core.stage.removeAllChildren();
                credits = new scenes.Credits();
                currentScene = credits;
                break;
            case config.Scene.SETTINGS:
                core.stage.removeAllChildren();
                settings = new scenes.Settings();
                currentScene = settings;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map