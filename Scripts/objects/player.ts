module objects {
  
    export class Player extends objects.GameObject {
         // PRIVATE INSTANCE VARIABLES 

        // PUBLIC PROPERTIES 
        moveLeft: boolean = false;
        moveRight: boolean = false;
        moveUp: boolean = false;
        moveDown: boolean = false;
        speed: number = 5;
        MX:number;
        MY:number;



        // CONSTRUCTORS 
      //creates an instance of player
        constructor(imageString:string) {
            super(imageString)

window.addEventListener('keydown', this.KeyDown.bind(this), false);
window.addEventListener('keyup', this.KeyUp.bind(this), false);

            this.start();
        }

         // This method checks if the object has reached its boundaries
       
        private _checkBounds():void {
            // checkbounds to stop player from going outside

            // check right bounds
            if(this.x >= (640 - (this.width * 0.5))) {
                this.x = (640 - (this.width * 0.5));
            }

            // check left bounds
            if(this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
        }



        // PUBLIC METHODS
        // used to initialize public properties 
        
        public start():void {
            this.y = 430;
        }

        // updates the object's properties every time it's called
       
        public update():void {
            // player to follow mouse
            this.position = new Vector2(this.x, this.y);

this.rotation = Math.atan2(this.MY - this.y, this.MX - this.x) * 180 / Math.PI;

            if(this.moveLeft && this.x >= 0 + 50) {
                this.x -= this.speed;
            }

            if (this.moveRight && this.x <= 640 - 50) {
                this.x += this.speed;
            }
            if(this.moveUp && this.y >= 0 + 50) {
                this.y -= this.speed;
            }

            if(this.moveDown && this.y <= 480 - 50) {
                this.y += this.speed;
            }

                this._checkBounds();

        }

           public KeyDown(event: KeyboardEvent) {

            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                        this.moveUp = true;
                    break;

                case 37: /*left arrow*/
                case 65: /* A Key */
                        this.moveLeft = true;
                    break;

                case 40: /*down arrow*/
                case 83: /* S Key */
                        this.moveDown = true;
                    break;

                case 39: /*right arrow*/
                case 68: /* D Key */
                        this.moveRight = true;
                    break;

                case 81: /* pause */
                    console.log("paused");
                    //add paused/suiside
                    break;
            }
        }

        public KeyUp(event: KeyboardEvent) {
            switch (event.keyCode) {
                case 38: /*up arrow*/
                case 87: /* W Key */
                    this.moveUp = false;
                    break;

                case 37: /*left arrow*/
                case 65: /* A Key */
                    this.moveLeft = false;
                    break;
                    
                case 40: /*down arrow*/
                case 83: /* S Key */
                    this.moveDown = false;
                    break;

                case 39: /*right arrow*/
                case 68: /* D Key */
                    this.moveRight = false;
                    break;

                case 81: /* pause */
                    console.log("unpaused");
                    //add paused/suiside
                    break;
            }
        }
     public giveData(SX:any, SY:any)
        {
            this.MX = SX;
            this.MY = SY;     
        }

}
}