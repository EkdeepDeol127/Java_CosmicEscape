module objects {
    export class EnemyBullet extends objects.GameObject {

        range: boolean = false;
        speed: number = 30;
        radians: number;
        shoot: boolean = false;
        enemyShipX: number;
        enemyShipY: number;
        playerX: number;
        playerY: number;
        HoldplayerX: number;
        HoldplayerY: number;
        timer: number = 8;
   
        constructor(imageString:string) {
            super(imageString)
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.Start();
        }

        private _reset(): void {
            if(this.shoot == false)
            {
                this.x = this.enemyShipX;
                this.y = this.enemyShipY;
            }
        }

        public Start(): void {
            this._reset();
        }

        public update(): void {

            this._reset();
            this.bulletDespawn();
            this.bulletFire();
            this.bulletMove();
        }

        public bulletDespawn(): void {
            if (this.x >= 800 || this.x <= 0 || this.y >= 600 || this.y <= 0) {
                this.shoot = false;
                this._reset();
            }
        }

        public bulletFire():void
        {
            this.timer -= 0.1;
            if(this.range == true && this.shoot == false && this.timer <= 0)
            {
                 this.timer = 8;
                 this.shoot = true;
                 this.HoldplayerX = this.playerX;
                 this.HoldplayerY = this.playerY;
                 this.rotation = Math.atan2(this.HoldplayerY - this.y,this.HoldplayerX - this.x) * 180 / Math.PI;
            }
        }

        public bulletMove() {
            if(this.range == true || this.shoot == true)
            {
                this.radians = this.rotation * (Math.PI / 180);
                this.x += this.speed * Math.cos(this.radians);
                this.y += this.speed * Math.sin(this.radians);
            }
        }

        public col()
        {

        }

        public giveData(PX:any, PY:any, EX:number, EY:number, IR:boolean)
        {
            this.range = IR;
            this.playerX = PX;
            this.playerY = PY;
            this.enemyShipX = EX;
            this.enemyShipY = EY;
        }
    }
}