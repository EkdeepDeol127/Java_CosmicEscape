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
            _this.speed = 30;
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
                core.bullDesp = false;
                this.x = this.playerX;
                this.y = this.playerY;
            }
        };
        Bullet.prototype.Start = function () {
            this._reset();
        };
        Bullet.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y); //for collision
            this._reset();
            this.bulletDespawn();
            this.bulletMove(this.HoldMX, this.HoldMY);
        };
        Bullet.prototype.bulletDespawn = function () {
            if (this.x >= 800 || this.x <= 0 || this.y >= 600 || this.y <= 0) {
                this.shoot = false;
                this._reset();
            }
        };
        Bullet.prototype.bulletFire = function () {
            if (this.shoot == false && this.delay == false) {
                this.HoldMX = this.MX;
                this.HoldMY = this.MY;
                this.rotation = Math.atan2(this.HoldMY - this.y, this.HoldMX - this.x) * 180 / Math.PI;
                this.shoot = true;
            }
            this.delay = false;
        };
        Bullet.prototype.bulletMove = function (posX, posY) {
            if (this.shoot == true) {
                this.radians = this.rotation * (Math.PI / 180);
                this.x += this.speed * Math.cos(this.radians);
                this.y += this.speed * Math.sin(this.radians);
            }
        };
        Bullet.prototype.giveData = function (SX, SY, PX, PY) {
            this.MX = SX;
            this.MY = SY;
            this.playerX = PX;
            this.playerY = PY;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map