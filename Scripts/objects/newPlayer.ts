module objects {

    export class NewPlayer extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES 

        // PUBLIC PROPERTIES 
        moveLeft: boolean = false;
        moveRight: boolean = false;
        health: number = 100;
        sheild: number = 100;
        speed: number = 5;

        // CONSTRUCTORS 
        //creates an instance of player
        constructor(imageString: string) {
            super(imageString)

            window.addEventListener('keydown', this.KeyDown.bind(this), false);
            window.addEventListener('keyup', this.KeyUp.bind(this), false);
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.start();
        }

        // PUBLIC METHODS
        // used to initialize public properties 

        public start(): void {
            this.y = 300;
            this.x = 400;
        }

        // updates the object's properties every time it's called

        public update(): void {
            // player to follow mouse
            this.position = new Vector2(this.x, this.y);
            console.log(this.rotation);
            //this.rotation = Math.atan2(this.MY - this.y, this.MX - this.x) * 180 / Math.PI;

            if (this.moveLeft) {
                this.rotation -= this.speed;
            }

            if (this.moveRight) {
                this.rotation += this.speed;
            }
        }

        public KeyDown(event: KeyboardEvent) {

            switch (event.keyCode) {

                case 37: /*left arrow*/
                case 65: /* A Key */
                    this.moveLeft = true;
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

                case 37: /*left arrow*/
                case 65: /* A Key */
                    this.moveLeft = false;
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

        public Damage(dam: number) {
            if (this.sheild > 0) {
                this.sheild - dam;
            }
            else {
                if (this.health > 0) {
                    this.health - dam;
                }
                else {
                    //gameover
                }
            }
        }

        public col() {

        }
    }
}