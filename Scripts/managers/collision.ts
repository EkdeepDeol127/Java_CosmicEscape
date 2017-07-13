module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(bullet: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding

            if (objects.Vector2.distance(bullet.position, other.position) < (bullet.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                // if bullet collides with asteroid
                    if(other.name === "asteroid") {
                       // createjs.Sound.play("yay");
                        core.score += 100;
                    }

                    // if plane collides with island
                    if(other.name === "enemy") {
                       // createjs.Sound.play("yay");
                        core.score += 100;
                    }

                }
            }
            else {
                other.isColliding = false;
            }
        }

        
    }
}