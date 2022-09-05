const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "999 555 1234",
                    email: "manuel@localhost.com",
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "991 555 1214",
                    email: "julie@localhost.com",
                },
            ],
        };
    },
});

// Should use multi-worded ids, with a hyphen for spaces
app.component("friend-contact", {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleVisibility">{{ textVisibility }} Details</button>
        <ul v-show='isVisible'>
            <li><strong>Phone: </strong>{{ friend.phone }}</li>
            <li><strong>Email: </strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            isVisible: false,
            friend: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "999 555 1234",
                email: "manuel@localhost.com",
            },
        };
    },
    computed: {
        textVisibility() {
            return this.isVisible ? "Hide" : "Show";
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
    },
});
app.mount("#app");
