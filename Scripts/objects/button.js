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
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(imageString, x, y, isCentered) {
            var _this = _super.call(this, core.textureAtlas, imageString) || this;
            // Check if user wants to change regX and regY values to the center 
            if (isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
            }
            _this.x = x;
            _this.y = y;
            // binds the mouseover and mouseout events to the button object
            _this.on("mouseover", _this._mouseOver, _this);
            _this.on("mouseout", _this._mouseOut, _this);
            return _this;
        }
        Button.prototype._mouseOver = function (event) {
            this.alpha = 0.7;
        };
        Button.prototype._mouseOut = function (event) {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Sprite));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map