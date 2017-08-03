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
            _this.timer = 10;
            _this.numChange = 0;
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
            this.checkFollow();
            this.changeArrow();
        };
        arrowPath.prototype.checkFollow = function () {
            if (this.numChange < 10) {
                if (Math.sin(this.playerRot) == Math.sin(this.rotation) ||
                    Math.sin(-this.playerRot) == Math.sin(this.rotation) ||
                    Math.cos(this.playerRot) == Math.cos(this.rotation) ||
                    Math.cos(-this.playerRot) == Math.cos(this.rotation)) {
                    console.log("following");
                    this.timer -= 0.1;
                }
            }
            else {
                this.visible = false;
            }
        };
        arrowPath.prototype.changeArrow = function () {
            if (this.timer <= 0) {
                this.hold = Math.round(Math.random());
                switch (this.hold) {
                    case 0:
                        console.log("right");
                        this.rotation += 90;
                        break;
                    case 1:
                        console.log("left");
                        this.rotation -= 90;
                        break;
                }
                this.timer = 10;
                this.numChange++;
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