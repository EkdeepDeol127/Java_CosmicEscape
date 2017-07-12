module objects {
    export class Asteroid extends objects.GameObject {

        playerX: number;
        playerY: number;
        HoldplayerX: number;
        HoldplayerY: number;
        check: boolean = false;
        dead: boolean = false;
        health: number = 20;

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
            this.asteroidDespawn();
            this.asteroidMove();
        }

        public asteroidDespawn(): void {
            if (this.x >= 740 || this.x <= -100 || this.y >= 580 || this.y <= -200 || this.dead == true) {
                this.check = false;
                this.dead = false;
                this._reset();
            }
        }

        public checkPlayerLoc()
        {
            this.HoldplayerX = this.playerX;
            this.HoldplayerY = this.playerY;
        }

        public asteroidMove()
        {
            if(this.check == false)
            {
                this.checkPlayerLoc();
                this.check = true;
            }
            else
            {
                this.x -= this.HoldplayerX * 0.05;
                this.y -= this.HoldplayerY * 0.05;
            }
        }

        public Damage(dam:number)
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
