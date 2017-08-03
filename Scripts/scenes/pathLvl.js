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
    var pathLevel = (function (_super) {
        __extends(pathLevel, _super);
        //creates an instance on pathLevel
        function pathLevel() {
            return _super.call(this) || this;
        }
        pathLevel.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        };
        pathLevel.prototype.Start = function () {
            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("mainTheme");
                this._sound.loop = -1;
            }
            this._galaxy = new objects.galaxyPath("galaxy");
            this.addChild(this._galaxy);
            //adds background
            this._backgr = new objects.Background("galaxy");
            this.addChild(this._backgr);
            this._bullet = new objects.NewBullet("playerBullet");
            this.addChild(this._bullet);
            this._player = new objects.NewPlayer("player");
            this.addChild(this._player);
            this._enemyBullet = new objects.EnemyBullet("enemyBullet");
            this.addChild(this._enemyBullet);
            this._enemyShip = new objects.EnemyShip("enemyShip");
            this.addChild(this._enemyShip);
            this._asteroid = new Array();
            for (var count = 0; count < 2; count++) {
                this._asteroid.push(new objects.NewAsteroid("asteroid"));
                this.addChild(this._asteroid[count]);
            }
            this._collision = new managers.Collision();
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Dock51", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Dock51", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);
            console.log("PATHLEVEL");
            core.stage.addChild(this);
        };
        pathLevel.prototype.Update = function () {
            var _this = this;
            this._galaxy.giveData(this._player.rotation);
            this._galaxy.update();
            this._player.update();
            this._bullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._bullet.update();
            this._enemyShip.giveData(this._player.x, this._player.y);
            this._enemyShip.update();
            this._enemyBullet.giveData(this._player.x, this._player.y, this._enemyShip.x, this._enemyShip.y, this._enemyShip.inRange);
            this._enemyBullet.update();
            this._collision.update();
            this._collision.checkPlayer(this._player, this._enemyShip);
            this._collision.checkPlayer(this._player, this._enemyBullet);
            //asteroids update
            this._asteroid.forEach(function (asteroid) {
                asteroid.giveData(_this._player.x, _this._player.y, _this._player.rotation);
                //this._collision.check(this._player, asteroid);
                asteroid.update();
            });
            this._updateScoreBoard();
            if (core.lives < 1) {
                if (core.SCheck == true) {
                    this._sound.stop();
                }
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 100;
                core.score = 0;
            }
        };
        return pathLevel;
    }(objects.Scene));
    scenes.pathLevel = pathLevel;
})(scenes || (scenes = {}));
//# sourceMappingURL=pathLvl.js.map