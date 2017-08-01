module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public checkP(player: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding

            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;
    

                // if player collides with asteroid
                    if(other.name === "asteroid") {
                        createjs.Sound.play("objHit");
                        core.lives -= 1;
                    }

                    // if plane collides with island
                    if(other.name === "enemyShip") {
                       createjs.Sound.play("hit");
                        core.lives -= 1;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        }

        public checkB(bullet: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding

            if (objects.Vector2.distance(bullet.position, other.position) < (bullet.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                // if bullet collides with asteroid
                    if(other.name === "asteroid") {
                        createjs.Sound.play("objHit");
                        core.score += 100;
                
                    }

                    // if bullet collides with island
                    if(other.name === "enemyShip") {
                       // createjs.Sound.play("yay");
                        core.score += 150;
                    }

                }
            }
            else {
                other.isColliding = false;
            }
        }

    }
}