module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES
        private _galaxy: objects.Galaxy;
        private _player: objects.Player;
        private _asteroid: objects.Asteroid[];
        private _bullet: objects.Bullet;
        private _enemyBullet: objects.EnemyBullet;

        private _enemyShip: objects.EnemyShip;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _TimeLabel: objects.Label;

        //creates an instance of Play
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
            this._TimeLabel.text = "Time: " + core.score;
        }

        public Start(): void {
            //galaxy
            this._galaxy = new objects.Galaxy("galaxy");
            this.addChild(this._galaxy);


            //enemy object
            this._enemyBullet = new objects.EnemyBullet("bullet");
            this.addChild(this._enemyBullet);
            this._enemyShip = new objects.EnemyShip("player");
            this.addChild(this._enemyShip);


            //PLAYER
            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._bullet = new objects.Bullet("bullet");
            this.addChild(this._bullet);

            //asteroid array
            this._asteroid = new Array<objects.Asteroid>();
            for (let count = 0; count < 4; count++) {
                this._asteroid.push(new objects.Asteroid("asteroid"));
                this.addChild(this._asteroid[count]);
            }

            this._collision = new managers.Collision();

            //score label
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Dock51", "#FFFF00", 260, 5, false);
            this.addChild(this._scoreLabel);

            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Dock51", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);

            this._TimeLabel = new objects.Label("Lives: " + core.Time, "40px", "Dock51", "#FFFF00", 510, 5, false);
            this.addChild(this._TimeLabel);

            console.log("SurviveLEVEL");
            core.stage.addChild(this);

        }

        public Update(): void {
            this._galaxy.update();
            this._player.giveData(core.stage.mouseX, core.stage.mouseY);
            this._player.update();
            this._bullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
            this._bullet.update();
            this._enemyShip.giveData(this._player.x, this._player.y);
            this._enemyShip.update();
            this._enemyBullet.giveData(this._player.x, this._player.y, this._enemyShip.x, this._enemyShip.y, this._enemyShip.inRange);
            this._enemyBullet.update();

            this._collision.check(this._player, this._enemyShip);
            this._collision.check(this._player, this._enemyBullet);

            //asteroids update
            this._asteroid.forEach(asteroid => {
                asteroid.giveData(this._player.x, this._player.y);
                this._collision.check(this._player, asteroid);
                asteroid.update();
            });

            if(core.Time <= 0)
            {
                core.Time = 15;
                core.scene = config.Scene.PATH;
                core.changeScene();
            }
            else
            {
                core.Time -= 0.1;
            }

            this._updateScoreBoard();

            if (core.lives < 1) {
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 5;
            }
        }


    }
}

/*  public Update():void {   
    /*   if (core.lives < 1) {
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }  
} */