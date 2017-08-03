module scenes {
    export class Tutorial extends objects.Scene {
        //PRIVATE VARIABLES
        private _sound: createjs.AbstractSoundInstance;
        private _backgr: objects.Galaxy;
        private _player: objects.Player;
        private _playerBullet: objects.Bullet;
        private _asteroid: objects.Asteroid[];
        private _enemy: objects.EnemyShip;
        //private _portal: objects.Portal;

        //timers for intructions
        private _time: number = 20;
        private _timeTwo: number = 50;
        private _timeThree: number = 100;
        private _timeFour: number = 150;

        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _instrOne: objects.Label;
        private _instrTwo: objects.Label;
        private _instrThree: objects.Label;


        //for development purposes
        private _menuButton: objects.Button;
        private _playButton: objects.Button;

        //creates an instance on Tutorial
        constructor() {
            super();
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
                this.addChild(this._asteroid[count]);
            }

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
            this._instrThree = new objects.Label(" AVOID ENEMIES AND BLAST YOUR \n       WAY TO THE PORTAL ", "40px", 
            "monospace", "#FFFF00", 25, 150, false);

                
            
            //development buttons
            this._menuButton = new objects.Button("menuButton", 125, 450, true);
            //startbutton event listener
            this._menuButton.on("click", this._menuButtonClick, this);
            this._playButton = new objects.Button("playButton", 650, 450, true);
            //playbutton event listener
            this._playButton.on("click", this._playButtonClick, this);

            core.stage.addChild(this);

        }

        public Update(): void {
            this._backgr.update();
            this._player.giveData(core.stage.mouseX, core.stage.mouseY);
            this._player.update();
            this._playerBullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._playerBullet.update();
            this._collision.update();
            

            //asteroid update
            this._asteroid.forEach(asteroid => {
                asteroid.giveData(this._player.x, this._player.y);
                this._collision.checkPlayer(this._player, asteroid);
                this._collision.checkEnemy(this._playerBullet, asteroid);
                if (this._collision.checkEnemy)
                    asteroid.update();

            })

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


            //TIMER FOR FIRST INTRUCTION
             if (this._time <= 0) {
                
                this.removeChild(this._instrOne);
            }
            else {
                this._time -= 0.1;
            }

            //TIMER FOR SECOND INSTRUCTION
              if (this._timeTwo <= 25  ) 
                this.addChild(this._instrTwo);
             if(this._timeTwo <= 1 )
                 this.removeChild(this._instrTwo);
            else {
                this._timeTwo -= 0.1;
            }

             //TIMER FOR THIRD INSTRUCTION
              if (this._timeThree <= 50  ) 
                this.addChild(this._instrThree);
             if(this._timeThree <= 1 )
              this.removeChild(this._instrThree);
            else {
                this._timeThree -= 0.1;
            }
 //TIMER FOR BUTTONS INSTRUCTION
              if (this._timeFour <= 50  ) 
              {
           this.addChild(this._playButton);
            this.addChild(this._menuButton);
              }
        else{
            this._timeFour -=0.1;
        }



        }

        private _menuButtonClick(event: createjs.MouseEvent): void {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
        }

        private _playButtonClick(event: createjs.MouseEvent): void {
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }



    }


}