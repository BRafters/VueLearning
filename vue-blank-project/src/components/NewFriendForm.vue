<template>
    <form @submit.prevent="submitData">
        <input
            v-model="enteredName"
            type="text"
            placeholder="Enter Friend Name:"
        />
        <input
            v-model="enteredPhone"
            type="tel"
            placeholder="Enter Friend Phone Number:"
        />
        <input
            v-model="enteredEmail"
            type="email"
            placeholder="Enter Friend Email Address:"
        />
        <button>Add Friend</button>
    </form>
</template>

<script>
export default {
    emits: ["friend-add"],
    data() {
        return {
            enteredName: "",
            enteredPhone: "",
            enteredEmail: "",
        };
    },
    methods: {
        submitData() {
            this.$emit("friend-add", this.enteredName, this.enteredPhone, this.enteredEmail);
        },
    },
};
</script>

<style>
input {
    margin: 5px;
    min-width: 200px;
    padding: 15px;
    border-radius: 8px;
    border: none;
    background-color: lightgray;
}
form {
    display: flex;
    align-items: center;
}
</style>
