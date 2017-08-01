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
        //private variables
        function Portal(imageString, e) {
            return _super.call(this, imageString) || this;
        }
        return Portal;
    }(objects.GameObject));
    objects.Portal = Portal;
})(objects || (objects = {}));
//# sourceMappingURL=portal.js.map