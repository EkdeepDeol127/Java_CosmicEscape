module scenes {
export class Menu extends objects.Scene {

//PRIVATE INSTANCE VARIABLES

private _startButton: objects.Button;
private _backgr: objects.Background;

//creates an instance of mainMenu
constructor(){
    super();
}
public Start():void{
//add background
this._backgr = new objects.Background("mainPage");
this.addChild(this._backgr);

//add button
this._startButton = new objects.Button("playButton",250,250, true);
this.addChild(this._startButton);
//startbutton event listener
this._startButton.on("click",this._startButtonClick,this);
//add this scene to GLOBAL scene container
core.stage.addChild(this);
}

private _startButtonClick(event:createjs.MouseEvent):void{
    //switch scene
    core.scene = config.Scene.PLAY;
    core.changeScene();
}

}

}