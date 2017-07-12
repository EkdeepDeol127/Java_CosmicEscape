module objects {
  
    export class Background extends createjs.Bitmap {
     
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));

            this.start();
        }

        public start():void {

        }
    }
}