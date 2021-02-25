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
                
             }
         };
     },
     methods: {
         submit()
         {
             console.log(this.user)
         }
     },
     computed:{
         valid(){
            return this.user.email !== null &&
                    this.user.password !== null 
         },
     }
  }
</script>

<style scoped>
 
</style>