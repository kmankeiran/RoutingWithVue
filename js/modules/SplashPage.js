export default {
    template: `
    <section>
        <h1>Welcome to my Super Awesome App!</h1>
        <button @click="registerUser">Register for awesome swag!</button>
    </section>
    `,

    data: function() {
        return {
            message: "Welcome to my Super Awesome App!"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked register button');
        }
    }
}