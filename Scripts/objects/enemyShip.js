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
            _this.sheild = 40;
            _this.speed = 3;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.Start();
            return _this;
        }
        EnemyShip.prototype._reset = function () {
            this.ran = Math.floor((Math.random() * 4) + 1);
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
        };
        EnemyShip.prototype.Start = function () {
            this._reset();
        };
        EnemyShip.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y); //for collision 
            this.rotation = Math.atan2(this.playerY - this.y, this.playerX - this.x) * 180 / Math.PI;
            this.enemtShipDespawn();
            this.playerRange();
            this.enemyShipMove();
        };
        EnemyShip.prototype.enemtShipDespawn = function () {
            if (this.x >= 900 || this.x <= -100 || this.y >= 700 || this.y <= -100 || this.dead == true) {
                this.check = false;
                this.inRange = false;
                this.dead = false;
                this.health = 20;
                this.sheild = 30;
                this._reset();
            }
        };
        EnemyShip.prototype.enemyShipMove = function () {
            if (this.inRange == false) {
                this.radians = this.rotation * (Math.PI / 180);
                this.x += this.speed * Math.cos(this.radians);
                this.y += this.speed * Math.sin(this.radians);
            }
        };
        EnemyShip.prototype.playerRange = function () {
            this.dist = Math.sqrt(Math.pow((this.x - this.playerX), 2) + Math.pow((this.y - this.playerY), 2));
            if (this.dist < 200) {
                this.inRange = true;
            }
            else {
                this.inRange = false;
            }
        };
        EnemyShip.prototype.Damage = function (dam) {
            if (this.sheild > 0) {
                this.sheild -= dam;
            }
            else {
                if (this.health > 0) {
                    this.health -= dam;
                }
                else {
                    this.dead = true;
                }
            }
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