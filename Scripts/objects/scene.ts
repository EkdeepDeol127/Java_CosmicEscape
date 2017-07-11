/// <reference path="../core/game.ts"/>

module objects {

export abstract class Scene extends createjs.Container{
constructor () {
    super();

    this.Start();
}
public Start():void {
    core.stage.addChild(this);
}

public Update():void{

}

}

}