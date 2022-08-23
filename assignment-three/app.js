Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    watch: {
        counter() {
            if (this.counter == 37)
                setTimeout(() => {
                    this.counter = 0
                }, 5000);
        },
    },
    computed: {
        result() {
            if (this.counter < 37) return "Not there yet";
            else if (this.counter > 37) return "Too much";
            return this.counter;
        },
    },
    methods: {
        increment(valueToIncrement) {
            this.counter += valueToIncrement;
        },
    },
}).mount("#assignment");
