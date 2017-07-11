module objects{
export class Button extends createjs.Sprite{

constructor(imageString: string, x:number, y:number, isCentered:boolean) {
            super(core.textureAtlas, imageString);

// Check if user wants to change regX and regY values to the center 
            if(isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;

            // binds the mouseover and mouseout events to the button object
            this.on("mouseover", this._mouseOver, this);
            this.on("mouseout", this._mouseOut, this)
        }

        private _mouseOver(event:createjs.MouseEvent):void {
            this.alpha = 0.7;
        }


        private _mouseOut(event:createjs.MouseEvent):void {
            this.alpha = 1.0;
        }
    }
}