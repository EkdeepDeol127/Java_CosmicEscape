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
    var Player = (function (_super) {
        __extends(Player, _super);
        // CONSTRUCTORS 
        //creates an instance of player
        function Player(imageString) {
            var _this = _super.call(this, imageString) || this;
            // PRIVATE INSTANCE VARIABLES 
            // PUBLIC PROPERTIES 
            _this.moveLeft = false;
            _this.moveRight = false;
            _this.moveUp = false;
            _this.moveDown = false;
            _this.speed = 5;
            window.addEventListener('keydown', _this.KeyDown.bind(_this), false);
            window.addEventListener('keyup', _this.KeyUp.bind(_this), false);
            _this.start();
            return _this;
        }
        // This method checks if the object has reached its boundaries
        Player.prototype._checkBounds = function () {
            // checkbounds to stop player from going outside
            // check right bounds
            if (this.x >= (640 - (this.width * 0.5))) {
                this.x = (640 - (this.width * 0.5));
            }
            // check left bounds
            if (this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
        };
        // PUBLIC METHODS
        // used to initialize public properties 
        Player.prototype.start = function () {
            this.y = 430;
        };
        // updates the object's properties every time it's called
        Player.prototype.update = function () {
            // player to follow mouse
            this.position = new objects.Vector2(this.x, this.y);
            this.rotation = Math.atan2(this.MY - this.y, this.MX - this.x) * 180 / Math.PI;
            if (this.moveLeft && this.x >= 0 + 50) {
                this.x -= this.speed;
            }
            if (this.moveRight && this.x <= 640 - 50) {
                this.x += this.speed;
            }
            if (this.moveUp && this.y >= 0 + 50) {
                this.y -= this.speed;
            }
            if (this.moveDown && this.y <= 480 - 50) {
                this.y += this.speed;
            }
            this._checkBounds();
        };
        Player.prototype.KeyDown = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:
                    this.moveUp = true;
                    break;
                case 37: /*left arrow*/
                case 65:
                    this.moveLeft = true;
                    break;
                case 40: /*down arrow*/
                case 83:
                    this.moveDown = true;
                    break;
                case 39: /*right arrow*/
                case 68:
                    this.moveRight = true;
                    break;
                case 81:
                    console.log("paused");
                    //add paused/suiside
                    break;
            }
        };
        Player.prototype.KeyUp = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:
                    this.moveUp = false;
                    break;
                case 37: /*left arrow*/
                case 65:
                    this.moveLeft = false;
                    break;
                case 40: /*down arrow*/
                case 83:
                    this.moveDown = false;
                    break;
                case 39: /*right arrow*/
                case 68:
                    this.moveRight = false;
                    break;
                case 81:
                    console.log("unpaused");
                    //add paused/suiside
                    break;
            }
        };
        Player.prototype.giveData = function (SX, SY) {
            this.MX = SX;
            this.MY = SY;
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map