Vue.createApp({
    data() {
        return {
            // Lets have a boolean determine when the show and hide gets triggered
            isShowing: true,
            tasks: [], // List of tasks that we will use for the unordered lists
            taskEntered: "",
        };
    },
    computed: {
        isVisible() {
            return this.isShowing ? "Hide" : "Show";
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskEntered); // Adding the text to the list
            this.taskEntered = "";
        },
        toggleVisibility() {
            this.isShowing = !this.isShowing;
        },
    },
}).mount("#assignment");
