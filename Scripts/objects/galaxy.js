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
    var Galaxy = (function (_super) {
        __extends(Galaxy, _super);
        // CONSTRUCTORS 
        function Galaxy(imageString) {
            var _this = _super.call(this, core.assets.getResult(imageString)) || this;
            _this.start();
            return _this;
        }
        // PRIVATE METHODS 
        Galaxy.prototype._reset = function () {
            this.y = -700;
        };
        Galaxy.prototype._checkBounds = function () {
            if (this.y >= 0 && core.ifSpawn == false) {
                this._reset();
                console.log("working");
            }
        };
        Galaxy.prototype.start = function () {
            this._reset();
            this._dy = .8; // 5px per frame down
        };
        // This method updates the object's properties every time it's called
        Galaxy.prototype.update = function () {
            this._checkBounds();
            this.move();
        };
        Galaxy.prototype.move = function () {
            if (core.ifSpawn == false)
                this.y += this._dy;
        };
        return Galaxy;
    }(createjs.Bitmap));
    objects.Galaxy = Galaxy;
})(objects || (objects = {}));
//# sourceMappingURL=galaxy.js.map