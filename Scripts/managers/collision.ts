
module managers {
    export class Collision {

        public timer = 3;
        public collPlayer: boolean = false;

        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {
            if (this.timer > 0) {
                this.timer -= 0.1;
            }
        }

        public checkPlayer(player: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding
            if ((objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) && this.timer <= 0) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if player collides with asteroid
                    if (other.name === "asteroid") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    //if player collides with newAsteroid
                    if (other.name === "newAsteroids") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    // if player collides with enemyShip
                    if (other.name === "enemyShip") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }
                    //if enemyBullet is colliding with player
                    if (other.name === "enemyBullet") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 5;
                    }
                }
                //collistion with portal in play
                if (other.name === "player") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    core.scene = config.Scene.PATH;
                    core.changeScene();
                }
                //collision with portalPath in PathLevel
                if (other.name === "player") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    console.log("changescene");
                    core.scene = config.Scene.OVER;//change to win
                    core.changeScene();
                }
            }
            else {
                other.isColliding = false;
            }
        }

        public checkEnemy(bullet: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding
            if ((objects.Vector2.distance(bullet.position, other.position) < (bullet.halfHeight + other.halfHeight)) && this.timer <= 0) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if bullet collides with asteroid
                    if (other.name === "asteroid") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.thisName = true;
                    }
                    else {
                        core.thisName = false;
                    }
                    //if bullet collides with newAsteroids
                    if (other.name === "newAsteroids") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                    }
                    // if bullet collides with enemyShip
                    if (other.name === "enemyShip") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.EnemyHit = true;
                        core.score += 150;
                    }
                    else {
                        core.EnemyHit = false;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        }

    }
}