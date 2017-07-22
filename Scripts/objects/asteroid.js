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
            _this.speed = 5;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.playerX = 400;
            _this.playerY = 300;
            _this.start();
            return _this;
        }
        Asteroid.prototype._reset = function () {
            this.ran = Math.floor((Math.random() * 4) + 1);
            switch (this.ran) {
                case 1://top
                    this.x = (Math.random() * 780) + 20; // horizontal drift
                    this.y = -100;
                    break;
                case 2://right
                    this.y = (Math.random() * 580) + 20; // vertical speed
                    this.x = 900;
                    break;
                case 3://left
                    this.y = (Math.random() * 580) + 20; // vertical speed
                    this.x = -100;
                    break;
                case 4://bottom
                    this.x = (Math.random() * 780) + 20; // horizontal drift
                    this.y = 700;
                    break;
            }
            this.rotation = Math.atan2(this.playerY - this.y, this.playerX - this.x) * 180 / Math.PI;
        };
        Asteroid.prototype.asteroidMove = function () {
            this.radians = this.rotation * (Math.PI / 180);
            this.x += this.speed * Math.cos(this.radians);
            this.y += this.speed * Math.sin(this.radians);
        };
        Asteroid.prototype._checkBounds = function () {
            if (this.x >= 900 || this.x <= -100 || this.y >= 700 || this.y <= -100 || this.dead == true) {
                this._reset();
            }
        };
        Asteroid.prototype.start = function () {
            this._reset();
        };
        Asteroid.prototype.update = function () {
            this._checkBounds();
            this.asteroidMove();
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