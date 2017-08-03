module objects {

    export class NewAsteroid extends objects.GameObject {
        private ran: number;
        private dead: boolean;
        private playerX: number;
        private playerY: number;
        private playerRot: number;
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

        private _reset(): void {
            if(Math.sin(this.playerRot) <= Math.sin(-45))//up
                {
                    this.x = (Math.random() * 780) + 20; 
                    this.y = -80;
                    //console.log(Math.sin(this.playerRot), Math.sin(-45));
                }
            else if(Math.sin(this.playerRot) >= Math.sin(45))//bottom
                {
                    this.x = (Math.random() * 780) + 20; 
                    this.y = 680;
                    //console.log(Math.sin(this.playerRot), Math.sin(45));
                }
            else if(Math.cos(this.playerRot) > Math.cos(-45))//right
                {
                    this.y = (Math.random() * 580) + 20; 
                    this.x = 880;
                    //console.log(Math.sin(this.playerRot), Math.cos(-45));
                }
            else if(Math.cos(this.playerRot) < Math.cos(45))//left
                {
                    this.y = (Math.random() * 580) + 20; 
                    this.x = -80;
                    //console.log(Math.sin(this.playerRot), Math.cos(45));
                }

            this.rotation = Math.atan2(this.playerY - this.y, this.playerX - this.x) * 180 / Math.PI;
        }

        private asteroidMove() {
            this.radians = this.rotation * (Math.PI / 180);
            this.x += this.speed * Math.cos(this.radians);
            this.y += this.speed * Math.sin(this.radians);
        }

        private _checkBounds(): void {
            if (this.x >= 900 || this.x <= -100 || this.y >= 700 || this.y <= -100 || this.dead == true) {
                this._reset();
            }
        }

        public start(): void {
            this._reset();
        }

        public update(): void {
            this._checkBounds();
            this.asteroidMove();
        }

        public giveData(PX: number, PY: number, rot: number) {
            this.playerX = PX;
            this.playerY = PY;
            this.playerRot = rot;
        }

        public col()
        {
            
        }
    }
}