<template>
  <div class="div">
    <div class="block">
      <h3>Todo erstellen:</h3><br>
      <v-form fast-fail @submit.prevent id="vform" >
        <v-text-field width="200" v-model="todo.todo" label="Todo"></v-text-field>
        <VueDatePicker placeholder="Uhrzeit" locale="de" v-model="todo.time" time-picker 
         />
         <br>
        <VueDatePicker locale="de" placeholder="Datum" v-model="todo.date" cancelText="abbrechen" selectText="auswählen"
          :enable-time-picker="false" />
          <br>
        <v-btn width="100" type="submit" v-on:click="Submit()" block class="mt-2">Aufgabe erstellen</v-btn>
      </v-form>
    </div>
  </div>
</template>
<script>
import DataService from '@/DataService';
import moment from 'moment';

export default {
  name: 'CreateTodo',
  data() {

    return {
      menu2: false,
      modal2: false,
      todo: {
        todo: "",
        time: null,
        date: null,
        isDone: false
      }
    }
  },
  computed: {
    converttime: function(){
      let hours = this.todo.time.hours
      let minutes = this.todo.time.minutes
return `${hours}:${minutes}:00`
    },
    momentdate: function () {
      // `this` points to the vm instance
      return moment(this.todo.date).format('YYYY-MM-DD');
    }

  },
  methods: {
    con() { console.log(this.todo) },
    Submit() {

      var data = {
        todo: this.todo.todo,
        time: this.converttime,
        date: this.momentdate,
        isDone: false
      };
      if (this.todo.todo != "") {

        DataService.create(data)
          .then(response => {
            this.todo.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
            alert("Todo wurde erstellt!")
          })
          .catch(e => {
            console.log(e);
            alert("Ein Fehler ist aufgetreten.")
          });
        return
      }
      alert("Felder dürfen nicht leer sein!")
      
    },


  }

}

</script>
<style scoped>
.v-date-picker {
  zoom: 0.8;
}

h3 {
  font-size: 23px;
}

.div {
  display: flex;
  justify-content: center;
}

.v-btn {
  background-color: lightblue;
}

.v-calendar {
  width: 100px;

}
</style>