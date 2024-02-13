<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/newTodo">Todo erstellen</a>
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: 'VueNavbar',
  
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  background-color: rgb(121, 204, 231);
}</style>
  