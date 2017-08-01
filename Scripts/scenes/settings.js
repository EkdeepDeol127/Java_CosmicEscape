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
            //add background
            this._backgr = new objects.Background("mainPage");
            this.addChild(this._backgr);
            //add Main Menu button
            this._mainMenu = new objects.Button("backButton", 380, 200, true);
            this.addChild(this._mainMenu);
            //mainMenu button event listener
            this._mainMenu.on("click", this._mainMenuClick, this);
            this._sound = new objects.Button("Sound", 380, 250, true);
            this.addChild(this._sound);
            this._mainMenu.on("click", this.soundCheck);
            //add this scene to GLOBAL scene container
            core.stage.addChild(this);
        };
        Settings.prototype._mainMenuClick = function (event) {
            //switch scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        Settings.prototype.soundCheck = function (check) {
            if (this.SCheck == false) {
                this.SCheck = true;
            }
            else {
                this.SCheck = false;
            }
        };
        return Settings;
    }(objects.Scene));
    scenes.Settings = Settings;
})(scenes || (scenes = {}));
//# sourceMappingURL=settings.js.map