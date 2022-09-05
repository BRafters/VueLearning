function getAttackValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const HEAL = "HEAL";
const ATTACK = "ATTACK";
const SPECIAL_ATTACK = "SPECIAL ATTACK";
const PLAYER = "Player";
const MONSTER = "Monster";

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            attacks: [],
            winner: "",
        };
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // Draw
                this.winner = "Draw";
            } else if (value <= 0) {
                // Player lost
                this.winner = "Player";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // Draw
                this.winner = "Draw";
            }
            if (value <= 0) {
                // Monster lost
                this.winner = "Monster";
            }
        },
    },
    computed: {
        monsterBar() {
            return this.monsterHealth > 0
                ? { width: this.monsterHealth + "%" }
                : { width: "0%" };
        },
        playerBar() {
            return this.playerHealth > 0
                ? { width: this.playerHealth + "%" }
                : { width: "0%" };
        },
        specialAttackIsReady() {
            return this.round % 3 !== 0;
        },
        healthIsFull() {
            return this.playerHealth === 100;
        },
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.round = 0;
            this.attacks = [];
            this.winner = "";
        },
        attackMonster() {
            const attackVal = getAttackValue(5, 12);
            this.monsterHealth -= attackVal;
            this.battleLog(PLAYER, MONSTER, ATTACK, attackVal);
            this.round++;
            this.attackPlayer(); // Attacks back once we attack
        },
        attackPlayer() {
            const attackVal = getAttackValue(8, 15);
            this.playerHealth -= attackVal;
            this.battleLog(MONSTER, PLAYER, ATTACK, attackVal);
        },
        specialAttackMonster() {
            if (this.round % 3 == 0) {
                this.round++;
                const attackVal = getAttackValue(10, 25);
                this.monsterHealth -= attackVal;

                this.battleLog(PLAYER, MONSTER, SPECIAL_ATTACK, attackVal);
                this.attackPlayer();
            }
        },
        healPlayer() {
            this.round++;
            const healValue = getAttackValue(7, 15);
            this.battleLog(PLAYER, PLAYER, HEAL, healValue);

            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else this.playerHealth += healValue;

            this.attackPlayer();
        },
        surrender() {
            this.winner = MONSTER;
        },
        battleLog(who, target, move, value) {
            if (move == HEAL)
                this.attacks.unshift(
                    `${who} used ${move} and healed ${value} damage`
                );
            else
                this.attacks.unshift(
                    `${who} used ${move} on ${target} for ${value} damage`
                );
        },
    },
}).mount("#game");
