<template>
  <div class="Todo">
    <div class="todoCorrect">
      <h3 class="text-purple">Todo</h3>

      <h3> &nbsp;
      </h3>
      <div v-for="todo in list" :key="todo">
        <div class="flex" v-if="todo.isDone === false">
          <v-card width="300">
            <v-list :items="items" class="bg-yellow px-1">{{ todo.todo }}
            </v-list>
            <v-btn class="ma-2" color="green-accent-3" v-on:click="ToIsDone(todo.id)">
              <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
            </v-btn>
            <v-btn class="ma-2" color="red-accent-2 " v-on:click="deleteTodo(todo.id)">
              <v-icon start icon="mdi-minus-circle"></v-icon>
            </v-btn>
          </v-card>
        </div>
        <div class="flex" v-else>
          <v-card width="300">
            <v-list :items="items" class="bg-green px-1">{{ todo.todo }}</v-list>
            <v-btn class="ma-2" color="red-accent-2 " v-on:click="deleteTodo(todo.id)">
              <v-icon start icon="mdi-minus-circle"></v-icon>
            </v-btn>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  display: flex;
}

.Todo {
  display: flex;
  justify-content: center;
}

.todoCorrect {
  display: block;
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
      window.location.reload();
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
      window.location.reload();

    },
    getIdByRadioEvent(event) {
      this.id = event.target.value;
      console.log(this.id)
      const bt = document.getElementById("button");
      bt.style.visibility = "visible"
    }
  },
  mounted() {
    this.getData();
  }
}
</script>
