module objects {
        export class PortalPath extends objects.GameObject {

                constructor(imageString: string) {
                        super(imageString)
                        this.start();
                        this.regX = this.width * 0.5;
                        this.regY = this.height * 0.5;
                }

                public start() {
                        this.y = -200;
                        this.x = 400;
                }

                public update() {
                        this.checkBounds();
                }

                public checkBounds() {
                        if (this.y == 300)
                            {
                                core.ifSpawnPath = true;
                            }
                        else 
                            {
                                this.y += 1;
                            }
                }
        }
}