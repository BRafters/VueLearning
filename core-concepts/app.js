const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course and learn Vue.js",
            courseGoalB: "<h1>Master Vue and build amazing apps!</h1> ",
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const rand = Math.random();
            if(rand < 0.5)
                return this.courseGoalA;
            else
                return this.courseGoalB;
        }
    }
});

app.mount("#user-goal");