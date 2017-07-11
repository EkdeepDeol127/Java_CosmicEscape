module scenes {
export class Play extends objects.Scene {
//PRIVATE INSTANCE VARIABLES
private _player: objects.Player;

//creates an instance of Play
constructor(){
    super();
}


public Start ():void {

this._player = new objects.Player("plane");
this.addChild(this._player);

core.stage.addChild(this);


}

public Update():void {
    
    this._player.giveData(core.stage.mouseX, core.stage.mouseY);
    this._player.update();

    
    /*   if (core.lives < 1) {
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }  */
}

}

}