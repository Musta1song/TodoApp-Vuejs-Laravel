import { createWebHistory, createRouter } from "vue-router";
import TodoList from './components/TodoList.vue'
import CreateTodo from './components/CreateTodo.vue'
const routes =  [
  {
    path: "/",
    alias: "/todolist",
    name: "todolist",
    component: TodoList
  },

  {
    path: "/createtodo",
    name: "add",
    component: CreateTodo
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;