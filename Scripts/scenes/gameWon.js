var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var gameWon = (function (_super) {
        __extends(gameWon, _super);
        //create an instance of main menu
        function gameWon() {
            return _super.call(this) || this;
        }
        gameWon.prototype.Start = function () {
            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("menuTheme");
                this._sound.loop = -1;
            }
            //add background
            this._backgr = new objects.Background("uiBackgr");
            this.addChild(this._backgr);
            //add Main Menu button
            this._mainMenu = new objects.Button("menuButton", 370, 350, true);
            this.addChild(this._mainMenu);
            //mainMenu button event listener
            this._mainMenu.on("click", this._mainMenuClick, this);
            //add label
            this._label = new objects.Label("CONGRATS \n YOU'VE WON!!", "76px", "georgia", "#F3B500", 15, 160, false);
            this.addChild(this._label);
            //play again button
            this._playAgain = new objects.Button("againButton", 370, 450, true);
            this.addChild(this._playAgain);
            this._playAgain.on("click", this._playAgainClick, this);
            //add this scene to GLOBAL scene container
            core.stage.addChild(this);
        };
        gameWon.prototype._mainMenuClick = function (event) {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        gameWon.prototype._playAgainClick = function (event) {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return gameWon;
    }(objects.Scene));
    scenes.gameWon = gameWon;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameWon.js.map