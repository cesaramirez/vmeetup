<template>
 <div>
   <v-layout wrap>
     <v-flex xs12>
       <img src="https://static.pexels.com/photos/450597/pexels-photo-450597.jpeg" alt="" width="100%">
     </v-flex>
   </v-layout>
   <v-container>
     <v-layout align-center>
       <v-flex xs12 md10 class="mr-4">
         <div class="mb-4" >
          <h3>My Meetup</h3>
          <small>17th July 2018</small>
         </div>
         <p class="justify">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
       </v-flex>
       <v-flex xs12 md2>
        <v-btn color="primary">Register</v-btn>
       </v-flex>
     </v-layout>
   </v-container>
 </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus">
  .h-screen
    height: 100vh
  .justify
    text-align: justify
</style>
