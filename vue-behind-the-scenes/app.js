const app = Vue.createApp({
    data() {
        return {
            currentUserInput: "",
            message: "Vue is great!",
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            console.log(this.$refs.userText.value);
            this.message = this.$refs.userText.value;
        },
    },
    beforeCreate() {
        console.log("Before Create");
    },
    created() {
        console.log("Created");
    },
    beforeMount() {
        console.log("Before Mount");
    },
    mounted() {
        console.log("Mounted");
    },
    beforeUpdate() {
        console.log("Before Update");
    },
    updated() {
        console.log("Updated");
    },
    beforeUnmount() {
        console.log("Before Unmount");
    },
    unmounted() {
        console.log("Unmounted");
    },
});

app.mount("#app");

setTimeout(function() {
  app.unmount();
}, 3000);

const data = {
    message: "hello",
};

const handler = {
    set(target, key, value) {
        console.log(target);
        console.log(key);
        console.log(value);
    },
};

const app2 = Vue.createApp({
    template: `
    <p>{{favoriteMeal}}</p>
  `,
    data() {
        return {
            favoriteMeal: "Pizza",
        };
    },
});
app2.mount("#app2");
