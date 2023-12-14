<template>
    <main>
        <p>Check registration</p>
        <form @submit.prevent="check">
            <p>Email:</p>
            <input v-model="email" type="email" placeholder="email" />
            <div>
                {{ account?.status }}
            </div>
            <br>
            <br>
            <button type="submit">Check</button>
        </form>
    </main>
</template>

<script>
import qs from 'qs'

export default {
    data() {
        return {
            email: '',
            account: {},
        }
    },
    methods: {
        async check() {
            const query = {
                email: {
                    equals: this.email
                }
            }

            const stringifiedQuery = qs.stringify(
                {
                    where: query,
                },
                { addQueryPrefix: true },
            );

            try {
                const response = await fetch(`http://localhost:3000/api/accounts${stringifiedQuery}`, {
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
                console.log(data);
                this.account = data.docs[0];
                
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