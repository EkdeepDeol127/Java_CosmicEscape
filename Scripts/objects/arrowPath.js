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
    var arrowPath = (function (_super) {
        __extends(arrowPath, _super);
        function arrowPath(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.start();
            return _this;
        }
        arrowPath.prototype.start = function () {
            this.x = 750;
            this.y = 550;
            this.rotation = -90;
        };
        arrowPath.prototype.update = function () {
        };
        arrowPath.prototype.checkFollow = function () {
            if (Math.sin(this.playerRot) <= Math.sin(this.rotation)) {
                console.log(Math.sin(this.playerRot), Math.sin(this.rotation));
            }
            else if (Math.sin(this.playerRot) >= Math.sin(this.rotation)) {
                console.log(Math.sin(this.playerRot), Math.sin(this.rotation));
            }
            else if (Math.cos(this.playerRot) > Math.cos(this.rotation)) {
                console.log(Math.sin(this.playerRot), Math.cos(this.rotation));
            }
            else if (Math.cos(this.playerRot) < Math.cos(this.rotation)) {
                console.log(Math.sin(this.playerRot), Math.cos(this.rotation));
            }
        };
        arrowPath.prototype.giveData = function (rot) {
            this.playerRot = rot;
        };
        return arrowPath;
    }(objects.GameObject));
    objects.arrowPath = arrowPath;
})(objects || (objects = {}));
//# sourceMappingURL=arrowPath.js.map