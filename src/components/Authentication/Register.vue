<template>
   <v-flex>
        <div class="row justify-center mt-6">
               <h4>Register</h4>
        </div>
       <div class="row justify-center">
           <div class="col-6">
                <v-form
                    @submit.prevent="submit"
                >
                    <v-text-field
                        v-model="user.name"
                        label="Name"
                        required
                        outlined
                        dense
                         name="name"
                        id="name"
                    ></v-text-field>
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
                        v-model="user.telephone"
                        label="Telephone"
                        required
                        outlined
                        dense
                         name="telephone"
                        id="telephone"
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
                    <v-text-field
                        v-model="user.password_confirmation"
                        label="Confirm Password"
                        required
                        type="password"
                        outlined
                        dense
                         name="password_confiramtion"
                        id="password_confirmation"
                    ></v-text-field>
                    <v-btn
                        :disabled="!valid"
                        color="primary"
                        class=" justify-center"
                        type="submit"
                        
                    >
                    Register
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
                name:null,
                email:null,
                telephone:null,
                password:null,
                password_confirmation:null
             },
             feedbackMsg:null
         };
     },
     methods: {
         submit()
        {
            this.feedbackMsg = null
            this.$store.dispatch('auth/register', this.user).then(
                data => {
                    this.feedbackMsg = data.message
                    this.$router.push('/user/login')
                },
                error => {
                   this.feedbackMsg = error.response.data.message
                   console.log(this.feedbackMsg)
                }
            ) 
        }
     },
     computed:{
         valid(){
            return this.user.name !== null &&
                    this.user.email !== null &&
                    this.user.telephone !== null && 
                    this.user.password !== null &&
                    this.user.password_confirmation !== null && this.user.password === this.user.password_confirmation
         },
         loggedIn()
         {
             return this.$store.state.auth.state.loggedIn
         }
    },
    mounted()
    {
        if(this.loggedIn){
            return this.$router.push("/dashboard")
        }
    }
  }
</script>

<style scoped>
 
</style>