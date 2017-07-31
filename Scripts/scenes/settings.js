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
        //create an instance of credits
        function Settings() {
            return _super.call(this) || this;
        }
        Settings.prototype.Start = function () {
            //add background 
            this._backgr = new objects.Background("galaxy");
            this.addChild(this._backgr);
            //add button
            this._backButt = new objects.Button("backButton", 370, 200, true);
            this.addChild(this._backButt);
            this._backButt.on("click", this._buttClick, this);
            core.stage.addChild(this);
        };
        Settings.prototype._buttClick = function (event) {
            //switch scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Settings;
    }(objects.Scene));
    scenes.Settings = Settings;
})(scenes || (scenes = {}));
//# sourceMappingURL=settings.js.map