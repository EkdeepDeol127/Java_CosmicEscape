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
    var EnemyBullet = (function (_super) {
        __extends(EnemyBullet, _super);
        function EnemyBullet(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.range = false;
            //speed: number = 3;
            _this.shoot = false;
            _this.timer = 8;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.Start();
            return _this;
        }
        EnemyBullet.prototype._reset = function () {
            if (this.shoot == false) {
                this.x = this.enemyShipX;
                this.y = this.enemyShipY;
            }
        };
        EnemyBullet.prototype.Start = function () {
            this._reset();
        };
        EnemyBullet.prototype.update = function () {
            this._reset();
            this.bulletDespawn();
            this.bulletFire();
            this.bulletMove();
        };
        EnemyBullet.prototype.bulletDespawn = function () {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0) {
                this.shoot = false;
                this._reset();
            }
        };
        EnemyBullet.prototype.bulletFire = function () {
            this.timer -= 0.1;
            if (this.range == true && this.shoot == false && this.timer <= 0) {
                this.timer = 8;
                this.shoot = true;
                this.HoldplayerX = this.playerX;
                this.HoldplayerY = this.playerY;
                this.rotation = Math.atan2(this.HoldplayerY - this.y, this.HoldplayerX - this.x) * 180 / Math.PI;
            }
        };
        EnemyBullet.prototype.bulletMove = function () {
            if (this.range == true || this.shoot == true) {
                this.x -= this.HoldplayerX * 0.05;
                this.y -= this.HoldplayerY * 0.05;
            }
        };
        EnemyBullet.prototype.col = function () {
        };
        EnemyBullet.prototype.giveData = function (PX, PY, EX, EY, IR) {
            this.range = IR;
            this.playerX = PX;
            this.playerY = PY;
            this.enemyShipX = EX;
            this.enemyShipY = EY;
        };
        return EnemyBullet;
    }(objects.GameObject));
    objects.EnemyBullet = EnemyBullet;
})(objects || (objects = {}));
//# sourceMappingURL=enemybullet.js.map