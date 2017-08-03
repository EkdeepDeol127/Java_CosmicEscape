var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.OVER = 2;
        Scene.TUTORIAL = 3;
        Scene.PATH = 4;
        Scene.SETTINGS = 5;
        Scene.CREDITS = 6;
        Scene.GAMEWON = 7;
        return Scene;
    }());
    config.Scene = Scene;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map