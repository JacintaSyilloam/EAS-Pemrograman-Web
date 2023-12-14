<template>
    <main>
        <p>Check registration</p>
        <form @submit.prevent="check">
            <p>Email:</p>
            <input v-model="email" type="email" placeholder="email" />
            <br>
            <br>
            <button type="submit">Check</button>
        </form>

        debug syid
        <div v-for="account in accounts" :key="account.id">
            {{ account.name }}
            {{ account.email }}
            {{ account.institution }}
            {{ account.date }}
            {{ account.status }}
        </div>

    </main>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        }
    },
    methods: {
        async get_account() {
            const response = await fetch('http://localhost:3000/api/accounts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                const errorMsg = (await response.json())?.errors[0].message
                throw new Error(errorMsg)
            }

            const data = await response.json();
            this.accounts = data.docs;
            console.log("[DEBUG]" + this.accounts);
        }
    },
    mounted() {
        this.get_account();
    }
}
</script>