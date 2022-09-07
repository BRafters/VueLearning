<template>
    <h1>User Data</h1>
    <form @submit.prevent="addUser">
        <input v-model="userName" type="text" placeholder="Name of User: " />
        <input v-model="userAge" type="text" placeholder="User Age: " />
        <button>Add New User</button>
    </form>
</template>

<script>
export default {
    emits: ["user-add"],
    data() {
        return {
            userName: "",
            userAge: "",
        };
    },
    methods: {
        addUser() {
            this.$emit("user-add", this.userName, this.userAge);
        },
    },
};
</script>

<style>
form{
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
}
input, button{
    margin: 5px;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
}
button{
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #52528C;
    color: #52528C;
    font-weight: bold;
    transition: 0.15s ease;
}
button:hover{
    background-color: #52528C;
    color: lightcoral;
}
</style>
