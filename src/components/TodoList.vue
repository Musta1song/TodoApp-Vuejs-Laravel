<template>
  <div class="flex ">
    <div class="todos">
      <v-list-item title="Todos"><v-btn v-on:click="edit()" class="float-end	bg-red"> <svg-icon type="mdi" :path="path2"></svg-icon>
        </v-btn></v-list-item>
      <v-divider></v-divider>
      <div v-for="todo in list" :key="todo">
        <div v-if="todo.date == momentdate && todo.isDone == false">
          <v-list-item class="bg-white" link :title=todo.todo>{{ formatTime(todo.time) }}
            <v-btn class="ma-2 bg-green" color="green-accent-3" v-on:click="ToIsDone(todo.id)">
              <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
            </v-btn>
            <v-btn class="ma-2 bg-red" color="red-accent-2 " @click="deleteTodo(todo.id)" id="deletebt">
              <v-icon start icon="mdi-minus-circle"></v-icon>
            </v-btn>
          </v-list-item>
        </div>
        <div v-if="todo.date == momentdate && todo.isDone == true">
          <v-list-item class="bg-green" link :title=todo.todo>
            {{ formatTime(todo.time) }}
            <v-btn class="ma-2 bg-red" @click="deleteTodo(todo.id)" id="deletebt">
              <v-icon start icon="mdi-minus-circle"></v-icon>
            </v-btn>
          </v-list-item>
        </div>
        <v-divider></v-divider>

      </div>
    </div>

    <div class="calendar">
      <VDatePicker v-model="date" mode="date" hide-time-header="true" />
    </div>
  </div>

</template>
<script>
import DataService from '@/DataService';
import moment from 'moment';
import { mdiPencil } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  name: 'TodoList',
  components: {
    SvgIcon
  },
  data() {
    return {
      date: new Date(),
      list: [],
      id: null,
      path2: mdiPencil,
      selectedTodo: null,
    };
  },
  computed: {
    momentdate: function () {
      // `this` points to the vm instance
      return moment(this.date).format('YYYY-MM-DD');
    }

  },
  methods: {

    formatTime(time) {
      let newtime = moment(time, "HH:mm:ss").format("LT");
      console.log(newtime)
      return newtime
    },
    edit() {
      for (let i = 0; i < this.list.length; i++) {

        const deleteBt = document.querySelectorAll("[id='deletebt']")
        for (let i = 0; i < deleteBt.length; i++) {

          deleteBt[i].style.visibility = "visible"
        }
      }


    },

    getData() {
      DataService.getAll()
        .then(response => {

          this.list = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    ToIsDone(ID) {
      DataService.update(ID)
        .then(response => {
          this.list.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      setTimeout(this.reload, 500)

    },
    deleteTodo(ID) {
      DataService.delete(ID)
        .then(response => {
          this.list.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      setTimeout(this.reload, 500)


    },
    reload() { window.location.reload() },
  },
  mounted() {
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-btn {
  min-width: 0;
  min-height: 0;
  width: 40px;
  border-radius: 10%;
  height: 25.0px;
}

.v-icon {
  margin-inline: 0;
}
#deletebt{
  visibility: hidden;
  float: right;
}
.v-calendar {
  height: 0;
}


.todos {
  width: 30%;
  height: 100vh;
  background-color: rgb(153, 10, 10)
}
</style>
