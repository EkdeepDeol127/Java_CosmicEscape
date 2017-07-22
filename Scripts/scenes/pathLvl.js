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
var scenes;
(function (scenes) {
    var pathLevel = (function (_super) {
        __extends(pathLevel, _super);
        //private variables
        //creates an instance of pathLvl
        function pathLevel() {
            return _super.call(this) || this;
        }
        pathLevel.prototype.Start = function () {
            core.stage.addChild(this);
        };
        pathLevel.prototype.Update = function () {
        };
        return pathLevel;
    }(objects.Scene));
    scenes.pathLevel = pathLevel;
})(scenes || (scenes = {}));
//# sourceMappingURL=pathLvl.js.map