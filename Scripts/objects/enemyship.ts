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

        constructor(imageString: string) {
            super(imageString)
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.Start();
        }

        public _reset()
        {
            this.x = 200;//(Math.random() * 640); //use this to tell where to spawn 
            this.y = 200;
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

        public checkPlayerLoc()
        {
            this.HoldplayerX = this.playerX;
            this.HoldplayerY = this.playerY;
        }

        public enemyShipMove()
        {
            if(this.check == false)
            {
                this.checkPlayerLoc();
                this.check = true;
            }
            else
            {
                if(this.inRange == false)
                {
                //this.x -= this.HoldplayerX * 0.05;//change to have radius around player
                //this.y -= this.HoldplayerY * 0.05;
                }
                else
                {
                    //spawnbullet
                }
            }
        }

        public playerRange()
        {
            if (this.x <= this.playerX && this.y <= this.playerY)
            {
                this.inRange = true;
            }
            //add a reverse
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
