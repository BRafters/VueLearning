Vue.createApp({
    data() {
        return {
            userInput: "",
        };
    },
    methods: {
        showAlert() {
            alert("Button clicked!");
        },
        updateText(event) {
            this.userInput = event.target.value;
        },
    },
}).mount("#assignment");
