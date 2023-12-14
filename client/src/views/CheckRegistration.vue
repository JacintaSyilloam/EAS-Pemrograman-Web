<template>
    <main>
        <p>Check registration</p>
        <form @submit.prevent="check">
            <p>Email:</p>
            <input v-model="email" type="email" placeholder="email" />
            <div v-for="(stat, idx) in status" :key="idx">
                {{ stat.status }}
            </div>
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
            email: '',
            status: []
        }
    },
    methods: {
        async check() {
            try {
                const response = await fetch('http://localhost:3000/api/accounts?where[email][equals]=${this.email}', {
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
                this.status = data.docs;
                console.log(this.status);
            } catch (error) {
                console.error(error.message)
            }
        }
    },
    mounted() {
        this.check();
    }
}
</script>