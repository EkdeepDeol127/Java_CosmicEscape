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
var objects;
(function (objects) {
    var Asteroid = (function (_super) {
        __extends(Asteroid, _super);
        function Asteroid(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.check = false;
            _this.dead = false;
            _this.health = 20;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.Start();
            return _this;
        }
        Asteroid.prototype._reset = function () {
            this.x = 200; //(Math.random() * 640); //use this to tell where to spawn 
            this.y = 200;
        };
        Asteroid.prototype.Start = function () {
            this._reset();
        };
        Asteroid.prototype.update = function () {
            this.asteroidDespawn();
            this.asteroidMove();
        };
        Asteroid.prototype.asteroidDespawn = function () {
            if (this.x >= 740 || this.x <= -100 || this.y >= 580 || this.y <= -200 || this.dead == true) {
                this.check = false;
                this.dead = false;
                this._reset();
            }
        };
        Asteroid.prototype.checkPlayerLoc = function () {
            this.HoldplayerX = this.playerX;
            this.HoldplayerY = this.playerY;
        };
        Asteroid.prototype.asteroidMove = function () {
            if (this.check == false) {
                this.checkPlayerLoc();
                this.check = true;
            }
            else {
                this.x -= this.HoldplayerX * 0.05;
                this.y -= this.HoldplayerY * 0.05;
            }
        };
        Asteroid.prototype.Damage = function (dam) {
            if (this.health > 0) {
                this.health - dam;
            }
            else {
                this.dead = true;
            }
        };
        Asteroid.prototype.col = function () {
        };
        Asteroid.prototype.giveData = function (PX, PY) {
            this.playerX = PX;
            this.playerY = PY;
        };
        return Asteroid;
    }(objects.GameObject));
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map