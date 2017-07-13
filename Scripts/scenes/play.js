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
            _this.SX = _this._player.x;
            _this.SY = _this._player.y;
            return _this;
        }
        Play.prototype._updateScoreBoard = function () {
            //  this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        };
        Play.prototype.Start = function () {
            //enemy object
            this._enemy = new objects.EnemyShip("star1");
            this.addChild(this._enemy);
            this._player = new objects.Player("playerA");
            this.addChild(this._player);
            this._bullet = new objects.Bullet("bullet");
            this.addChild(this._bullet);
            //asteroid array
            this._asteroid = new Array();
            for (var count = 0; count < 3; count++) {
                this._asteroid.push(new objects.Asteroid("asteroidA"));
                this.addChild(this._asteroid[count]);
            }
            this._collision = new managers.Collision();
            //score label
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Dock51", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);
            //checking purposes
            this._button = new objects.Button("playButton", 250, 250, true);
            this.addChild(this._button);
            //listener
            this._button.on("click", this._buttonClick, this);
            //
            core.stage.addChild(this);
        };
        //checking purposes
        Play.prototype._buttonClick = function (event) {
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._bullet.update();
            this._enemy.update();
            this._player.update();
            this._collision.check(this._bullet, this._enemy);
            //asteroid update
            this._asteroid.forEach(function (asteroid) {
                asteroid.update();
                _this._collision.check(_this._bullet, asteroid);
            });
            this._updateScoreBoard();
            if (core.score > 600) {
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
/*  public Update():void {
    
    this._player.giveData(core.stage.mouseX, core.stage.mouseY);
    this._player.update();
    this._bullet.giveData(this.SX, this.SY, this._player.x, this._player.y);
    this._bullet.update();
    this._asteroid.giveData(this._player.x, this._player.y);
    this._asteroid.update();
    this._enemyShip.giveData(this._player.x, this._player.y);
    this._enemyShip.update();
    this._enemyBullet.giveData(this._player.x, this._player.y, this._enemyShip.x, this._enemyShip.y, this._enemyShip.inRange);
    this._enemyBullet.update();

    
    /*   if (core.lives < 1) {
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
} */ 
//# sourceMappingURL=play.js.map