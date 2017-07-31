module objects {
    
    export class galaxyPath extends createjs.Bitmap {

        private speed:number;
        private width: number = 800;
        private height: number = 1422;
        private radians: number;
      
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));
            this.x = 400;
            this.y = 300;
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
            this.y = 400;
            this.x = 300;
        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {
            if(this.y >= 700 || this.x >= 900 || this.y <= -100 || this.x <= -100) {
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
            this.speed = .8; // 5px per frame down
        }

        // This method updates the object's properties every time it's called
     
        public update():void {
            //this._checkBounds();
            this.galaxyMove();
        }

        public galaxyMove()
        {
            this.radians = this.rotation * (Math.PI / 180);
            this.x -= this.speed * Math.cos(this.radians);
            this.y -= this.speed * Math.sin(this.radians);
        }

        public giveData(rot: number)
        {
            this.rotation = rot;
        }
    }
}