module objects {
    export class EnemyBullet extends objects.GameObject {

        range: boolean = false;
        //speed: number = 3;
        shoot: boolean = false;
        enemyShipX: number;
        enemyShipY: number;
        playerX: number;
        playerY: number;
        HoldplayerX: number;
        HoldplayerY: number;
        timer: number = 3;
   
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
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0) {
                this.shoot = false;
                this._reset();
            }
        }

        public bulletFire():void
        {
            this.timer -= 0.1;
            if(this.range == true && this.shoot == false && this.timer <= 0)
            {
                 this.timer = 3;
                 this.shoot = true;
                 this.HoldplayerX = this.playerX;
                 this.HoldplayerY = this.playerY;
                 this.rotation = Math.atan2(this.HoldplayerY - this.y,this.HoldplayerX - this.x) * 180 / Math.PI;
            }
        }

        public bulletMove() {
            if(this.range == true || this.shoot == true)
            {
                this.x -= this.HoldplayerX * 0.05;
                this.y -= this.HoldplayerY * 0.05;
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