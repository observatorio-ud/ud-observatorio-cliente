<template>
  <!--
    <v-container >
    <v-layout >
      <v-flex class="xl12" >
        -->

  <v-container class="lighten-5 hcontainer">
  
    <v-carousel height="auto">
      <v-carousel-item
      
        src="../assets/images/PLANTILLA-01.jpg"
        reverse-transition="fade-transition"
      ></v-carousel-item>
        <v-carousel-item
      
        src="../assets/images/PLANTILLA-02.jpg"
        reverse-transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <!-- 
         </v-flex>
    </v-layout>
  </v-container>  
  -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {},
  mounted() {
    if (this.$route.query.reload && localStorage.reload !== "OK") {
      localStorage.reload = "OK";
      location.reload();
    }
  },
};
</script>
