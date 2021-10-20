<template>
 <div>
   <h1>INSCRIPTION</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nom"
          placeholder="Entrer name"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" label="firstname:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.prenom"
          placeholder="Entrer firstname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Address email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Entrer email"
          required
        ></b-form-input>
      </b-form-group>
      
        <b-form-group
        id="input-group-1"
        label="Tel:"
        label-for="input-1"
        >
        <b-form-input
          id="input-1"
          v-model="form.telephone"
          type="telephone"
          placeholder="Entrer tel"
          required
        ></b-form-input>
      </b-form-group>

      <!-- <b-form-group id="input-group-2" label="pasword:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Entrer mot de passe"
          required
        ></b-form-input>
      </b-form-group> -->

    <b-form @submit.stop.prevent>
    <label for="text-password">Password</label>
    <b-form-input type="password" v-model="form.password" id="text-password" aria-describedby="password-help-block"></b-form-input>
    <b-form-text id="password-help-block">
      entrer un mot de passe de minimum 6 caractères.
    </b-form-text>
   </b-form>
      

      <!-- <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group> -->

      <!-- <b-form-group id="input-group-3" label="Sex:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.sex"
          :options="sex"
          required
        ></b-form-select>
      </b-form-group> -->

      <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->
       
      <b-button type="submit" variant="primary">S'inscrire</b-button>
       <div class="signup-link">déja m'embre? <NuxtLink to="/connect">connectez-vous</NuxtLink></div>
      <!-- <b-button type="reset" variant="danger">déjà un compte ?  </b-button> -->
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          password: '',
          // sex: null,
          // checked: []
        },
        // sex: [{ text: 'Select sex', value: null }, 'Masculin', 'Feminin', 'Ne pas specifier',],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        /*console.log(typeof(parseInt(this.form.telephone)))
        return*/
        //alert(JSON.stringify(this.form))
        
  //const ip =  this.$axios.$get('http://192.168.100.78:8000/utilisateurs/list')
  // return { ip }
  this.$axios.$post('http://192.168.100.78:8000/utilisateurs/add',
    //JSON.stringify(this.form)
          {nom: this.form.nom,
          prenom: this.form.prenom,
          email: this.form.email,
          telephone: parseInt(this.form.telephone),
          password: this.form.password, }
)
.then(function (reponse) {
    //On traite la suite une fois la réponse obtenue 

 
    console.log(reponse[0])
    
    alert(reponse[0])
    
})
.catch(function (erreur) {
    //On traite ici les erreurs éventuellement survenues

    console.log(erreur);
    alert("probleme survenue veillée ressayer")
});


      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.firstname = ''
        this.form.email = ''
        this.form.tel = ''
        this.form.password = ''
        // this.form.sex = null
        // this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
    
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}
body{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.container{
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}
.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container .title::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.content form .user-details{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
form .user-details .input-box{
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}
form .input-box span.details{
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details .input-box input{
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
  border-color: #9b59b6;
}
 form .gender-details .gender-title{
  font-size: 20px;
  font-weight: 500;
 }
 form .category{
   display: flex;
   width: 80%;
   margin: 14px 0 ;
   justify-content: space-between;
 }
 form .category label{
   display: flex;
   align-items: center;
   cursor: pointer;
 }
 form .category label .dot{
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}
 #dot-1:checked ~ .category label .one,
 #dot-2:checked ~ .category label .two,
 #dot-3:checked ~ .category label .three{
   background: #9b59b6;
   border-color: #d9d9d9;
 }
 form input[type="radio"]{
   display: none;
 }
 form .button{
   height: 45px;
   margin: 35px 0
 }
 form .button input{
   height: 100%;
   width: 100%;
   border-radius: 5px;
   border: none;
   color: #fff;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: 1px;
   cursor: pointer;
   transition: all 0.3s ease;
   background: linear-gradient(135deg, #71b7e6, #9b59b6);
 }
 form .button input:hover{
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
  }
 @media(max-width: 584px){
 .container{
  max-width: 100%;
}
form .user-details .input-box{
    margin-bottom: 15px;
    width: 100%;
  }
  form .category{
    width: 100%;
  }
  .content form .user-details{
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar{
    width: 5px;
  }
  }
  @media(max-width: 459px){
  .container .content .category{
    flex-direction: column;
  }
}
</style>