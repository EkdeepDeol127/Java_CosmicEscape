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
    var NewAsteroid = (function (_super) {
        __extends(NewAsteroid, _super);
        function NewAsteroid(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.speed = 5;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.playerX = 400; //temp
            _this.playerY = 300; //temp
            _this.start();
            return _this;
        }
        NewAsteroid.prototype._reset = function () {
            if (Math.sin(this.playerRot) < 0) {
                this.ran = 1;
                console.log(1);
            }
            if (Math.sin(this.playerRot) > 0) {
                this.ran = 4;
                console.log(4);
            }
            if (Math.cos(this.playerRot) > 0) {
                this.ran = 2;
                console.log(2);
            }
            if (Math.cos(this.playerRot) < 0) {
                this.ran = 3;
                console.log(3);
            }
            switch (this.ran) {
                case 1://top
                    this.x = (Math.random() * 780) + 20;
                    this.y = -80;
                    break;
                case 2://right
                    this.y = (Math.random() * 580) + 20;
                    this.x = 880;
                    break;
                case 3://left
                    this.y = (Math.random() * 580) + 20;
                    this.x = -80;
                    break;
                case 4://bottom
                    this.x = (Math.random() * 780) + 20;
                    this.y = 680;
                    break;
            }
            this.rotation = Math.atan2(this.playerY - this.y, this.playerX - this.x) * 180 / Math.PI;
        };
        NewAsteroid.prototype.asteroidMove = function () {
            this.radians = this.rotation * (Math.PI / 180);
            this.x += this.speed * Math.cos(this.radians);
            this.y += this.speed * Math.sin(this.radians);
        };
        NewAsteroid.prototype._checkBounds = function () {
            if (this.x >= 900 || this.x <= -100 || this.y >= 700 || this.y <= -100 || this.dead == true) {
                this._reset();
            }
        };
        NewAsteroid.prototype.start = function () {
            this._reset();
        };
        NewAsteroid.prototype.update = function () {
            this._checkBounds();
            this.asteroidMove();
        };
        NewAsteroid.prototype.giveData = function (PX, PY, rot) {
            this.playerX = PX;
            this.playerY = PY;
            this.playerRot = rot;
        };
        NewAsteroid.prototype.col = function () {
        };
        return NewAsteroid;
    }(objects.GameObject));
    objects.NewAsteroid = NewAsteroid;
})(objects || (objects = {}));
//# sourceMappingURL=newAsteroids.js.map