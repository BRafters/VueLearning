<template>
    <li>
        <h2>{{ friendName }}</h2>
        <button @click="toggleVisibility">{{ visibilityText }} Details</button>
        <ul v-if="isVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: [
        'friendName',
        'phoneNumber',
        'emailAddress'
    ],
    data() {
        return {
            isVisible: false,
            friend: {
                id: "N/A",
                name: "N/A",
                phone: "N/A",
                email: "N/A",
            },
        };
    },
    computed: {
        visibilityText() {
            return this.isVisible ? "Hide" : "Show";
        },
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
    },
};
</script>
