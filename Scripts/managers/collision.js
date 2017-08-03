var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.timer = 3;
            this.collPlayer = false;
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
            if (this.timer > 0) {
                this.timer -= 0.1;
            }
        };
        Collision.prototype.checkPlayer = function (player, other) {
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
                if (other.name === "player") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    console.log("changescene");
                    core.scene = config.Scene.PATH;
                    core.changeScene();
                }
            }
            else {
                other.isColliding = false;
            }
        };
        Collision.prototype.checkEnemy = function (bullet, other) {
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
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map