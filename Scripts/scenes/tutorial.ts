module scenes{
export class Tutorial extends objects.Scene{
//PRIVATE VARIABLES
private _sound: createjs.AbstractSoundInstance;
private _backgr: objects.Galaxy;
private _player: objects.Player;
private _playerBullet: objects.Bullet;
private _asteroid: objects.Asteroid[];
private _enemy: objects.EnemyShip;


private _collision: managers.Collision;
private _scoreLabel: objects.Label;
private _livesLabel: objects.Label;
private _instLabel: objects.Label;

//for development purposes
private _menuButton: objects.Button;
private _playButton: objects.Button;

//creates an instance on Tutorial
constructor (){
super();
}

private _scoreUpdate(){
    this._scoreLabel.text = "Score: " + core.score;
    this._livesLabel.text = "Lives: " + core.lives;
}

public Start():void{
 //sound
this._sound = createjs.Sound.play("menuTheme");
this._sound.loop = -1;
//background
this._backgr = new objects.Galaxy("tutorial");
this.addChild(this._backgr);

//player
this._player = new objects.Player("player");
this.addChild(this._player);
this._playerBullet = new objects.Bullet("playerBullet");
this.addChild(this._playerBullet);

//asteroids
this._asteroid = new Array<objects.Asteroid>();
for(let count = 0; count<1; count++){
this._asteroid.push(new objects.Asteroid("asteroid"));
this.addChild(this._asteroid[count]);
}

this._collision = new managers.Collision();

this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "monospace", "#FFFF00", 260, 5, false);
this.addChild(this._scoreLabel);

this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "monospace", "#FFFF00", 20, 5, false);
this.addChild(this._livesLabel);


//development buttons
this._menuButton = new objects.Button("backButton",370,300, true);
this.addChild(this._menuButton);
//startbutton event listener
this._menuButton.on("click",this._menuButtonClick,this);
this._playButton = new objects.Button("playButton",370,350, true);
this.addChild(this._playButton);
//startbutton event listener
this._playButton.on("click",this._playButtonClick,this);

core.stage.addChild(this);

}

public Update():void{
this._backgr.update();
this._player.giveData(core.stage.mouseX, core.stage.mouseY);
this._player.update();
this._playerBullet.giveData(core.stage.mouseX, core.stage.mouseY, this._player.x, this._player.y);
this._playerBullet.update();
this._collision.update();

//asteroid update
this._asteroid.forEach(asteroid =>{
asteroid.giveData(this._player.x, this._player.y);
this._collision.checkPlayer(this._player, asteroid);
this._collision.checkEnemy(this._playerBullet, asteroid);
if(this._collision.checkEnemy)
asteroid.update();

})

this._scoreUpdate();

  if (core.lives < 1) {
                core.scene = config.Scene.OVER;
                core.changeScene();
                core.lives = 50;
                core.score = 0;
            }
}

private _menuButtonClick(event:createjs.MouseEvent):void{
    this._sound.stop();
    core.scene = config.Scene.MENU;
    core.changeScene();
}

private _playButtonClick(event:createjs.MouseEvent):void{
this._sound.stop();
core.scene = config.Scene.PATH;
core.changeScene();
}



}


}