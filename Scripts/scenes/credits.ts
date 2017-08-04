module scenes {
    export class Credits extends objects.Scene {

        //private instance variables
        private _backButt: objects.Button;
        private _backgr: objects.Background;
        private _text1: objects.Label;
        private _text2: objects.Label;
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
            this._backgr = new objects.Background("mainPage");
            this.addChild(this._backgr);
            
            this._text1 = new objects.Label("Emanuela Sklarzyk............Producer", "25px", "monospace", "#FFFF00", 10, 400, false);
            this.addChild(this._text1);
            this._text2 = new objects.Label("Ekdeep Deol............Software Engineer", "25px", "monospace", "#FFFF00", 10, 450, false);
            this.addChild(this._text2);
            //add button
            this._backButt = new objects.Button("backButton", 370, 500, true);
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