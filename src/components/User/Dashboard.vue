<template>
    <v-container>
        <v-flex>
            <div class="row mt-6">
                <div>
                   Dashboard
                </div>
                <v-spacer>
                </v-spacer>
                 <v-btn
                    color="primary"
                    class=" justify-center"
                    @click="logout"
                    >
                    Logout
                </v-btn>
                <v-btn
                    color="primary"
                    class=" justify-center"
                    @click="logout"
                    to="/user/profile"
                    >
                    Profile
                </v-btn>
            </div>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            feedbackMsg :null
        }
    },
    methods: {
        logout()
        {
            this.$store.dispatch('auth/logout').then(data => {
                this.$router.push("/user/login")
                 console.log(data)
            })
        }
    }
}
</script>