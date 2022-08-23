const app = Vue.createApp({
    data() {
        return {
            name: "Brennan",
            age: 23,
            linkToRandImage: "https://source.unsplash.com/collection/928423/480x480"
        };
    },
    methods: {
        generateRand() {
            return Math.random();
        },
        futureAge() {
            return this.age + 5;
        }
    }
}).mount("#assignment")