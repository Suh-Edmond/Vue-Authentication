<template>
    <v-container>
        <v-flex>
            <div class="row mt-6 justify-center">
                <div class="col-6">
                    <div>
                        <h1> Profile</h1>
                    </div>
                    <div>
                        <v-card>
                            <v-card-title>ID {{currentUser.id}}</v-card-title>
                            <v-card-title>name {{currentUser.name}}</v-card-title>
                            <v-card-title>email  {{currentUser.email}}</v-card-title>
                            <v-card-title>telephone {{currentUser.telephone}}</v-card-title>
                        </v-card>
                    </div>
                </div>
            </div>
        </v-flex>
    </v-container>
</template>
<script>
export default {
    data()
    {
        return {

        };
    },
    computed:{
        currentUser(){
            console.log(this.$store.state.auth.user.data)
            return this.$store.state.auth.user.data
        }
    },
    mounted()
    {
        if(!this.currentUser){
            this.$router.push("/user/login")
        }
    }
}
</script>