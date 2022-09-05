<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                friend-name="friend.name"
                phone-number="friend.phone"
                email-address="friend.email"
            ></friend-contact>
        </ul>
    </section>
</template>
<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "999-1234",
                    email: "manuel@test.com",
                },
                {
                    id: "julie",
                    name: "Julie Jewels",
                    phone: "555-2324",
                    email: "julie@test.com",
                },
            ],
        };
    },
    methods() {},
    computed() {},
};
</script>

<style>
html {
    font-family: Helvetica, Arial;
}
</style>
