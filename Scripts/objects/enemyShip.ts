module objects {
    export class EnemyShip extends objects.GameObject {

        playerX: number;
        playerY: number;
        check: boolean = false;
        inRange:boolean = false;
        dead: boolean = false;
        health: number = 20;
        sheild: number = 40;
        speed: number = 3;
        radians: number;
        dist: number;
        private ran: number;

        constructor(imageString: string) {
            super(imageString)
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.Start();
        }

        public _reset()
        {
            this.ran = Math.floor((Math.random() * 4) + 1);
            switch (this.ran) {
                case 1://top
                        this.x = (Math.random() * 780) + 20; 
                        this.y = -80;
                    break;

                case 2://right
                        this.y = (Math.random() * 580) + 20; 
                        this.x = 880;
                    break;

                case 3://left
                        this.y = (Math.random() * 580) + 20; 
                        this.x = -80;
                    break;

                case 4://bottom
                        this.x = (Math.random() * 780) + 20; 
                        this.y = 680;
                    break;
                            }
        }
                        
        public Start(): void {
            this._reset();
        }

        public update()
        {
            this.position = new Vector2(this.x, this.y); //for collision 
            this.rotation = Math.atan2(this.playerY - this.y,this.playerX - this.x) * 180 / Math.PI;
            this.enemtShipDespawn();
            this.playerRange();
            this.enemyShipMove();
        }

        public enemtShipDespawn(): void {
            if (this.x >= 900 || this.x <= -100 || this.y >= 700 || this.y <= -100 || this.dead == true) {
                this.check = false;
                this.inRange = false;
                this.dead = false;
                this.health = 20;
                this.sheild = 30;
                this._reset();
            }
        }


        public enemyShipMove()
        {
                if(this.inRange == false)
                {
                    this.radians = this.rotation * (Math.PI / 180);
                    this.x += this.speed * Math.cos(this.radians);
                    this.y += this.speed * Math.sin(this.radians);
                }
        }

        public playerRange()
        {
            this.dist = Math.sqrt( Math.pow((this.x - this.playerX), 2) + Math.pow((this.y - this.playerY), 2) );
            if (this.dist < 200)
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
                this.sheild -= dam;
            }
            else
            {
                if(this.health > 0)
                {
                    this.health -= dam;
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
