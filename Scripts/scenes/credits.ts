module scenes {
    export class Credits extends objects.Scene {

        //private instance variables
        private _backButt: objects.Button;
        private _backgr: objects.Background;

        private _theSound: createjs.AbstractSoundInstance;

        //create an instance of credits
        constructor() {
            super();
        }

        public Start(): void {
            if (core.SCheck == true) {
                this._theSound = createjs.Sound.play("menuTheme");
                this._theSound.loop = -1;
            }

            //add background 
            this._backgr = new objects.Background("galaxy");
            this.addChild(this._backgr);
            //add button
            this._backButt = new objects.Button("backButton", 370, 200, true);
            this.addChild(this._backButt);
            this._backButt.on("click", this._buttClick, this);

            core.stage.addChild(this);
        }

        private _buttClick(event: createjs.MouseEvent): void {
            //switch scene
            if (core.SCheck == true) {
                this._theSound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
        }

    }
}