module objects {
    
    export class galaxyPath extends objects.GameObject {

        private speed:number = 3;
        private radians: number;
        private playerX: number = 400;
        private playerY: number = 300;
      
        constructor(imageString: string) {
            super(imageString);
            this.start();
        }

        // PRIVATE METHODS 

        private _reset():void {
            this.y = 400;
            this.x = 300;
        }

        private _checkBounds():void {
            if(this.y >= 700 || this.x >= 900 || this.y <= -100 || this.x <= -100 && core.ifSpawnPath == false) {
                this._reset();
            }
        }
        
        // PUBLIC METHODS 

        public start():void {
            this._reset();
            this.speed = .8; // 5px per frame down
        }

        // This method updates the object's properties every time it's called
     
        public update():void {
            this._checkBounds();
            this.galaxyMove();
            this.regX = this.playerX;
            this.regY = this.playerY;
        }

        public galaxyMove()
        {
            if (core.ifSpawnPath == false)
                {
                    this.radians = this.rotation * (Math.PI / 180);
                    this.x -= this.speed * Math.cos(this.radians);
                    this.y -= this.speed * Math.sin(this.radians);
                }
        }

        public giveData(rot: number, PX: number, PY: number)
        {
            this.rotation = rot;
            this.playerX = PX;
            this.playerY = PY;
        }
    }
}