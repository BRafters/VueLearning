const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
        };
    },
    computed: {
        fullName() {
            if (this.name === "") return "";
            return this.name + " " + "Rafters";
        },
    },
    methods: {
        submitForm() {
            alert("Submitted");
        },
        addAndSubtract(wantToAdd = true, num = 1) {
            this.counter = wantToAdd ? this.counter + num : this.counter - num;
        },
        setName(event, lastName) {
            this.name = event.target.value;
        },
        resetInput() {
            this.name = "";
        },
    },
});

app.mount("#events");
