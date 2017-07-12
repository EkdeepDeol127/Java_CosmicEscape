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
            return _super.call(this) || this;
        }
        Play.prototype.Start = function () {
            this._player = new objects.Player("playerA");
            this.addChild(this._player);
            this._bullet = new objects.Bullet("bullet");
            this.addChild(this._bullet);
            this._asteroid = new objects.Asteroid("asteroidA");
            this.addChild(this._asteroid);
            this._enemyShip = new objects.EnemyShip("asteroidA");
            this.addChild(this._enemyShip);
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            this._player.giveData(core.stage.mouseX, core.stage.mouseY);
            this._player.update();
            this._bullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._bullet.update();
            this._asteroid.giveData(this._player.x, this._player.y);
            this._asteroid.update();
            this._enemyShip.giveData(this._player.x, this._player.y);
            this._enemyShip.update();
            /*   if (core.lives < 1) {
                        this._engineSound.stop();
                        core.scene = config.Scene.OVER;
                        core.changeScene();
                    }  */
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map