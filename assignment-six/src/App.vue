<template>
    <div id="user-content">
        <user-data @user-add="addNewUser"></user-data>
        <active-user
            v-for="user in users"
            :key="user.id"
            :user-id="user.id"
            :user-name="user.name"
            :user-age="user.age"
        ></active-user>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
        };
    },
    methods: {
        addNewUser(userName, userAge) {
            const newUserObject = {
                id: new Date().toISOString(),
                name: userName,
                age: userAge,
            };
            this.users.push(newUserObject);
        },
    },
};
</script>

<style>
html {
    background-color: lightcoral;
    color: #52528C;
    font-family: Helvetica, Arial;
}

#user-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
