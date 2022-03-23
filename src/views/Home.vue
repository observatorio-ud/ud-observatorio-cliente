<template >
  <v-layout>
    <v-flex class="xl12">
      <!--
     <v-container >
        -->

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

      <center>
      <h2 class="my-2">Noticias</h2>
       <v-divider></v-divider>
      </center>
      <v-row>
        <v-col>
          <v-card class="noti mx-auto">
            <v-img
              src="https://vicentgadea.com/wp-content/uploads/2021/12/Cabecera-articulos-web-Copy-1.png"
              height="200px"
            ></v-img>
            <v-card-title> Fichas y actividades interactivas </v-card-title>
            <v-card-subtitle>#claustrovirtual <br/>#edtech #tipVG</v-card-subtitle>
            <v-card-text>29/11/2021</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined rounded color="white" target="_blank"
              href="https://vicentgadea.com/top-apps-crear-fichas-interactivas">
                Leer más
                <v-icon class="ml-2">mdi-eye-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="noti mx-auto">
            <v-img
              src="https://contactomaestro.colombiaaprende.edu.co/sites/default/files/maestrospublic/bancorecursos/Despertar-esperanza-y-optimismo.png"
              height="200px"
            
            ></v-img>

            <v-card-title> Todos a aprender </v-card-title>
            <v-card-subtitle> #DirectivosDocentes <br/>#EscuelaDeLiderazgo</v-card-subtitle>
            <v-card-text>02/01/2022</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined rounded color="white" target="_blank"
              href="https://contactomaestro.colombiaaprende.edu.co/banco-de-recursos/textual/herramienta-practica-despertar-esperanza-y-optimismo-actividades">
                Leer más
                <v-icon class="ml-2">mdi-eye-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="noti mx-auto">
            <v-img
              src="https://pbs.twimg.com/media/FLW6-PnX0AM4iyo?format=jpg&name=small"
              height="200px"   
            ></v-img>

            <v-card-title> Ampliación excepcional </v-card-title>
            <v-card-subtitle> #investigadores <br/>#CIDC </v-card-subtitle>
            <v-card-text>11/02/2022</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined rounded color="white" target="_blank"
              href="https://twitter.com/cidcudistrital/status/1492304790793203714/photo/1">
                Leer más
                <v-icon class="ml-2">mdi-eye-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="noti mx-auto">
            <v-img
              src="http://www.maker.babelcampus.net/sitepad-data/uploads//2021/11/social-media-g8ab76003a_1920.jpg"
              height="200px"
            ></v-img>

            <v-card-title> Clubes Maker </v-card-title>
            <v-card-subtitle> Desarrolló una web para disponibilizar materiales y estrategias multimodales </v-card-subtitle>
            <v-card-text>14/02/2022</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined rounded color="white" target="_blank"
              href="http://www.maker.babelcampus.net/services/">
                Leer más
                <v-icon class="ml-2">mdi-eye-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <!-- 
        
  
   </v-container>
  -->
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      show: false,
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
<style scoped>
.noti {
  max-width: 400px;
  background-color: #00acc1;
}
</style>
