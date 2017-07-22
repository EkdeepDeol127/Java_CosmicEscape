module scenes{
export class pathLevel extends objects.Scene{

     private _backgr: objects.Background;
        private _galaxy: objects.Galaxy;
        private _player: objects.Player;
        private _asteroid: objects.Asteroid[];
        private _bullet: objects.Bullet;
        private _enemyBullet: objects.EnemyBullet;

        private _enemyShip: objects.EnemyShip;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _backButton: objects.Button;

        //creates an instance on pathLevel
        constructor() {
            super();
        }
        
        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }

        public Start(): void {
            //adds background
            this._backgr = new objects.Background("pathLevel");
            this.addChild(this._backgr);

            this._player = new objects.Player("player");
            this.addChild(this._player);
            this._bullet = new objects.Bullet("BUllet");
            this.addChild(this._bullet);

            this._enemyBullet = new objects.EnemyBullet("BUllet");
            this.addChild(this._enemyBullet);
            this._enemyShip = new objects.EnemyShip("player");
            this.addChild(this._enemyShip);

            this._asteroid = new Array<objects.Asteroid>();
            for (let count = 0; count < 4; count++) {
                this._asteroid.push(new objects.Asteroid("asteroid"));
                this.addChild(this._asteroid[count]);
            }

            this._collision = new managers.Collision();

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Dock51", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);

            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Dock51", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);


            core.stage.addChild(this);
        }

        public Update()
        {
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
            this._collision.check(this._player, this._enemyShip);

            //asteroids update
            this._asteroid.forEach(asteroid => {
                asteroid.giveData(this._player.x, this._player.y);
                this._collision.check(this._player, asteroid);
                asteroid.update();
            });

            this._updateScoreBoard();

            if (core.lives < 1) {
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 5;
            }
        }


}}