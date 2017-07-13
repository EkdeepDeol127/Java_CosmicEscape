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
    var EnemyShip = (function (_super) {
        __extends(EnemyShip, _super);
        function EnemyShip(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.check = false;
            _this.inRange = false;
            _this.dead = false;
            _this.health = 20;
            _this.sheild = 30;
            _this.xSpeed = 0;
            _this.ySpeed = 0;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.Start();
            return _this;
        }
        EnemyShip.prototype._reset = function () {
            this.x = 500; //(Math.random() * 640); //use this to tell where to spawn 
            this.y = 300;
        };
        EnemyShip.prototype.Start = function () {
            this._reset();
        };
        EnemyShip.prototype.update = function () {
            this.enemtShipDespawn();
            this.playerRange();
            this.enemyShipMove();
        };
        EnemyShip.prototype.enemtShipDespawn = function () {
            if (this.x >= 740 || this.x <= -100 || this.y >= 580 || this.y <= -200 || this.dead == true) {
                this.check = false;
                this.inRange = false;
                this.dead = false;
                this._reset();
            }
        };
        EnemyShip.prototype.checkPlayerLoc = function () {
            this.HoldplayerX = this.playerX;
            this.HoldplayerY = this.playerY;
        };
        EnemyShip.prototype.enemyShipMove = function () {
            if (this.check == false) {
                this.checkPlayerLoc();
                this.check = true;
            }
            else {
                if (this.inRange == false) {
                    this.rotation = Math.atan2(this.HoldplayerY - this.y, this.HoldplayerX - this.x) * 180 / Math.PI;
                    this.xSpeed = (this.x - this.playerX) / 3;
                    this.ySpeed = (this.y - this.playerY) / 3;
                    this.ySpeed = this.ySpeed * (2.5 / Math.sqrt(this.xSpeed * this.xSpeed + this.ySpeed * this.ySpeed));
                    this.xSpeed = this.xSpeed * (2.5 / Math.sqrt(this.xSpeed * this.xSpeed + this.ySpeed * this.ySpeed));
                    this.x -= this.xSpeed;
                    this.y -= this.ySpeed;
                }
            }
        };
        EnemyShip.prototype.playerRange = function () {
            if (this.x <= (this.playerX + 150) && this.y <= (this.playerY + 150)) {
                this.inRange = true;
            }
            else {
                this.inRange = false;
            }
        };
        EnemyShip.prototype.Damage = function (dam) {
            if (this.sheild > 0) {
                this.sheild - dam;
            }
            else {
                if (this.health > 0) {
                    this.health - dam;
                }
                else {
                    this.dead = true;
                }
            }
        };
        EnemyShip.prototype.col = function () {
        };
        EnemyShip.prototype.giveData = function (PX, PY) {
            this.playerX = PX;
            this.playerY = PY;
        };
        return EnemyShip;
    }(objects.GameObject));
    objects.EnemyShip = EnemyShip;
})(objects || (objects = {}));
//# sourceMappingURL=enemyShip.js.map