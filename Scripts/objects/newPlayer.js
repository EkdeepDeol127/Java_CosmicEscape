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
    var NewPlayer = (function (_super) {
        __extends(NewPlayer, _super);
        // CONSTRUCTORS 
        //creates an instance of player
        function NewPlayer(imageString) {
            var _this = _super.call(this, imageString) || this;
            // PRIVATE INSTANCE VARIABLES 
            // PUBLIC PROPERTIES 
            _this.moveLeft = false;
            _this.moveRight = false;
            _this.health = 100;
            _this.sheild = 100;
            _this.speed = 5;
            window.addEventListener('keydown', _this.KeyDown.bind(_this), false);
            window.addEventListener('keyup', _this.KeyUp.bind(_this), false);
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.start();
            return _this;
        }
        // PUBLIC METHODS
        // used to initialize public properties 
        NewPlayer.prototype.start = function () {
            this.y = 300;
            this.x = 400;
        };
        // updates the object's properties every time it's called
        NewPlayer.prototype.update = function () {
            // player to follow mouse
            this.position = new objects.Vector2(this.x, this.y);
            console.log(this.rotation);
            //this.rotation = Math.atan2(this.MY - this.y, this.MX - this.x) * 180 / Math.PI;
            if (this.moveLeft) {
                this.rotation -= this.speed;
            }
            if (this.moveRight) {
                this.rotation += this.speed;
            }
        };
        NewPlayer.prototype.KeyDown = function (event) {
            switch (event.keyCode) {
                case 37: /*left arrow*/
                case 65:/* A Key */ 
                    this.moveLeft = true;
                    break;
                case 39: /*right arrow*/
                case 68:/* D Key */ 
                    this.moveRight = true;
                    break;
                case 81:/* pause */ 
                    console.log("paused");
                    //add paused/suiside
                    break;
            }
        };
        NewPlayer.prototype.KeyUp = function (event) {
            switch (event.keyCode) {
                case 37: /*left arrow*/
                case 65:/* A Key */ 
                    this.moveLeft = false;
                    break;
                case 39: /*right arrow*/
                case 68:/* D Key */ 
                    this.moveRight = false;
                    break;
                case 81:/* pause */ 
                    console.log("unpaused");
                    //add paused/suiside
                    break;
            }
        };
        NewPlayer.prototype.Damage = function (dam) {
            if (this.sheild > 0) {
                this.sheild - dam;
            }
            else {
                if (this.health > 0) {
                    this.health - dam;
                }
                else {
                    //gameover
                }
            }
        };
        NewPlayer.prototype.col = function () {
        };
        return NewPlayer;
    }(objects.GameObject));
    objects.NewPlayer = NewPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=newPlayer.js.map