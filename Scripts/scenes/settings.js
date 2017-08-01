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
    var Settings = (function (_super) {
        __extends(Settings, _super);
        //creates an instance of mainMenu
        function Settings() {
            return _super.call(this) || this;
        }
        Settings.prototype.Start = function () {
            if (core.SCheck == true) {
                this._music = createjs.Sound.play("menuTheme");
                this._music.loop = -1;
            }
            //add background
            this._backgr = new objects.Background("mainPage");
            this.addChild(this._backgr);
            //add Main Menu button
            this._mainMenu = new objects.Button("backButton", 380, 200, true);
            this.addChild(this._mainMenu);
            //mainMenu button event listener
            this._mainMenu.on("click", this._mainMenuClick, this);
            this._sound = new objects.Button("playButton", 380, 250, true);
            this.addChild(this._sound);
            this._sound.on("click", this.soundCheck, this);
            //add this scene to GLOBAL scene container
            core.stage.addChild(this);
        };
        Settings.prototype._mainMenuClick = function (event) {
            if (core.SCheck == true) {
                this._music.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        Settings.prototype.soundCheck = function (check) {
            if (core.SCheck == false) {
                console.log("Sound on");
                core.SCheck = true;
                this._music = createjs.Sound.play("menuTheme");
                this._music.loop = -1;
            }
            else {
                console.log("Sound off");
                core.SCheck = false;
                this._music.stop();
            }
        };
        return Settings;
    }(objects.Scene));
    scenes.Settings = Settings;
})(scenes || (scenes = {}));
//# sourceMappingURL=settings.js.map