module scenes{
export class Tutorial extends objects.Scene{
//PRIVATE VARIABLES
private _backgr: objects.Galaxy;
private _player: objects.Player;

//for development purposes
private _menuButton: objects.Button;
private _playButton: objects.Button;

//creates an instance on Tutorial
constructor (){
super();
}

public Start():void{
    //background
this._backgr = new objects.Galaxy("galaxy");
this.addChild(this._backgr);

//player
this._player = new objects.Player("player");
this.addChild(this._player);

//development buttons
//add start  button
this._menuButton = new objects.Button("backButton",370,300, true);
this.addChild(this._menuButton);
//startbutton event listener
this._menuButton.on("click",this._menuButtonClick,this);

//add start  button
this._playButton = new objects.Button("playButton",370,350, true);
this.addChild(this._playButton);
//startbutton event listener
this._playButton.on("click",this._playButtonClick,this);

core.stage.addChild(this);

}

public Update():void{
this._backgr.update();
this._player.update();

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