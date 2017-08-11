
module managers {
    export class Collision {
        
        public timer = 3;

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
                    player.gotoAndPlay("playerHit");
                    
                    // if player collides with asteroid
                    if (other.name === "asteroid0") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                 core.lives -= 1;
                    }
 
                    if (other.name === "asteroid1") {

                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        console.log("asteroid1")
                   core.lives-=1;
                    }

                    if (other.name === "asteroid2") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        console.log("asteroid2");
                   core.lives -=1;
                    }

                    if (other.name === "asteroid3") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        console.log("asteroid3");
                        core.lives -=1;
                    }

                    //if player collides with newAsteroid
                    if (other.name === "newAsteroid0") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("hit");
                        }
                        core.lives -= 1;
                    }

                    if (other.name === "newAsteroid1") {
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
                if (other.name === "portal") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    core.scene = config.Scene.PATH;
                    core.changeScene();
                }

                if (other.name === "portalPath") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    core.scene = config.Scene.GAMEWON;
                    core.changeScene();
                    core.lives = 100;
                    core.Time = 120;
                    core.score = 0;
                }

                if (other.name === "portaltut") {
                    if (core.SECheck == true) {
                        createjs.Sound.play("hit");
                    }
                    core.scene = config.Scene.PLAY;
                    core.changeScene();
                    core.lives = 100;
                    core.score = 0;
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
                    if (other.name === "asteroid0") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        other.gotoAndPlay("astDest");
                        setTimeout(function(){core.AstHit0 = true}, 800);
                    }
                    else {
                        core.AstHit0 = false;
                    }

                    if (other.name === "asteroid1") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                       other.gotoAndPlay("astDest");
                        setTimeout(function(){core.AstHit1 = true}, 800);
                    }
                    else {
                        core.AstHit1 = false;
                    }

                    if (other.name === "asteroid2") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                       other.gotoAndPlay("astDest");
                        setTimeout(function(){core.AstHit2 = true}, 800);
                    }
                    else {
                        core.AstHit2 = false;
                    }

                    if (other.name === "asteroid3") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        other.gotoAndPlay("astDest");
                        setTimeout(function(){core.AstHit3 = true}, 800);
                    }
                    else {
                        core.AstHit3 = false;
                    }
                    //if bullet collides with newAsteroids
                    if (other.name === "newAsteroid0") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.newAstHit0 = true;
                    }
                    else {
                        core.newAstHit0 = false;
                    }

                    if (other.name === "newAsteroid1") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        core.score += 100;
                        core.newAstHit1 = true;
                    }
                    else {
                        core.newAstHit1 = false;
                    }
                    //if bullet collides with enemyShip
                    if (other.name === "enemyShip") {
                        if (core.SECheck == true) {
                            createjs.Sound.play("objHit");
                        }
                        other.gotoAndPlay("enemDest");
                        setTimeout(function(){core.EnemyHit = true}, 400);
                            core.score += 150;
                    }
                    else {
                        core.EnemyHit = false;
                        core.bullDesp = false;
                    }
                }
            }
            else {
                other.isColliding = false;
                
            }
        }

    }
}