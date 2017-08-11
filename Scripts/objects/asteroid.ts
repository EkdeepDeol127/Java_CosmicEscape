module objects {

    export class Asteroid extends objects.GameObject {
        public ran: number;
        public dead: boolean;
        private playerX: number;
        private playerY: number;
        private speed: number = 5;
        private radians: number;

        constructor(imageString: string) {
            super(imageString);
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.playerX = 400;//temp
            this.playerY = 300;//temp
            this.start();
        }

        public _reset(): void {
         
            this.gotoAndPlay("asteroid");
            this.ran = Math.round((Math.random() * 4) + 1);
            switch (this.ran) {
                case 1://top
                        this.x = (Math.random() * 780) + 20; 
                        this.y = -80;
                    break;

                case 2://right
                        this.y = (Math.random() * 580) + 20; 
                        this.x = 880;
                    break;

                case 3://left
                        this.y = (Math.random() * 580) + 20; 
                        this.x = -80;
                    break;

                case 4://bottom
                        this.x = (Math.random() * 780) + 20; 
                        this.y = 680;
                    break;
            }
            this.rotation = Math.atan2(this.playerY - this.y, this.playerX - this.x) * 180 / Math.PI;
        }

        private asteroidMove() {
            this.radians = this.rotation * (Math.PI / 180);
            this.x += this.speed * Math.cos(this.radians);
            this.y += this.speed * Math.sin(this.radians);
        }

        private _checkBounds(): void {
            if (this.x >= 900 || this.x <= -100 || this.y >= 700 || this.y <= -100) {
                this._reset();
            }
        }

        public start(): void {
            this._reset();
        }

        public update(): void {
            this.position = new Vector2(this.x, this.y); //for collision
            this._checkBounds();
            this.asteroidMove();
        }

        public giveData(PX: number, PY: number) {
            this.playerX = PX;
            this.playerY = PY;
        }
    }
}