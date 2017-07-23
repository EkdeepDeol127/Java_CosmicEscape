module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(player: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding

            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                // if bullet collides with asteroid
                    if(other.name === "asteroid") {
                        createjs.Sound.play("hit");
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
/*
               public playe(player: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding

            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                // if player colldies with asteroid
                    if(other.name === "asteroid") {
                       // createjs.Sound.play("yay");
                        core.lives -= 1;
                    }

                    // if plane collides with island
                    if(other.name === "enemy") {
                       // createjs.Sound.play("yay");
                        core.lives -= 1;
                    }

                }
            
          
    
            else {
                other.isColliding = false;
            } 
              */
    }
}