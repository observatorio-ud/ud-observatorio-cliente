<template>
  <!--
    <v-container >
    <v-layout >
      <v-flex class="xl12" >
        -->
  <v-carousel height="auto">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  <!-- 
         </v-flex>
    </v-layout>
  </v-container>  
  -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
      ],
         
    };
  },
  methods: {
 
   },
  mounted() {
    if (this.$route.query.reload && localStorage.reload !== "OK") {
      localStorage.reload = "OK";
      location.reload();
    }

   },
};
</script>
