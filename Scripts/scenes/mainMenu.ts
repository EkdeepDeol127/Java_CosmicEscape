module scenes {
export class Menu extends objects.Scene {

//PRIVATE INSTANCE VARIABLES
private _startButton: objects.Button;

constructor(){
    super();
}
public Start():void{

//add button
this._startButton = new objects.Button(
                "startButton", 320, 420, true
            )
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