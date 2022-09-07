<template>
    <div class="active-user">
        <h3>User: {{ userName }}</h3>
        <h4>User age: {{ userAge }}</h4>
    </div>
</template>

<script>
export default {
    props: {
        userId: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        userAge: {
            type: String,
            required: false,
            // validator: function (value) {
            //     return value >= 0;
            // },
        },
    },
};
</script>

<style>
h3,
h4 {
    margin: 0;
}
.active-user{
    margin: 15px;
    width: 150px;
}
</style>
