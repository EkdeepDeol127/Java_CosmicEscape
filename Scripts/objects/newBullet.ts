  module objects {
    export class NewBullet extends objects.GameObject {

        speed: number = 30;
        shoot: boolean = false;
        HoldRot:number;
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
            this.bulletMove(this.playerX, this.playerY);
        }

        public bulletDespawn(): void {
            if (this.x >= 800 || this.x <= 0 || this.y >= 600 || this.y <= 0) {
                this.shoot = false;
                this._reset();
            }
        }

        public bulletFire():void
        {
            if(this.shoot == false && this.delay == false)
            {
            this.rotation = this.HoldRot;
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

        public giveData(rot: number, PX:number, PY:number)
        {
            this.playerX = PX;
            this.playerY = PY;
            this.HoldRot = rot;
        }
    }
} 