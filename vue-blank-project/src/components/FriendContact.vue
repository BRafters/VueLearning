<template>
    <li>
        <h2>{{ friendName }}</h2>
        <button @click="toggleVisibility">{{ visibilityText }} Details</button>
        <ul v-if="isVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
            <li><strong>Is Fav: </strong>{{ printFavorite }}</li>
            <button @click="toggleFavorite">Set Favorite</button>
        </ul>
        <button @click="$emit('friend-delete', friendId)">Delete Friend</button>
    </li>
</template>

<script>
export default {
    props: {
        friendId: {
            type: String,
            required: true,
        },
        friendName: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: {
        'toggle-favorite': function (id){
            if(id)
                return true;
            else
                console.warn("ID is missing");
            return false;
        },
        'friend-delete': function(id){
            if(id)
                return true;
            else
                console.warn("ID is missing");
            return false;
        }
    },
    data() {
        return {
            isVisible: false,
        };
    },
    computed: {
        visibilityText() {
            return this.isVisible ? "Hide" : "Show";
        },
        printFavorite() {
            return this.isFavorite ? "Favorite" : "Not Favorite";
        },
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.friendId);
        },
    },
};
</script>
