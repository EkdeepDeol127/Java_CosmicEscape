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
    var Tutorial = (function (_super) {
        __extends(Tutorial, _super);
        //creates an instance on Tutorial
        function Tutorial() {
            return _super.call(this) || this;
        }
        Tutorial.prototype._scoreUpdate = function () {
            this._scoreLabel.text = "Score: " + core.score;
            this._livesLabel.text = "Lives: " + core.lives;
        };
        Tutorial.prototype.Start = function () {
            //sound
            this._sound = createjs.Sound.play("mainTheme");
            this._sound.loop = -1;
            //background
            this._backgr = new objects.Galaxy("tutorial");
            this.addChild(this._backgr);
            //player
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._playerBullet = new objects.Bullet("playerBullet");
            this.addChild(this._playerBullet);
            //asteroids
            this._asteroid = new Array();
            for (var count = 0; count < 1; count++) {
                this._asteroid.push(new objects.Asteroid("asteroid"));
                this.addChild(this._asteroid[count]);
            }
            this._collision = new managers.Collision();
            //labels
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "monospace", "#FFFF00", 260, 5, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "monospace", "#FFFF00", 20, 5, false);
            this.addChild(this._livesLabel);
            //instructions
            this._instrOne = new objects.Label("USE THE ARROW KEYS TO MOVE", "40px", "monospace", "#FFFF00", 100, 40, false);
            this.addChild(this._instrOne);
            //development buttons
            this._menuButton = new objects.Button("backButton", 370, 300, true);
            this.addChild(this._menuButton);
            //startbutton event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            this._playButton = new objects.Button("playButton", 370, 350, true);
            this.addChild(this._playButton);
            //startbutton event listener
            this._playButton.on("click", this._playButtonClick, this);
            core.stage.addChild(this);
        };
        Tutorial.prototype.Update = function () {
            var _this = this;
            this._backgr.update();
            this._player.giveData(core.stage.mouseX, core.stage.mouseY);
            this._player.update();
            this._playerBullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._playerBullet.update();
            //asteroid update
            this._asteroid.forEach(function (asteroid) {
                asteroid.giveData(_this._player.x, _this._player.y);
                _this._collision.checkP(_this._player, asteroid);
                _this._collision.checkB(_this._playerBullet, asteroid);
                if (_this._collision.checkB)
                    asteroid.update();
            });
            this._scoreUpdate();
            if (core.lives < 1) {
                this._sound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 5;
            }
        };
        Tutorial.prototype._menuButtonClick = function (event) {
            //switch scene
            this._sound.stop();
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        Tutorial.prototype._playButtonClick = function (event) {
            this._sound.stop();
            core.scene = config.Scene.PATH;
            core.changeScene();
        };
        Tutorial.prototype.func = function () {
            if (this._instrOne.isVisible()) {
                this._instrOne.visible = false;
            }
            else
                this._instrOne.visible = true;
        };
        return Tutorial;
    }(objects.Scene));
    scenes.Tutorial = Tutorial;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map