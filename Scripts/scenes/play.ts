
module scenes {
export class Play extends objects.Scene {
//PRIVATE INSTANCE VARIABLES
private _player: objects.Player;
private _bullet: objects.Bullet;
private _asteroid: objects.Asteroid;
private _enemyShip: objects.EnemyShip;
private _enemyBullet: objects.EnemyBullet;

//button for checking purposes
private _button: objects.Button;

SX: number = this._player.x;
SY: number = this._player.y;

//creates an instance of Play
constructor(){
    super();
}


public Start ():void {

this._bullet = new objects.Bullet("bullet");
this.addChild(this._bullet);
this._asteroid = new objects.Asteroid("asteroidA");
this.addChild(this._asteroid);
this._enemyBullet = new objects.EnemyBullet("bullet");
this.addChild(this._enemyBullet);
this._enemyShip = new objects.EnemyShip("playerA");
this.addChild(this._enemyShip);
this._player = new objects.Player("playerA");
this.addChild(this._player);

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
// 

public Update():void {
    
    this._player.giveData(core.stage.mouseX, core.stage.mouseY);
    this._player.update();
    this._bullet.giveData(this.SX, this.SY, this._player.x, this._player.y);
    this._bullet.update();
    this._asteroid.giveData(this._player.x, this._player.y);
    this._asteroid.update();
    this._enemyShip.giveData(this._player.x, this._player.y);
    this._enemyShip.update();
    this._enemyBullet.giveData(this._player.x, this._player.y, this._enemyShip.x, this._enemyShip.y, this._enemyShip.inRange);
    this._enemyBullet.update();

    
    /*   if (core.lives < 1) {
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }  */
}

}

}