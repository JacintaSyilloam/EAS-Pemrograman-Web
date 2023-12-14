<template>
    <main>
        <h1>register urself</h1>

        <form @submit.prevent="register">
            <p>Name:</p>
            <input v-model="name" type="text" placeholder="name" />
            <p>Email:</p>
            <input v-model="email" type="email" placeholder="email" />
            <p>Institution:</p>
            <input v-model="institution" type="text" placeholder="institution" />
            <br>
            <br>
            <button type="submit">Register</button>

            <p>
                Check registration status?
                <router-link to="/check"><button type="button">Check here</button></router-link>
            </p>
        </form>

    </main>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            institution: ''
        }
    },
    methods: {
        async register() {
            const new_account = {
                name: this.name,
                email: this.email,
                institution: this.institution,
                date: new Date().toISOString(),
                status: 'Waiting'
            }

            try {
                const response = await fetch('http://localhost:3000/api/accounts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(new_account)
                })

                console.log("[DEBUG]" + response);

                if (!response.ok) {
                    const errorMsg = (await response.json())?.errors[0].message
                    throw new Error(errorMsg)
                }

                this.$router.push('/check')

                alert('Register with username: ' + this.name + ' success!')
            } catch (error) {
                alert('Register Error ' + error.message)
            }
        }
    }
}
</script>