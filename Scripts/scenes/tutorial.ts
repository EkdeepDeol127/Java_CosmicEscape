module scenes{
export class Tutorial extends objects.Scene{
//PRIVATE VARIABLES
private _sound: createjs.AbstractSoundInstance;
private _backgr: objects.Galaxy;
private _player: objects.Player;
private _playerBullet: objects.Bullet;
private _asteroid: objects.Asteroid;
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
//player bullet
this._playerBullet = new objects.Bullet("playerBullet");
this.addChild(this._playerBullet);

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

}

private _menuButtonClick(event:createjs.MouseEvent):void{
    //switch scene
    core.scene = config.Scene.MENU;
    core.changeScene();
}

private _playButtonClick(event:createjs.MouseEvent):void{
core.scene = config.Scene.PATH;
core.changeScene();
}



}


}