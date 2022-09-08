<template>
    <div id="card-container">
        <color-card
            v-for="color in colors"
            :key="color.HEX"
            :hex-value="color.HEX"
            :rgb-value="color.RGB"
            @new-color="getOneColor"
        ></color-card>
    </div>
</template>

<script>
const MULTI_COLOR_URL = "http://localhost:3000/colors/";
const SINGLE_COLOR_URL = "http://localhost:3000/color";

export default {
    data() {
        return {
            numberOfCards: 5, // Starting off with 5 cards
            colors: [],
        };
    },
    methods: {
        getOneColor(hexValue) {
            console.log(hexValue);
            fetch(SINGLE_COLOR_URL)
                .then((response) => {
                    if (response.ok) return response.json();
                })
                .then((data) => {
                    const foundColor = this.colors.find(
                        (color) => color.HEX === hexValue
                    );
                    
                    foundColor.HEX = data[0].HEX;
                    foundColor.RGB = data[0].RGB;
                });
        },
        getMultipleColors() {
            fetch(MULTI_COLOR_URL + this.numberOfCards)
                .then((response) => {
                    if (response.ok) return response.json();
                })
                .then((data) => {
                    console.log(data);
                    this.colors = data;
                });
        },
    },
    mounted() {
        console.log(this.getMultipleColors());
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
