module scenes {
export class Menu extends objects.Scene {

//PRIVATE INSTANCE VARIABLES
private _tutorialButton: objects.Button;
private _startButton: objects.Button;
private _creditsButton: objects.Button;
private _settingsButton: objects.Button;


private _pathButton: objects.Button; //for devlopment only

private _backgr: objects.Background;
private _themeSound: createjs.AbstractSoundInstance;

//creates an instance of mainMenu
constructor(){
    super();
 
}
public Start():void{

this._themeSound = createjs.Sound.play("menuTheme");
this._themeSound.loop = -1;
      
//add background
this._backgr = new objects.Background("mainPage");
this.addChild(this._backgr);


                        //BUTTONS
//add start  button
this._startButton = new objects.Button("playButton",400,350, true);
this.addChild(this._startButton);
//startbutton event listener
this._startButton.on("click",this._startButtonClick,this);
//add settings  button
this._settingsButton = new objects.Button("setButton",400,450, true);
this.addChild(this._settingsButton);
//startbutton event listener
this._settingsButton.on("click",this._settButtonClick,this);
//add tutorial button
this._tutorialButton = new objects.Button("tutorialButton", 400, 400, true);
this.addChild(this._tutorialButton);
//tutButton listener
this._tutorialButton.on("click", this._tutButtonClick, this);
//add credits  button
this._creditsButton = new objects.Button("creditsButton",400,500, true);
this.addChild(this._creditsButton);
//startbutton event listener
this._creditsButton.on("click",this._credButtonClick,this);


//add development buttin
this._pathButton = new objects.Button("againButton",150, 450, true);
this.addChild(this._pathButton);
//path button listener
this._pathButton.on("click", this._pathButtonClick, this);

//add this scene to GLOBAL scene container
core.stage.addChild(this);
}

private _startButtonClick(event:createjs.MouseEvent):void{
    this._themeSound.stop();
    core.scene = config.Scene.PLAY;
    core.changeScene();
}

private _tutButtonClick(event:createjs.MouseEvent):void{
this._themeSound.stop();
core.scene = config.Scene.TUTORIAL;
core.changeScene();
}

private _settButtonClick(event:createjs.MouseEvent):void{
this._themeSound.stop();
core.scene = config.Scene.SETTINGS;
core.changeScene();
}

private _credButtonClick(event:createjs.MouseEvent):void{
this._themeSound.stop();
core.scene = config.Scene.CREDITS;
core.changeScene();
}

private _pathButtonClick(event:createjs.MouseEvent):void{
this._themeSound.stop();
core.scene = config.Scene.PATH;
core.changeScene();
}

}

}