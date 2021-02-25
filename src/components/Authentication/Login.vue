<template>
   <v-flex>
        <div class="row justify-center mt-6">
               <h4>Login</h4>
        </div>
       <div class="row justify-center">
           <div class="col-6">
                <v-form
                    @submit.prevent="submit"
                >
                    <v-text-field
                        v-model="user.email"
                        label="E-mail"
                        required
                        type="email"
                        outlined
                        dense
                         name="email"
                        id="email"
                    ></v-text-field>

                    <v-text-field
                        v-model="user.password"
                        label="Password"
                        required
                        outlined
                        dense
                        name="password"
                        id="password"
                        type="password"
                    ></v-text-field>
                    <v-btn
                        :disabled="!valid"
                        color="primary"
                        class=" justify-center"
                        type="submit"
                    >
                    Login
                    </v-btn>
                </v-form>
           </div>
       </div>
   </v-flex>
</template>


<script>
  export default {
     data()
     {
         return {
             user: {
                email:null,
                password:null,
            },
            feedbackMsg : []
         };
     },
     methods: {
         submit()
         {
             this.feedbackMsg = []
            this.$store.dispatch("auth/login", this.user).then(data => {
               this.feedbackMsg = data.message
               this.$router.push('/dashboard')
            }).catch(error => {
                this.feedbackMsg.push(error.response.data.message)
               
            })
         }
     },
     computed:{
         valid(){
            return this.user.email !== null &&
                    this.user.password !== null 
         },
         loggedIn()
         {
             return this.$store.state.auth.status.loggedIn
         }

     },
     created()
     {
         if(this.loggedIn){
             return this.$router.push("/dashboard")
         }
     }
  }
</script>

<style scoped>
 
</style>