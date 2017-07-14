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
        /**
         * Resets the object outside of the viewport
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Galaxy.prototype._reset = function () {
            this.y = -700;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Galaxy.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        // PUBLIC METHODS 
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Galaxy.prototype.start = function () {
            this._reset();
            this._dy = 2; // 5px per frame down
        };
        // This method updates the object's properties every time it's called
        Galaxy.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        return Galaxy;
    }(createjs.Bitmap));
    objects.Galaxy = Galaxy;
})(objects || (objects = {}));
//# sourceMappingURL=galaxy.js.map