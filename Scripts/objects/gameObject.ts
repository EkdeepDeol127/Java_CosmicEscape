module objects {
    // This class represents a generic Game Object used in the game
  
    export abstract class GameObject extends createjs.Sprite {
         // PRIVATE INSTANCE VARIABLES 
        private _width:number;
        private _height:number;
        private _name:string;
        private _position:Vector2;
        private _isColliding:boolean;
        public sound:createjs.AbstractSoundInstance;
        public anim:createjs.SpriteSheetAnimation;

        // PUBLIC PROPERTIES 

        get width():number {
            return this._width;
        }

        set width(newWidth:number) {
            this._width = newWidth;
        }

        get halfWidth():number {
            return this._width * 0.5;
        }

        get height():number {
            return this._height;
        }

        set height(newHeight:number) {
            this._height = newHeight;
        }

        get halfHeight():number{
            return this._height * 0.5;
        }

        get name():string {
            return this._name;
        }

        set name(newName:string) {
            this._name = newName;
        }

        get position():Vector2 {
            return this._position;
        }

        set position(newPosition:Vector2) {
            this._position = newPosition;
        }


        get isColliding():boolean {
            return this._isColliding;
        }

        set isColliding(newState:boolean) {
            this._isColliding = newState;
        }

        
        
        // CONSTRUCTORS 
        // Creates an instance of the GameObject.
      
        constructor(imageString:string) {
            super(core.textureAtlas, imageString)
            
            this._initialize(imageString);

            this.start();
        }
        
        private _initialize(imageString:string):void {
            this.name = imageString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.position = new Vector2(this.x, this.y);
            this.isColliding = false;
        }



      // used to initialize public properties and private instance variables
      
        public start():void {
            
        }

         //updates the object's properties every time it's called
     
        public update():void {
           
        }


    }
}