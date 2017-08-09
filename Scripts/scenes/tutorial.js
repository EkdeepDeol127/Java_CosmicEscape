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
    var Tutorial = (function (_super) {
        __extends(Tutorial, _super);
        //creates an instance on Tutorial
        function Tutorial() {
            var _this = _super.call(this) || this;
            _this._portalSpawn = false;
            //private _portal: objects.Portal;
            //timers for intructions
            _this._time = 20;
            _this.MoveCheck = false;
            _this.MouseClickCheck = false;
            _this.int2Check = false;
            _this.int1Check = false;
            _this.timeTickCheck = false;
            window.addEventListener('keydown', _this.KeyDown.bind(_this), false);
            window.addEventListener('keyup', _this.KeyUp.bind(_this), false);
            return _this;
        }
        Tutorial.prototype._scoreUpdate = function () {
            this._scoreLabel.text = "Score: " + core.score;
            this._livesLabel.text = "Lives: " + core.lives;
        };
        Tutorial.prototype.Start = function () {
            //sound
            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("mainTheme");
                this._sound.loop = -1;
            }
            //background
            this._backgr = new objects.Galaxy("tutorial");
            this.addChild(this._backgr);
            //player
            this._playerBullet = new objects.Bullet("playerBullet");
            this.addChild(this._playerBullet);
            this._player = new objects.Player("player");
            this.addChild(this._player);
            //asteroids
            this._asteroid = new Array();
            for (var count = 0; count < 4; count++) {
                this._asteroid.push(new objects.Asteroid("asteroid"));
                this._asteroid[count].name = ("asteroid" + count);
                this.addChild(this._asteroid[count]);
            }
            this._portal = new objects.Portal("portal");
            this._collision = new managers.Collision();
            //labels
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "monospace", "#FFFF00", 260, 5, false);
            this.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "monospace", "#FFFF00", 20, 5, false);
            this.addChild(this._livesLabel);
            //instructions
            this._instrOne = new objects.Label("USE THE ARROW KEYS TO MOVE", "40px", "monospace", "#FFFF00", 100, 150, false);
            this.addChild(this._instrOne);
            this._instrTwo = new objects.Label("USE THE MOUSE TO AIM AND SHOOT", "40px", "monospace", "#FFFF00", 50, 150, false);
            this._instrThree = new objects.Label(" AVOID ENEMIES AND BLAST YOUR \n\n       WAY TO THE PORTAL ", "40px", "monospace", "#FFFF00", 25, 150, false);
            //development buttons
            this._menuButton = new objects.Button("menuButton", 125, 450, true);
            //startbutton event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            core.stage.addChild(this);
        };
        Tutorial.prototype.Update = function () {
            var _this = this;
            this._backgr.update();
            this._player.giveData(core.stage.mouseX, core.stage.mouseY);
            this._player.update();
            this._playerBullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._playerBullet.update();
            this._collision.update();
            if (this._portalSpawn == true) {
                this._portal.update();
            }
            //asteroid update
            this._asteroid.forEach(function (asteroid) {
                asteroid.giveData(_this._player.x, _this._player.y);
                _this._collision.checkPlayer(_this._player, asteroid);
                _this._collision.checkEnemy(_this._playerBullet, asteroid);
                if (_this._collision.checkEnemy)
                    asteroid.update();
            });
            if (core.AstHit0 == true) {
                this._asteroid[0]._reset();
            }
            if (core.AstHit1 == true) {
                this._asteroid[1]._reset();
            }
            if (core.AstHit2 == true) {
                this._asteroid[2]._reset();
            }
            if (core.AstHit3 == true) {
                this._asteroid[3]._reset();
            }
            this._scoreUpdate();
            if (core.lives < 1) {
                if (core.SCheck == true) {
                    this._sound.stop();
                }
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 100;
                core.score = 0;
            }
            if (this.timeTickCheck == false) {
                this._time -= 0.1;
            }
            //TIMER FOR FIRST INTRUCTION
            if (this._time <= 0 && this.MoveCheck == true && this.int1Check == false) {
                this.removeChild(this._instrOne);
                this.addChild(this._instrTwo);
                window.addEventListener('click', this.MouseClick.bind(this), false);
                this._time = 20;
                this.int1Check = true;
            }
            //TIMER FOR SECOND INSTRUCTION
            if (this._time <= 0 && this.MouseClickCheck == true && this.int2Check == false) {
                this.removeChild(this._instrTwo);
                this.addChild(this._instrThree);
                this._time = 20;
                this.int2Check = true;
            }
            //TIMER FOR THIRD INSTRUCTION
            if (this._time <= 0 && this.int1Check == true && this.int2Check == true) {
                this.removeChild(this._instrThree);
                this.timeTickCheck = true;
            }
            if (this.timeTickCheck == true && this._portalSpawn == false) {
                if (core.SCheck == true) {
                    this._sound.stop();
                }
                this.addChild(this._portal);
                this.addChild(this._menuButton);
                this._portalSpawn = true;
            }
            else {
                if (this._portalSpawn == false) {
                    core.ifSpawn = false;
                }
            }
        };
        Tutorial.prototype._menuButtonClick = function (event) {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
            core.lives = 100;
            core.score = 0;
        };
        Tutorial.prototype._playButtonClick = function (event) {
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.PLAY;
            core.changeScene();
            core.lives = 100;
            core.score = 0;
        };
        Tutorial.prototype.KeyDown = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:/* W Key */ 
                    this.MoveCheck = true;
                    break;
                case 37: /*left arrow*/
                case 65:/* A Key */ 
                    this.MoveCheck = true;
                    break;
                case 40: /*down arrow*/
                case 83:/* S Key */ 
                    this.MoveCheck = true;
                    break;
                case 39: /*right arrow*/
                case 68:/* D Key */ 
                    this.MoveCheck = true;
                    break;
            }
        };
        Tutorial.prototype.KeyUp = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87:/* W Key */ 
                    this.MoveCheck = false;
                    break;
                case 37: /*left arrow*/
                case 65:/* A Key */ 
                    this.MoveCheck = false;
                    break;
                case 40: /*down arrow*/
                case 83:/* S Key */ 
                    this.MoveCheck = false;
                    break;
                case 39: /*right arrow*/
                case 68:/* D Key */ 
                    this.MoveCheck = false;
                    break;
            }
        };
        Tutorial.prototype.MouseClick = function (event) {
            this.MouseClickCheck = true;
        };
        return Tutorial;
    }(objects.Scene));
    scenes.Tutorial = Tutorial;
})(scenes || (scenes = {}));
//# sourceMappingURL=tutorial.js.map