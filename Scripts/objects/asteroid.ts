module objects {

    export class Asteroid extends objects.GameObject {
        private ran: number;
        private dead: boolean;
        private playerX: number;
        private playerY: number;
        private speed: number = 3;
        private radians: number;

        constructor(imageString: string) {
            super(imageString);
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.playerX = 400;
            this.playerY = 300;
            this.start();
        }

        private _reset(): void {
            this.ran = (Math.random() * 4) + 1;
            switch (this.ran) {
                case 1://top
                        this.x = Math.floor((Math.random() * 780) + 20); // horizontal drift
                        this.y = -100;
                    break;

                case 2://right
                        this.y = Math.floor((Math.random() * 580) + 20); // vertical speed
                        this.x = 900;
                    break;

                case 3://left
                        this.y = Math.floor((Math.random() * 580) + 20); // vertical speed
                        this.x = -100;
                    break;

                case 4://bottom
                        this.x = Math.floor((Math.random() * 780) + 20); // horizontal drift
                        this.y = 700;
                    break;
            }
            this.rotation = Math.atan2(this.playerY - this.y, this.playerX - this.x) * 180 / Math.PI;
            console.log(this.playerY);
            console.log(this.playerX);
            console.log(this.y);
            console.log(this.x);
        }

        private asteroidMove() {
            this.radians = this.rotation * (Math.PI / 180);
            this.x += this.speed * Math.cos(this.radians);
            this.y += this.speed * Math.sin(this.radians);
        }

        private _checkBounds(): void {
            if (this.x >= 1000 || this.x <= -200 || this.y >= 800 || this.y <= -200 || this.dead == true) {
                this._reset();
                console.log("reset");
            }
        }

        public start(): void {
            this._reset();
        }

        public update(): void {
            this._checkBounds();
            this.asteroidMove();
        }

        public giveData(PX: number, PY: number) {
            this.playerX = PX;
            this.playerY = PY;
        }
    }
}