<template>
  <div class="div">
    <br>
    <div class="divCorrect">
      <h3>Neue Aufgabe</h3><br>
      <v-sheet width="200" class="mx-auto">
        <v-form fast-fail @submit.prevent>
          <v-text-field width="300" id="vtextfield" v-model="list.todo" label="Aufgabe"></v-text-field>


          <v-btn width="100" type="submit" v-on:click="Submit()" block class="mt-2">Aufgabe erstellen</v-btn>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 50px;
  font-size: 23px;
}

.div {
  display: flex;
  justify-content: center;
}

.v-btn {
  background-color: lightblue;
}

.v-form {}

.divCorrect {
  display: block;
}
</style>
  
<script>
import DataService from '@/DataService';
export default {
  name: 'CreateTodo',
  data() {
    return {
      list: {
        todo: "",
        isDone: false
      }
    }
  },
  methods: {
    Submit() {

      var data = {
        todo: this.list.todo,
        isDone: false
      };
      if (this.list.todo != "") {

        DataService.create(data)
          .then(response => {
            this.list.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
            alert("Todo wurde erstellt!")
          })
          .catch(e => {
            console.log(e);
          });
      } else if (this.list.todo == "") {
        alert("Feld darf nicht leer sein aus.")
        const vTextField = document.getElementById("vtextfield");
        vTextField.style.border = "1px solid red";
      }
    },


  }

}

</script>
  
  