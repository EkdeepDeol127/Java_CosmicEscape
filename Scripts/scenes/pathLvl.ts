module scenes {
    export class pathLevel extends objects.Scene {

        private _galaxy: objects.galaxyPath;
        private _arrow: objects.arrowPath;
        private _player: objects.NewPlayer;
        private _asteroid: objects.NewAsteroid[];
        private _bullet: objects.NewBullet;
        private _enemyBullet: objects.EnemyBullet;
        private _portalPath: objects.PortalPath;
        private _portalSpawn: boolean = false;

        private _enemyShip: objects.EnemyShip;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _backButton: objects.Button;

        private _sound: createjs.AbstractSoundInstance;

        //creates an instance on pathLevel
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }

        public Start(): void {

            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("mainTheme");
                this._sound.loop = -1;
            }

            this._galaxy = new objects.galaxyPath("galaxy");
            this.addChild(this._galaxy);

            this._portalPath = new objects.PortalPath("portal");

            this._arrow = new objects.arrowPath("player");//temp sprite
            this.addChild(this._arrow);

            this._bullet = new objects.NewBullet("playerBullet");
            this.addChild(this._bullet);
            this._player = new objects.NewPlayer("player");
            this.addChild(this._player);

            this._enemyBullet = new objects.EnemyBullet("enemyBullet");
            this.addChild(this._enemyBullet);
            this._enemyShip = new objects.EnemyShip("enemyShip");
            this.addChild(this._enemyShip);

            this._asteroid = new Array<objects.NewAsteroid>();
            for (let count = 0; count < 2; count++) {
                this._asteroid.push(new objects.NewAsteroid("asteroid"));
                this.addChild(this._asteroid[count]);
            }

            this._collision = new managers.Collision();

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Dock51", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);

            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Dock51", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);

            console.log("PATHLEVEL");
            core.stage.addChild(this);
        }

        public Update() {
            this._galaxy.giveData(this._player.rotation);
            this._galaxy.update();
            this._player.update();
            this._bullet.giveData(this._player.rotation, this._player.x, this._player.y);
            this._bullet.update();
            this._enemyShip.giveData(this._player.x, this._player.y);
            this._enemyShip.update();
            this._enemyBullet.giveData(this._player.x, this._player.y, this._enemyShip.x, this._enemyShip.y, this._enemyShip.inRange);
            this._enemyBullet.update();
            this._arrow.giveData(this._player.rotation);
            this._arrow.update();
            if(this._portalSpawn == true)
                {
                    this._portalPath.update();
                }
            this._collision.update();

            this._collision.checkPlayer(this._player, this._enemyShip);
            this._collision.checkPlayer(this._player, this._enemyBullet);
            this._collision.checkEnemy(this._bullet, this._enemyShip);

            //asteroids update
            this._asteroid.forEach(asteroid => {
                asteroid.giveData(this._player.x, this._player.y, this._player.rotation);
                this._collision.checkPlayer(this._player, asteroid);
                this._collision.checkEnemy(this._bullet, asteroid);
                asteroid.update();
            });

            if (this._portalSpawn == false && this._arrow.numChange == 10) {
                if (core.SCheck == true) {
                    this._sound.stop();
                }
                this.addChild(this._portalPath);
                this._portalSpawn = true;
            }

            this._updateScoreBoard();

            if (core.lives < 1) {
                if (core.SCheck == true) {
                    this._sound.stop();
                }
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 100;
                core.score = 0;
            }
        }
    }
}