module scenes {
    export class Tutorial extends objects.Scene {
        //PRIVATE VARIABLES
        private _sound: createjs.AbstractSoundInstance;
        private _backgr: objects.Galaxy;
        private _player: objects.Player;
        private _playerBullet: objects.Bullet;
        private _asteroid: objects.Asteroid[];
        private _enemy: objects.EnemyShip;
        private _portal: objects.Portal;
        private _portalSpawn: boolean = false;
        //private _portal: objects.Portal;

        //timers for intructions
        private _time: number = 20;

        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _instrOne: objects.Label;
        private _instrTwo: objects.Label;
        private _instrThree: objects.Label;

        private MoveCheck: boolean = false;
        private MouseClickCheck: boolean = false;
        private int2Check: boolean = false;
        private int1Check: boolean = false;
        private timeTickCheck: boolean = false;

        //for development purposes
        private _menuButton: objects.Button;

        //creates an instance on Tutorial
        constructor() {
            super();
            window.addEventListener('keydown', this.KeyDown.bind(this), false);
            window.addEventListener('keyup', this.KeyUp.bind(this), false);
        }

        private _scoreUpdate() {
            this._scoreLabel.text = "Score: " + core.score;
            this._livesLabel.text = "Lives: " + core.lives;
        }

        public Start(): void {
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
            this._asteroid = new Array<objects.Asteroid>();
            for (let count = 0; count < 4; count++) {
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
            this._instrThree = new objects.Label(" AVOID ENEMIES AND BLAST YOUR \n\n       WAY TO THE PORTAL ", "40px",
                "monospace", "#FFFF00", 25, 150, false);

            //development buttons
            this._menuButton = new objects.Button("menuButton", 125, 450, true);
            //startbutton event listener
            this._menuButton.on("click", this._menuButtonClick, this);

            core.stage.addChild(this);
        }

        public Update(): void {
            this._backgr.update();
            this._player.giveData(core.stage.mouseX, core.stage.mouseY);
            this._player.update();
            this._playerBullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._playerBullet.update();
            this._collision.update();
            if(this._portalSpawn == true)
                {
                    this._portal.update();
                }

            //asteroid update
            this._asteroid.forEach(asteroid => {
                asteroid.giveData(this._player.x, this._player.y);
                this._collision.checkPlayer(this._player, asteroid);
                this._collision.checkEnemy(this._playerBullet, asteroid);
                if (this._collision.checkEnemy)
                    asteroid.update();

            })

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

            if(this.timeTickCheck == false){
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
            if (this._time <= 0 && this.MouseClickCheck == true && this.int2Check == false)
                {
                    this.removeChild(this._instrTwo);
                    this.addChild(this._instrThree);
                    this._time = 20;
                    this.int2Check = true;
                }

            //TIMER FOR THIRD INSTRUCTION
            if (this._time <= 0 && this.int1Check == true && this.int2Check == true)
                {
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
        }

        private _menuButtonClick(event: createjs.MouseEvent): void {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
            core.lives = 100;
            core.score = 0;
        }

        private _playButtonClick(event: createjs.MouseEvent): void {
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.PLAY;
            core.changeScene();
            core.lives = 100;
            core.score = 0;
        }

         public KeyDown(event: KeyboardEvent) {

            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                    this.MoveCheck = true;
                    break;

                case 37: /*left arrow*/
                case 65: /* A Key */
                    this.MoveCheck = true;
                    break;

                case 40: /*down arrow*/
                case 83: /* S Key */
                    this.MoveCheck = true;
                    break;

                case 39: /*right arrow*/
                case 68: /* D Key */
                    this.MoveCheck = true;
                    break;
            }
        }

        public KeyUp(event: KeyboardEvent) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                    this.MoveCheck = false;
                    break;

                case 37: /*left arrow*/
                case 65: /* A Key */
                    this.MoveCheck = false;
                    break;

                case 40: /*down arrow*/
                case 83: /* S Key */
                    this.MoveCheck = false;
                    break;

                case 39: /*right arrow*/
                case 68: /* D Key */
                    this.MoveCheck = false;
                    break;
            }
        }

        public MouseClick(event: KeyboardEvent) {
            this.MouseClickCheck = true;
        }
    }
}