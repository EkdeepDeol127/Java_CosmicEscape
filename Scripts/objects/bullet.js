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
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.width = 33;
            _this.height = 9;
            _this.speed = 3;
            _this.shoot = false;
            _this.delay = true; //so the first click to start game does not trigger bullet
            window.addEventListener('click', _this.bulletFire.bind(_this), false);
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.start();
            return _this;
        }
        Bullet.prototype._reset = function () {
            if (this.shoot == false) {
                this.x = 200;
                this.y = 200;
            }
        };
        Bullet.prototype.Start = function () {
            this._reset();
        };
        Bullet.prototype.update = function () {
            this._reset();
            this.bulletDespawn();
            this.bulletMove(this.HoldMX, this.HoldMY);
        };
        Bullet.prototype.bulletDespawn = function () {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0) {
                this.shoot = false;
                this._reset();
            }
        };
        Bullet.prototype.bulletFire = function () {
            console.log("fire");
            if (this.shoot == false && this.delay == false) {
                this.rotation = Math.atan2(this.MY - this.y, this.MX - this.x) * 180 / Math.PI;
                this.HoldMX = this.MX;
                this.HoldMY = this.MY;
                this.shoot = true;
            }
            this.delay = false;
        };
        Bullet.prototype.bulletMove = function (posX, posY) {
            if (this.shoot == true) {
                console.log("check");
                this.x -= this.HoldMX * 0.05;
                this.y -= this.HoldMY * 0.05;
            }
        };
        /*public bulletCol()
        {
            if (utility.Vector2.Distance(new utility.Vector2(this.x, this.y), new utility.Vector2(this.asteroid.x, this.asteroid.y)) < 77)
            {
                this.collision = true;
                console.log("hit!");
            }
        }*/
        Bullet.prototype.giveData = function (SX, SY) {
            this.MX = SX;
            this.MY = SY;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map