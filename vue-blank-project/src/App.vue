<template>
    <section>
        <h2>My Friends</h2>
        <friend-form @friend-add="addFriend"></friend-form>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :friend-id="friend.id"
                :friend-name="friend.name"
                :phone-number="friend.phone"
                :email-address="friend.email"
                :is-favorite="friend.favorite"
                @toggle-favorite="toggleFavoriteStatus"
                @friend-delete="deleteFriend"
            ></friend-contact>
        </ul>
    </section>
</template>
<script>
import FriendContact from "./components/FriendContact.vue";
export default {
    components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "999-1234",
                    email: "manuel@test.com",
                    favorite: true,
                },
                {
                    id: "julie",
                    name: "Julie Jewels",
                    phone: "555-2324",
                    email: "julie@test.com",
                    favorite: false,
                },
            ],
        };
    },
    methods: {
        toggleFavoriteStatus(friendId) {
            const friend = this.friends.find(
                (friend) => friend.id === friendId
            );
            friend.favorite = !friend.favorite;
        },
        addFriend(name, phone, email) {
            const newFriendObj = {
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: email,
                favorite: false,
            };
            this.friends.push(newFriendObj);
        },
        deleteFriend(friendId) {
            // We need to know which contact should be deleted (friendId)
            this.friends = this.friends.filter(
                friend => friend.id !== friendId
            );
        },
    },
    computed() {},
};
</script>

<style>
html {
    font-family: Helvetica, Arial;
}
</style>
