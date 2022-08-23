Vue.createApp({
    data() {
        return {
            userInput: "",
            user1: false,
            user2: false,
            isVisible: true,
            color: "",
        };
    },
    watch: {},
    computed: {
        classGen() {
            return {
                user1: this.userInput === "user1",
                user2: this.userInput === "user2",
            };
        },
        visible() {
            return { visible: this.isVisible, hidden: !this.isVisible };
        },
    },
    methods: {
        setClass(event) {
            this.userInput = event.target.value;
            
            if (this.userInput == "user1") {
                this.user1 = !this.user1;
            } else if (this.userInput == "user2") {
                this.user2 = !this.user2;
            } else this.user1 = this.user2 = false;
        },
        toggleVisibility() {
            this.isVisible = !this.isVisible;
            console.log(this.isVisible);
        },
        setColor(event) {
            this.color = event.target.value;
            console.log(this.color);
        },
    },
}).mount("#assignment");
