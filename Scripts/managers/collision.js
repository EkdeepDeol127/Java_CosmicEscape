var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.checkP = function (player, other) {
            //check to see if object is colliding
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if player collides with asteroid
                    if (other.name === "asteroid") {
                        //createjs.Sound.play("objHit");
                        core.lives -= 1;
                    }
                    // if plane collides with island
                    if (other.name === "enemyShip") {
                        // createjs.Sound.play("hit");
                        core.lives -= 1;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        };
        Collision.prototype.checkB = function (bullet, other) {
            //check to see if object is colliding
            if (objects.Vector2.distance(bullet.position, other.position) < (bullet.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    // if bullet collides with asteroid
                    if (other.name === "asteroid") {
                        //  createjs.Sound.play("objHit");
                        core.score += 100;
                    }
                    // if bullet collides with island
                    if (other.name === "enemyShip") {
                        // createjs.Sound.play("yay");
                        core.score += 150;
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