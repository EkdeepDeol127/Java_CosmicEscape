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
    var Over = (function (_super) {
        __extends(Over, _super);
        //creates an instance of mainMenu
        function Over() {
            return _super.call(this) || this;
        }
        Over.prototype.Start = function () {
            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("gameOver");
                this._sound.loop = -1;
            }
            //add background
            this._backgr = new objects.Background("over");
            this.addChild(this._backgr);
            //add Main Menu button
            this._mainMenu = new objects.Button("backButton", 380, 200, true);
            this.addChild(this._mainMenu);
            //mainMenu button event listener
            this._mainMenu.on("click", this._mainMenuClick, this);
            //play again button
            this._playAgain = new objects.Button("againButton", 380, 300, true);
            this.addChild(this._playAgain);
            this._playAgain.on("click", this._playAgainClick, this);
            //add this scene to GLOBAL scene container
            core.stage.addChild(this);
        };
        Over.prototype._mainMenuClick = function (event) {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        Over.prototype._playAgainClick = function (event) {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map