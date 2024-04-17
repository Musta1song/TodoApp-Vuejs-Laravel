<template>
  <div>
    <v-toolbar dark prominent>
      <v-btn href="/" flat>Home</v-btn>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="/newTodo" flat>Todo erstellen</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'VueNavbar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: rgb(121, 204, 231);
}
</style>