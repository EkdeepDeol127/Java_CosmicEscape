
module scenes {
export class Play extends objects.Scene {
//PRIVATE INSTANCE VARIABLES
private _player: objects.Player;
private _asteroid: objects.Asteroid[];
private _bullet: objects.Bullet;
private _enemyBullet: objects.EnemyBullet;

private _enemyShip: objects.EnemyShip;
private _collision: managers.Collision;
private _scoreLabel: objects.Label;
private _livesLabel: objects.Label;


//button for checking purposes
private _button: objects.Button;

SX: number = this._player.x;
SY: number = this._player.y;

//creates an instance of Play
constructor(){
    super();
}

private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }

public Start ():void {

//enemy object

this._enemyBullet = new objects.EnemyBullet("bullet");
this.addChild(this._enemyBullet);
this._bullet = new objects.Bullet("bullet");
this.addChild(this._bullet);
this._enemyShip = new objects.EnemyShip("playerA");
this.addChild(this._enemyShip);
this._player = new objects.Player("playerA");
this.addChild(this._player);

//asteroid array
this._asteroid = new Array<objects.Asteroid>();
for (let count = 0; count <3; count++){
this._asteroid.push(new objects.Asteroid("asteroidA"));
this.addChild(this._asteroid[count]);
}

this._collision = new managers.Collision();

//score label
this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Dock51", "#FFFF00", 350, 5, false);
this.addChild(this._scoreLabel);

this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Dock51", "#FFFF00", 10, 5, false);
this.addChild(this._livesLabel);


//checking purposes
this._button = new objects.Button("playButton",250,250, true);
this.addChild(this._button);
//listener
this._button.on("click", this._buttonClick,this);
//

core.stage.addChild(this);

}
//checking purposes
 private _buttonClick(event:createjs.MouseEvent):void {
core.scene = config.Scene.OVER;
core.changeScene(); }


public Update(): void {

    this._player.giveData(core.stage.mouseX, core.stage.mouseY);
    this._player.update();
    this._bullet.giveData(this.SX, this.SY, this._player.x, this._player.y);
    this._bullet.update();
    //this._asteroid.giveData(this._player.x, this._player.y);
    //this._asteroid.update();
    this._enemyShip.giveData(this._player.x, this._player.y);
    this._enemyShip.update();
    this._enemyBullet.giveData(this._player.x, this._player.y, this._enemyShip.x, this._enemyShip.y, this._enemyShip.inRange);
    this._enemyBullet.update();

this._bullet.update();
this._enemyShip.update();
this._enemyBullet.update();
this._player.update();
this._collision.check(this._player, this._enemyShip);
this._collision.check(this._player,this._enemyBullet);
//this._collision.playe(this._player, this._enemy);

//asteroid update
this._asteroid.forEach(asteroid => {
    asteroid.update();
    this._collision.check(this._player, asteroid);
   // this._collision.playe(this._player, asteroid);
});

this._updateScoreBoard();

if (core.lives < 1){
    core.scene = config.Scene.OVER;
    core.changeScene();
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