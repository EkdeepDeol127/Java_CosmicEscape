module objects {

    export class arrowPath extends objects.GameObject {

        public playerRot:number;

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

        }

        public checkFollow()
        {
            if(Math.sin(this.playerRot) <= Math.sin(this.rotation))//up
                {
                    console.log(Math.sin(this.playerRot), Math.sin(this.rotation));
                }
            else if(Math.sin(this.playerRot) >= Math.sin(this.rotation))//bottom
                {   
                    console.log(Math.sin(this.playerRot), Math.sin(this.rotation));
                }
            else if(Math.cos(this.playerRot) > Math.cos(this.rotation))//right
                {  
                    console.log(Math.sin(this.playerRot), Math.cos(this.rotation));
                }
            else if(Math.cos(this.playerRot) < Math.cos(this.rotation))//left
                {    
                    console.log(Math.sin(this.playerRot), Math.cos(this.rotation));
                }
        }

        public giveData(rot:number)
        {
            this.playerRot = rot;
        }
    }
}