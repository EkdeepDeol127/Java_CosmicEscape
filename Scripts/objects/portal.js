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
    var Portal = (function (_super) {
        __extends(Portal, _super);
        function Portal(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.regX = _this.width * 0.5;
            _this.regY = _this.height * 0.5;
            _this.start();
            return _this;
        }
        Portal.prototype.start = function () {
            this.y = -200;
            this.x = 400;
        };
        Portal.prototype.update = function () {
            this.checkBounds();
        };
        Portal.prototype.checkBounds = function () {
            if (this.y == 300)
                core.ifSpawn = true;
            else {
                this.y += 1;
            }
        };
        return Portal;
    }(objects.GameObject));
    objects.Portal = Portal;
})(objects || (objects = {}));
//# sourceMappingURL=portal.js.map