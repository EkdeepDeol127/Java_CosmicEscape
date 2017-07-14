module scenes{
export class Tutorial extends objects.Scene{

private _backgr: objects.Background;
private _player : objects.GameObject;
private _backButton: objects.Button;

//creates an instance on Tutorial
constructor (){
super();
}

public Start():void{
//adds background
this._backgr = new objects.Background("tutorial");
this.addChild(this._backgr);


}



}


}