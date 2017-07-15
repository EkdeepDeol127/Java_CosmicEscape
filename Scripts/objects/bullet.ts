  module objects {
    export class Bullet extends objects.GameObject {

        speed: number = 30;
        shoot: boolean = false;
        MX: number;
        MY: number;
        HoldMX: number;
        HoldMY: number;
        playerX: number;
        playerY: number;
        radians: number;
        delay: boolean = true;//so the first click to start game does not trigger bullet
   
        constructor(imageString:string) {
            super(imageString)

            window.addEventListener('click', this.bulletFire.bind(this), false);
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.start();
        }

        private _reset(): void {
            if(this.shoot == false)
            {
                this.x = this.playerX;
                this.y = this.playerY;
            }
        }

        public Start(): void {
            this._reset();
        }

        public update(): void {
            this._reset();
            this.bulletDespawn();
            this.bulletMove(this.HoldMX, this.HoldMY);
        }

        public bulletDespawn(): void {
            if (this.x >= 640 || this.x <= 0 || this.y >= 480 || this.y <= 0) {
                this.shoot = false;
                this._reset();
            }
        }

        public bulletFire():void
        {
            if(this.shoot == false && this.delay == false)
            {
            this.HoldMX = this.MX;
            this.HoldMY = this.MY;
            this.rotation = Math.atan2(this.HoldMY - this.y,this.HoldMX - this.x) * 180 / Math.PI;
            this.shoot = true;
            }
            this.delay = false;
        }

        public bulletMove(posX:number, posY:number): void {
            if(this.shoot == true)
            {
                this.radians = this.rotation * (Math.PI / 180);
                this.x += this.speed * Math.cos(this.radians);
                this.y += this.speed * Math.sin(this.radians);
            }
        }

        public col()
        {
            
        }

        public giveData(SX:any, SY:any, PX:number, PY:number)
        {
            this.MX = SX;
            this.MY = SY;
            this.playerX = PX;
            this.playerY = PY;
        }
    }
} 