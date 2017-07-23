module objects {
    
    export class galaxyPath extends createjs.Bitmap {

        private _dy:number;
        private timer: number;
        private width: number = 800;
        private height: number = 1280;
      
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
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
            this.timer = 10;
            this._dy = .8; // 5px per frame down
        }

        // This method updates the object's properties every time it's called
     
        public update():void {
            this._checkBounds();
            this.galaxyMove();
        }

        public galaxyMove()
        {
            console.log(this.rotation);
            this.y += this._dy;
            this.rotation += this._dy;
        }
    }
}