module scenes {
    export class Over extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES
        private _playAgain: objects.Button;
        private _mainMenu: objects.Button;
        private _backgr: objects.Background;
        private _label: objects.Label;


        private _sound: createjs.AbstractSoundInstance;

        //creates an instance of mainMenu
        constructor() {
            super();
        }
        public Start(): void {

            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("gameOver");
                this._sound.loop = -1;
            }

            //add background
            this._backgr = new objects.Background("uiBackgr");
            this.addChild(this._backgr);

            //label
 this._label = new objects.Label("OH NO!! \n YOU'VE LOST!!", "76px",
             "georgia", "#F3B600",15, 160, false);
            this.addChild(this._label);

            //add Main Menu button
            this._mainMenu = new objects.Button("menuButton", 370, 375, true);
            this.addChild(this._mainMenu);
            //mainMenu button event listener
            this._mainMenu.on("click", this._mainMenuClick, this);

            //play again button
            this._playAgain = new objects.Button("againButton", 370, 450, true);
            this.addChild(this._playAgain);
            this._playAgain.on("click", this._playAgainClick, this);

            //add this scene to GLOBAL scene container
            core.stage.addChild(this);
        }

        private _mainMenuClick(event: createjs.MouseEvent): void {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.MENU;
            core.changeScene();
        }

        private _playAgainClick(event: createjs.MouseEvent): void {
            //switch scene
            if (core.SCheck == true) {
                this._sound.stop();
            }
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }

    }

}