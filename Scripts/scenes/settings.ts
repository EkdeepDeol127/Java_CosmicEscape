module scenes{
    export class Settings extends objects.Scene{


//private instance variables
private _backButt: objects.Button;
private _backgr: objects.Background;

//create an instance of credits
constructor(){
    super();
}

public Start():void{
//add background 
this._backgr = new objects.Background("galaxy");
this.addChild(this._backgr);
//add button
this._backButt = new objects.Button("backButton",370,200,true);
this.addChild(this._backButt);
this._backButt.on("click", this._buttClick,this);

core.stage.addChild(this);
}

private _buttClick(event:createjs.MouseEvent):void{
    //switch scene
core.scene = config.Scene.MENU;
core.changeScene();
}

    }
}