module objects {
    export class EnemyShip extends objects.GameObject {

        playerX: number;
        playerY: number;
        HoldplayerX: number;
        HoldplayerY: number;
        check: boolean = false;
        inRange:boolean = false;
        dead: boolean = false;
        health: number = 20;
        sheild: number = 30;
        xSpeed: number = 0;
        ySpeed: number = 0;

        constructor(imageString: string) {
            super(imageString)
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.Start();
        }

        public _reset()
        {
            this.x = 500;//(Math.random() * 640); //use this to tell where to spawn 
            this.y = 300;
        }

        public Start(): void {
            this._reset();
        }

        public update()
        {
            this.enemtShipDespawn();
            this.playerRange();
            this.enemyShipMove();
        }

        public enemtShipDespawn(): void {
            if (this.x >= 740 || this.x <= -100 || this.y >= 580 || this.y <= -200 || this.dead == true) {
                this.check = false;
                this.inRange = false;
                this.dead = false;
                this._reset();
            }
        }


        public enemyShipMove()
        {
                if(this.inRange == false)
                {
                    this.rotation = Math.atan2(this.playerY - this.y,this.playerX - this.x) * 180 / Math.PI;
                    this.xSpeed = (this.x - this.playerX) / 3;
                    this.ySpeed = (this.y - this.playerY) / 3;
                    this.ySpeed =  this.ySpeed *(2.5 / Math.sqrt(this.xSpeed * this.xSpeed + this.ySpeed * this.ySpeed));
                    this.xSpeed = this.xSpeed *(2.5 / Math.sqrt(this.xSpeed * this.xSpeed + this.ySpeed * this.ySpeed));
                    this.x -= this.xSpeed;//change
                    this.y -= this.ySpeed;
                }
        }

        public playerRange()
        {
            if (this.x <= (this.playerX + 150) && this.y <= (this.playerY + 150))
            {
                this.inRange = true;
            }
            else
            {
                this.inRange = false;
            }
        }

        public Damage(dam:number)
        {
            if(this.sheild > 0)
            {
                this.sheild - dam;
            }
            else
            {
                if(this.health > 0)
                {
                    this.health - dam;
                }
                else
                {
                    this.dead = true;
                }
            }
        }

        public col()
        {
            
        }

        public giveData(PX:number, PY:number)
        {
            this.playerX = PX;
            this.playerY = PY;
        }
    }
}
