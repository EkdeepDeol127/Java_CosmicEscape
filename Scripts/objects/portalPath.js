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
    var PortalPath = (function (_super) {
        __extends(PortalPath, _super);
        function PortalPath(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.start();
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            return _this;
        }
        PortalPath.prototype.start = function () {
            this.y = -200;
            this.x = 400;
        };
        PortalPath.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.checkBounds();
        };
        PortalPath.prototype.checkBounds = function () {
            if (this.y == 300) {
                core.ifSpawnPath = true;
            }
            else {
                this.y += 1;
            }
        };
        return PortalPath;
    }(objects.GameObject));
    objects.PortalPath = PortalPath;
})(objects || (objects = {}));
//# sourceMappingURL=portalPath.js.map