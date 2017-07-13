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
        // CONSTRUCTORS 
        //Creates an instance of asteroid
        function Asteroid(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.start();
            return _this;
        }
        // PRIVATE METHODS 
        //Resets the object outside of the viewport and sets the x and y locations
        Asteroid.prototype._reset = function () {
            this._dy = Math.floor((Math.random() * 5) + 5); // vertical speed
            this._dx = Math.floor((Math.random() * 4) - 2); // horizontal drift
            this.y = -this.height;
            // get a random x location
            this.x = Math.floor((Math.random() * (640 - (this.width * 0.5))) + (this.width * 0.5));
        };
        Asteroid.prototype._checkBounds = function () {
            if (this.y >= (480 + (this.height * 0.5))) {
                this._reset();
            }
        };
        // PUBLIC METHODS 
        //used to initialize public properties and private instance variables
        Asteroid.prototype.start = function () {
            this._reset();
        };
        //updates the object's properties every time it's called
        Asteroid.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
        };
        return Asteroid;
    }(objects.GameObject));
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map