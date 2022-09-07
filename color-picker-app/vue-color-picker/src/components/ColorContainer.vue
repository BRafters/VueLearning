<template>
    <div id="card-container">
        <color-card
            v-for="color in colors"
            :key="color.HEX"
            :hex-value="color.HEX"
            :rgb-value="color.RGB"
        ></color-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numberOfCards: 5, // Starting off with 5 cards
            colors: [
                { HEX: "#a4e6b7", RGB: "164 230 183" },
                { HEX: "#6e34f2", RGB: "110 52 242" },
                { HEX: "#edce03", RGB: "237 206 3" },
                { HEX: "#392117", RGB: "57 33 23" },
                { HEX: "#705c4e", RGB: "112 92 78" },
            ],
        };
    },
    provide() {
        return {
            colors: this.colors,
        };
    },
};
</script>

<style>
#card-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: inherit;
}
</style>
