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
    var Play = (function (_super) {
        __extends(Play, _super);
        //creates an instance of Play
        function Play() {
            var _this = _super.call(this) || this;
            _this._portalSpawn = false;
            return _this;
        }
        Play.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
            this._TimeLabel.text = "Time: " + Math.round(core.Time);
        };
        Play.prototype.Start = function () {
            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("mainTheme");
                this._sound.loop = -1;
            }
            //galaxy
            this._galaxy = new objects.Galaxy("wormhole");
            this._galaxy.y = -500;
            this._galaxy.x = -100;
            this.addChild(this._galaxy);
            //enemy object
            this._enemyBullet = new objects.EnemyBullet("enemyBullet");
            this.addChild(this._enemyBullet);
            this._enemyShip = new objects.EnemyShip("enemyShip");
            this.addChild(this._enemyShip);
            //PLAYER
            this._bullet = new objects.Bullet("playerBullet");
            this.addChild(this._bullet);
            this._player = new objects.Player("player");
            this.addChild(this._player);
            //add portal
            this._portal = new objects.Portal("portal");
            //asteroid array
            this._asteroid = new Array();
            for (var count = 0; count < 4; count++) {
                this._asteroid.push(new objects.Asteroid("asteroid"));
                this._asteroid[count].name = ("asteroid" + count);
                this.addChild(this._asteroid[count]);
                console.log(this._asteroid[count]);
            }
            this._collision = new managers.Collision();
            //score label
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "monospace", "#F3B600", 260, 5, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "monospace", "#F3B600", 10, 5, false);
            this.addChild(this._livesLabel);
            this._TimeLabel = new objects.Label("Time: " + core.Time, "40px", "monospace", "#F3B600", 510, 5, false);
            this.addChild(this._TimeLabel);
            console.log("SurviveLEVEL");
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._galaxy.update();
            this._player.giveData(core.stage.mouseX, core.stage.mouseY);
            this._player.update();
            this._bullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._bullet.update();
            this._enemyShip.giveData(this._player.x, this._player.y);
            this._enemyShip.update();
            this._enemyBullet.giveData(this._player.x, this._player.y, this._enemyShip.x, this._enemyShip.y, this._enemyShip.inRange);
            this._enemyBullet.update();
            this._collision.update();
            if (this._portalSpawn == true) {
                this._portal.update();
            }
            //PLAYER COLLISIONS
            this._collision.checkPlayer(this._player, this._enemyShip);
            this._collision.checkPlayer(this._player, this._enemyBullet);
            this._collision.checkPlayer(this._player, this._portal);
            //BULLET COLLISIONS
            this._collision.checkEnemy(this._bullet, this._enemyShip);
            //asteroids update
            this._asteroid.forEach(function (asteroid) {
                asteroid.giveData(_this._player.x, _this._player.y);
                _this._collision.checkPlayer(_this._player, asteroid);
                _this._collision.checkEnemy(_this._bullet, asteroid);
                asteroid.update();
            });
            if (core.Time <= 0 && this._portalSpawn == false) {
                if (core.SCheck == true) {
                    this._sound.stop();
                }
                this.addChild(this._portal);
                this._portalSpawn = true;
            }
            else {
                if (this._portalSpawn == false) {
                    core.Time -= 0.1;
                }
            }
            if (core.AstHit0 == true) {
                this._asteroid[0]._reset();
            }
            if (core.AstHit1 == true) {
                this._asteroid[1]._reset();
            }
            if (core.AstHit2 == true) {
                this._asteroid[2]._reset();
            }
            if (core.AstHit3 == true) {
                this._asteroid[3]._reset();
            }
            this._updateScoreBoard();
            if (core.lives < 1) {
                if (core.SCheck == true) {
                    this._sound.stop();
                }
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 100;
                core.Time = 120;
                core.score = 0;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map