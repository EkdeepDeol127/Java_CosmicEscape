module scenes {
    export class Settings extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES

        private _mainMenu: objects.Button;
        private _sound: objects.Button;
        private _backgr: objects.Background;
        private _music: createjs.AbstractSoundInstance;

        //creates an instance of mainMenu
        constructor() {
            super();
        }
        public Start(): void {
            if (core.SCheck == true) {
                this._music = createjs.Sound.play("menuTheme");
                this._music.loop = -1;
            }

            //add background
            this._backgr = new objects.Background("mainPage");
            this.addChild(this._backgr);

            //add Main Menu button
            this._mainMenu = new objects.Button("backButton", 380, 200, true);
            this.addChild(this._mainMenu);
            //mainMenu button event listener
            this._mainMenu.on("click", this._mainMenuClick, this);

            this._sound = new objects.Button("playButton", 380, 250, true);
            this.addChild(this._sound);
            this._sound.on("click", this.soundCheck, this);

            //add this scene to GLOBAL scene container
            core.stage.addChild(this);
        }

        private _mainMenuClick(event: createjs.MouseEvent): void {
            if (core.SCheck == true) {
                this._music.stop();
            }
            this._music.stop();
            core.scene = config.Scene.MENU;
            core.changeScene();
        }

        private soundCheck(check: boolean): void {
            if (core.SCheck == false) {
                console.log("Sound on");
                core.SCheck = true;
            }
            else {
                console.log("Sound off");
                core.SCheck = false;
            }
        }
    }
}