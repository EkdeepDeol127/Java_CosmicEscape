module scenes {
export class Menu extends objects.Scene {

//PRIVATE INSTANCE VARIABLES
private _tutorialButton: objects.Button;
private _startButton: objects.Button;
private _backgr: objects.Background;
private _themeSound: createjs.AbstractSoundInstance;

//creates an instance of mainMenu
constructor(){
    super();
}
public Start():void{
//sound
this._themeSound = createjs.Sound.play("mainTheme");
this._themeSound.loop = -1

//add background
this._backgr = new objects.Background("mainPage");
this.addChild(this._backgr);

//add start  button
this._startButton = new objects.Button("playButton",290,200, true);
this.addChild(this._startButton);
//startbutton event listener
this._startButton.on("click",this._startButtonClick,this);

//add tutorial button
this._tutorialButton = new objects.Button("tutButton", 290, 250, true);
this.addChild(this._startButton);
//tutButton listener
this._tutorialButton.on("click", this._tutButtonClick, this);


//add this scene to GLOBAL scene container
core.stage.addChild(this);
}

private _startButtonClick(event:createjs.MouseEvent):void{
    
    
    //switch scene
    core.scene = config.Scene.PLAY;
    core.changeScene();
}

private _tutButtonClick(event:createjs.MouseEvent):void{
core.scene = config.Scene.TUTORIAL;
core.changeScene();

}

}

}