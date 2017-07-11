/* module objects {
    export class Bullet extends objects.GameObject {

        player: objects.Player;
       //  asteroid: objects._Asteroid = new objects._Asteroid()
        width: number = 33;
        height: number = 9;
        speed: number = 3;
        collision: boolean = false;
        shoot: boolean = false;
        MX: number;
        MY: number;
        HoldMX: number;
        HoldMY: number;

        constructor() {
            super("./Assets/Sprites/laserRed.png");
            window.addEventListener('click', this.bulletFire.bind(this), false);
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

        private _reset(): void {
            if(this.shoot == false)
            {
                this.x = this.player.x;
                this.y = this.player.y;
                this.collision = false;
            }
        }

        public Start(): void {
            this._reset();
        }

        public Update(): void {
            this._reset();
            this.bulletDespawn();
            this.bulletCol();
            this.bulletMove(this.HoldMX, this.HoldMY);
        }

        public bulletDespawn(): void {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0 || this.collision == true) {
                this.shoot = false;
                this._reset();
            }
        }

        public bulletFire():void
        {
            if(this.shoot == false)
            {
            this.rotation = Math.atan2(this.MY - this.y,this.MX - this.x) * 180 / Math.PI;
            this.HoldMX = this.MX;
            this.HoldMY = this.MY;
            this.shoot = true;
            }
        }

        public bulletMove(posX:number, posY:number): void {
            if(this.shoot == true)
            {
                this.x -= this.HoldMX * 0.05;
                this.y -= this.HoldMY * 0.05;
            }
        }

        public bulletCol()
        {
            if (utility.Vector2.Distance(new utility.Vector2(this.x, this.y), new utility.Vector2(this.asteroid.x, this.asteroid.y)) < 77)
            {
                this.collision = true;
                console.log("hit!");
            }
        }

        public giveData(SX:any, SY:any)
        {
            this.MX = SX;
            this.MY = SY;
        }
    }
} */ 
//# sourceMappingURL=bullet.js.map