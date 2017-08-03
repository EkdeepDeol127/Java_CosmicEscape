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
    var NewBullet = (function (_super) {
        __extends(NewBullet, _super);
        function NewBullet(imageString) {
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
        NewBullet.prototype._reset = function () {
            if (this.shoot == false) {
                this.x = this.playerX;
                this.y = this.playerY;
            }
        };
        NewBullet.prototype.Start = function () {
            this._reset();
        };
        NewBullet.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y); //for collision
            this._reset();
            this.bulletDespawn();
            this.bulletMove(this.playerX, this.playerY);
        };
        NewBullet.prototype.bulletDespawn = function () {
            if (this.x >= 800 || this.x <= 0 || this.y >= 600 || this.y <= 0) {
                this.shoot = false;
                this._reset();
            }
        };
        NewBullet.prototype.bulletFire = function () {
            if (this.shoot == false && this.delay == false) {
                this.rotation = this.HoldRot;
                this.shoot = true;
            }
            this.delay = false;
        };
        NewBullet.prototype.bulletMove = function (posX, posY) {
            if (this.shoot == true) {
                this.radians = this.rotation * (Math.PI / 180);
                this.x += this.speed * Math.cos(this.radians);
                this.y += this.speed * Math.sin(this.radians);
            }
        };
        NewBullet.prototype.col = function () {
        };
        NewBullet.prototype.giveData = function (rot, PX, PY) {
            this.playerX = PX;
            this.playerY = PY;
            this.HoldRot = rot;
        };
        return NewBullet;
    }(objects.GameObject));
    objects.NewBullet = NewBullet;
})(objects || (objects = {}));
//# sourceMappingURL=newBullet.js.map