
module scenes {
export class Play extends objects.Scene {
//PRIVATE INSTANCE VARIABLES
private _player: objects.Player;
private _bullet: objects.Bullet;
private _asteroid: objects.Asteroid;
private _enemyShip: objects.EnemyShip;
SX: number = this._player.x;
SY: number = this._player.y;

//creates an instance of Play
constructor(){
    super();
}


public Start ():void {

this._player = new objects.Player("playerA");
this.addChild(this._player);
this._bullet = new objects.Bullet("bullet");
this.addChild(this._bullet);
this._asteroid = new objects.Asteroid("asteroidA");
this.addChild(this._asteroid);
this._enemyShip = new objects.EnemyShip("star1");
this.addChild(this._enemyShip);

core.stage.addChild(this);

}

public Update():void {
    
    this._player.giveData(core.stage.mouseX, core.stage.mouseY);
    this._player.update();
    this._bullet.giveData(this.SX, this.SY);
   this._bullet.update();
    this._asteroid.giveData(this._player.x, this._player.y);
    this._asteroid.update();
    this._enemyShip.giveData(this._player.x, this._player.y);
    this._enemyShip.update();

    
    /*   if (core.lives < 1) {
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }  */
}

}

}