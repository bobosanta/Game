$(document).ready(function () {

    var playerHp = $("#playerHp");
    var enemyHp = $("#enemyHp");

    $("#attack").click(function () {
        if (eHp >= 0) doDamage();
        if (pHp >= 0) enemyDoDamage();
    });

    $("#newEnemy").click(function () {
        newEnemy();
    });

    /*  Enemy hp  */
    var eHp = 100;
    var pHp = 150;
    var playerXp = 0;
    var playerXpPool = 20;
    var level = 0;

    //GENERATE DMG TO BE DEALT 
    function doDamage() {
        let playerDmg = (Math.random() * 10).toFixed(2);
        console.log(playerDmg);
        $('#playerDmg').html(playerDmg);

        if (playerDmg >= 8 && playerDmg <= 10) {
            console.log("CRITICAL STRIKE ON ENEMY");
        } else if (playerDmg <= 1 && playerDmg >=0) {
            console.log("YOU DODGED ENEMY ATTACK");
        } else if (playerDmg >1 && playerDmg <= 2 ) {
            console.log("YOU PARRIED ENEMY ATTACK");
        } else {
            
        };

        eHp = eHp - playerDmg;
        $("#enemyHp").html(Math.round(eHp));
        // console.log("Enemy has " + Math.round(eHp) + " HP");

        if (eHp <= 0) {
            alert("Enemy dieded");
            if (playerXp < playerXpPool) {
                gainXp();
            }
            restoreHp();
            restoreEnemyHp();
            newEnemy();
        }

    }

    // GAIN XP
    function gainXp() {
        console.log("You are now at 100% HP")
        playerXp += 10;
        console.log("You have gained 10" + " XP " + "You now have " + playerXp + " XP out of " + playerXpPool);
        if (playerXp == playerXpPool) {
            levelUp();
        }
        console.log(playerXpPool);
    }

    // LEVEL UP
    function levelUp() {
       level = 1;
       level = level + 1;
       playerXpPool += 50;
       console.log("LEVEL UPPPPPPPPPPPPPPPPPPP");
       console.log(level);
    }

    // NEW ENEMY
    function newEnemy() {
        let newEnemyHp = eHp * 1.2;
        eHp = newEnemyHp;
        console.log(newEnemyHp);
    }

    // RESTORE HP
    function restoreEnemyHp() {
        eHp = 100;
    }

    function restoreHp() {
        pHp = 150;
    }

    // ENEMY DAMAGE
    function enemyDoDamage() {
        let enemyDmg = (Math.random() * 10).toFixed(2);

        $("#enemyDmg").html(enemyDmg);
        console.log(enemyDmg);
        if (enemyDmg >= 8 && enemyDmg <= 10) {
            console.log("CRITICAL on PLAYER");
        } else if (enemyDmg <= 1 && enemyDmg >=0) {
            console.log("ENEMY DODGED ATTACK");
        } else if (enemyDmg >1 && enemyDmg <= 2 ) {
            console.log("ENEMY PARRY ATTACK");
        } else {
            
        };

        pHp = pHp - enemyDmg;
        $("#playerHp").html(Math.round(pHp));
        console.log("You have " + Math.round(pHp) + " HP left");

        if (pHp <= 0) {
            alert("You have dieded");
        }
    }

});