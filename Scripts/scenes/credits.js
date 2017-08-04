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
    var Credits = (function (_super) {
        __extends(Credits, _super);
        //create an instance of credits
        function Credits() {
            return _super.call(this) || this;
        }
        Credits.prototype.Start = function () {
            if (core.SCheck == true) {
                this._theSound = createjs.Sound.play("menuTheme");
                this._theSound.loop = -1;
            }
            //add background 
            this._backgr = new objects.Background("mainPage");
            this.addChild(this._backgr);
            this._text1 = new objects.Label("Emanuela Sklarzyk......Producer", "25px", "monospace", "#FFFF00", 120, 400, false);
            this.addChild(this._text1);
            this._text2 = new objects.Label("Ekdeep Deol............Software Engineer", "25px", "monospace", "#FFFF00", 120, 450, false);
            this.addChild(this._text2);
            //add button
            this._backButt = new objects.Button("backButton", 360, 480, true);
            this.addChild(this._backButt);
            this._backButt.on("click", this._buttClick, this);
            core.stage.addChild(this);
        };
        Credits.prototype._buttClick = function (event) {
            //switch scene
            if (core.SCheck == true) {
                this._theSound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Credits;
    }(objects.Scene));
    scenes.Credits = Credits;
})(scenes || (scenes = {}));
//# sourceMappingURL=credits.js.map