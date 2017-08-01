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
    var Notice = (function (_super) {
        __extends(Notice, _super);
        function Notice(labelStr, fontSize, fontFamily, fontColour, x, y, isCentered, timeS, timeE) {
            var _this = _super.call(this, labelStr, (fontSize + " " + fontFamily), fontColour) || this;
            _this.labelStr = labelStr;
            _this.fontSize = fontSize;
            _this.fontFamily = fontFamily;
            _this.fontColour = fontColour;
            _this.timeS = timeS;
            _this.timeE = timeE;
            if (isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            //notice coordinates
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Notice;
    }(createjs.Text));
    objects.Notice = Notice;
})(objects || (objects = {}));
//# sourceMappingURL=notice.js.map