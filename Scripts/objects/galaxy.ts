module objects {
    
    export class Galaxy extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES 
        private _dy:number;

        // CONSTRUCTORS 
      
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));

            this.start();
        }

        // PRIVATE METHODS 
        /**
         * Resets the object outside of the viewport
         * 
         * @private
         * @method _reset
         * @returns {void}
         */
        private _reset():void {
            this.y = -700;
        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {
            if(this.y >= 0) {
                this._reset();
            }
        }
        
        // PUBLIC METHODS 

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start():void {
            this._reset();
            this._dy = 2; // 5px per frame down
        }

        // This method updates the object's properties every time it's called
     
        public update():void {
            this.y += this._dy;
            this._checkBounds();
        }
    }
}