$(document).ready(function (){

var playerHp = $("#playerHp");
var enemyHp = $("#enemyHp");

$("#attack").click(function() {
    if (eHp >= 0) doDamage();
    if (pHp >= 0) enemyDoDamage();
});

$("#newEnemy").click(function() {
    newEnemy();
});

/*  Enemy hp  */
var eHp = 100;
var pHp = 120;
var playerXp = "";

//generate dmg to be dealt  
function doDamage() {
    let playerDmg = (Math.random() * 10).toFixed(2);
    console.log(playerDmg);

    if (playerDmg >= 8 && playerDmg <= 10) {
        console.log("CRITICAL");
    }

    eHp = eHp - playerDmg;
    console.log("Enemy has " + Math.round(eHp) + " HP");

    if (eHp <= 0) {
        alert("Enemy dieded");
    }

}

function gainXp() {
    playerXp += "30";
    console.log("You have gained 20XP");
}

function newEnemy() {
    let newEnemyHp = eHp * 1.1;
    eHp = newEnemyHp;
    console.log(newEnemyHp);

    pHp = 100;
}

function enemyDoDamage() {
    let enemyDmg = (Math.random() * 10).toFixed(2);

    if (enemyDmg >= 8 && enemyDmg <= 10) {
        console.log("CRITICAL hit on player HP");
    }

    pHp = pHp - enemyDmg;
    console.log("You have " + Math.round(pHp) + " HP left");

    if (pHp <= 0) {
        alert("You have dieded");
    }
}

});