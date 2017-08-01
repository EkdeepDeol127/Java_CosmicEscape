module objects {
export class Notice extends createjs.Text {

    constructor(
private labelStr: string,
private fontSize: string,
private fontFamily: string,
private fontColour: string,
x: number,
y: number,
isCentered: boolean,
private timeS: number,
private timeE: number
){
super(labelStr, (fontSize + " " + fontFamily), fontColour)

if (isCentered){
    this.regX = this.getMeasuredWidth() * 0.5;
    this.regY = this.getMeasuredHeight() * 0.5;

}

//notice coordinates
this.x = x;
this.y = y;


}
}
}