<template>
    <div class="color-card" :style="{ backgroundColor: hexValue }" @click="generateNewColor">
        <div class="card-info">
            <h3>HEX: {{ hexValue }}</h3>
            <h4>RGB: {{ rgbValue }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['new-color'],
    props: {
        rgbValue: {
            type: String,
            required: true,
        },
        hexValue: {
            type: String,
            required: true,
        },
    },
    methods: {
        generateNewColor(){
            this.$emit('new-color', this.hexValue);
        }
    }
};
</script>

<style>
.color-card {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 30%;
    height: 100%;
    margin: 5px;
    border-radius: 13px;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);
}
.card-info {
    background-color: white;
    padding: 15px;
    justify-self: flex-end;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    text-align: center;
}
</style>
