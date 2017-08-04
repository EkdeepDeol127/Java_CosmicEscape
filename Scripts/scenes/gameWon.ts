module scenes {
export class gameWon extends objects.Scene{

    //private instance variables
    private _playAgain: objects.Button;
    private _mainMenu: objects.Button;
    private _backgr: objects.Background;
    private _label: objects.Label;

    private _sound: createjs.AbstractSoundInstance;

//create an instance of main menu
constructor(){
    super();
}
 public Start(): void {

            if (core.SCheck == true) {
                this._sound = createjs.Sound.play("menuTheme");
                this._sound.loop = -1;
            }

            //add background
            this._backgr = new objects.Background("uiBackgr");
            this.addChild(this._backgr);

            //add Main Menu button
            this._mainMenu = new objects.Button("menuButton", 380, 450, true);
            this.addChild(this._mainMenu);
            //mainMenu button event listener
            this._mainMenu.on("click", this._mainMenuClick, this);

            //add label

            this._label = new objects.Label("CONGRATS \n YOU'VE WON!!", "76px",
             "georgia", "#F3B500", 200, 150, false);
            this.addChild(this._label);
            //play again button
            this._playAgain = new objects.Button("againButton", 380, 550, true);
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