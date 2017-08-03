module objects {

    export class arrowPath extends objects.GameObject {

        public playerRot:number;
        public timer: number = 10;
        public change: boolean = false;
        public hold: number;
        public numChange: number = 0;

        constructor(imageString: string)
        {
            super(imageString);
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.start();
        }

        public start()
        {
            this.x = 750;
            this.y = 550;
            this.rotation = -90;
        }

        public update()
        {
            this.checkFollow();
            this.changeArrow();
        }

        public checkFollow()
        {
            if(this.numChange < 10)
                {
                    if(Math.sin(this.playerRot) == Math.sin(this.rotation))
                    {
                        console.log("following");
                        this.timer -= 0.1;
                    }
                    else
                    {
                        this.timer = 10;
                        console.log("NOT following");
                    }
                }
            else
                {
                    this.visible = false;
                }
           
        }

        public changeArrow()
        {
            if(this.timer <= 0)
                {
                    this.change = true;
                    this.timer = 10;
                }
            if(this.change == true)
                {
                    this.hold = Math.random();
                    switch(this.hold)
                    {
                        case 0:
                        this.rotation += (Math.random() * 180) + 90;
                        break;

                        case 1:
                        this.rotation -= (Math.random() * 180) + 90;
                        break;
                    }
                    this.change = false;
                    this.numChange++;
                }
        }

        public giveData(rot:number)
        {
            this.playerRot = rot;
        }
    }
}