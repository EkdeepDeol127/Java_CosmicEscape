module scenes {
export class Over extends objects.Scene {

//PRIVATE INSTANCE VARIABLES

private _mainMenu: objects.Button;
private _backgr: objects.Background;

//creates an instance of mainMenu
constructor(){
    super();
}
public Start():void{
//add background
this._backgr = new objects.Background("gameOver");
this.addChild(this._backgr);

//add Main Menu button
this._mainMenu = new objects.Button("backButton",370,200, true);
this.addChild(this._mainMenu);
//mainMenu button event listener
this._mainMenu.on("click",this._mainMenuClick,this);


//add this scene to GLOBAL scene container
core.stage.addChild(this);
}

private _mainMenuClick(event:createjs.MouseEvent):void{
    //switch scene
    core.scene = config.Scene.MENU;
    core.changeScene();
}


}

}