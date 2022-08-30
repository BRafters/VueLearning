const app = Vue.createApp({
    data() {
        return {
            enteredValue: "",
            goals: [],
        };
    },
    methods: {
      addGoal() {
        this.goals.push(this.enteredValue);
      },
      removeGoal(idx){
        this.goals.splice(idx);
      }
    }
});

app.mount("#user-goals");
