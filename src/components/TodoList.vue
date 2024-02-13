<template>
  <div class="Todo">
    <div class="block">
    <h3>Todos</h3>
    <div>
      <div>
        <v-card width="500" v-for="todo in list" :key="todo">
          <v-list :items="items" class="bg-yellow px-1" v-if="todo.isDone === false">{{ todo.todo }}
            <v-btn class="ma-2 bg-green" color="green-accent-3" v-on:click="ToIsDone(todo.id)">
              <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
            </v-btn>
            <v-btn class="ma-2 bg-red" color="red-accent-2 " @click="deleteTodo(todo.id)">
              <v-icon start icon="mdi-minus-circle"></v-icon>
            </v-btn>
          </v-list>
        </v-card>
      </div>
      <div>
        <v-card class="" width="500" v-for="todo in list" :key="todo">
          <v-list :items="items" class="bg-green px-1 " v-if="todo.isDone === true">{{ todo.todo }}
            <v-btn class="ma-2 bg-red" @click="deleteTodo(todo.id)">
              <v-icon start icon="mdi-minus-circle"></v-icon>
            </v-btn>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 10px;
  color: rgb(32, 123, 153);
}

.v-btn{
  min-width: 0;
  min-height: 0;
  width: 40px;
  border-radius: 10%;
  height: 30px;
}
.v-icon{
  margin-inline: 0;
}
.Todo {
  display: flex;
  margin-top: 40px;
  justify-content: center;
}

button {
  font-size: 13px;
  width: 50px;
  height: 30px;
  border-radius: 5px;
}
</style>


<script>
import DataService from '@/DataService';
export default {
  name: 'TodoList',
  props: {
  },
  data() {
    return {
      list: null,
      id: null,
      selectedTodo: null,

    };
  },
  methods: {
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
    reload(){window.location.reload()},
  },
  mounted() {
    this.getData();
  }
}
</script>
