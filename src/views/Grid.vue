<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" >
        <p>
          Después de nueve años de guerra entre aqueos y troyanos, una peste se
          desata sobre el campamento aqueo. Consultado el adivino Calcante,
          vaticina que la peste no cesará hasta que Criseida, esclava de
          Agamenón, sea devuelta a su padre Crises. La cólera de Aquiles se
          origina por la afrenta que le inflige Agamenón, quien al ceder a
          Criseida, arrebata a Aquiles su parte del botín, la joven sacerdotisa
          Briseida. Al haberse producido todo esto Aquiles se retira de la
          batalla, y asegura que solo volverá a ella cuando el fuego troyano
          alcance sus propias naves. Le pide a su madre Tetis, que convenza a
          Zeus para que ayude a los troyanos. Este acepta, ya que Tetis lo había
          ayudado cuando sus hermanos divinos se le rebelaron.
        </p>
      </v-col>
        <v-col cols="12" sm="12" >
        <p>
          Después de nueve años de guerra entre aqueos y troyanos, una peste se
          desata sobre el campamento aqueo. Consultado el adivino Calcante,
          vaticina que la peste no cesará hasta que Criseida, esclava de
          Agamenón, sea devuelta a su padre Crises. La cólera de Aquiles se
          origina por la afrenta que le inflige Agamenón, quien al ceder a
          Criseida, arrebata a Aquiles su parte del botín, la joven sacerdotisa
          Briseida. Al haberse producido todo esto Aquiles se retira de la
          batalla, y asegura que solo volverá a ella cuando el fuego troyano
          alcance sus propias naves. Le pide a su madre Tetis, que convenza a
          Zeus para que ayude a los troyanos. Este acepta, ya que Tetis lo había
          ayudado cuando sus hermanos divinos se le rebelaron.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      title: "Bienvenido",
      name: "",
      isLogin: false,
      buttons: [],
 
      isMobile: false,
    };
  },
  methods: {
    getName() {
      if (localStorage.name) {
        this.isLogin = true;
        this.name = localStorage.name;
       console.log("fecha: ", (new Date(Date.now())).toLocaleDateString());
        
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
  },
  mounted() {
    if (this.$route.query.reload && localStorage.reload !== "OK") {
      localStorage.reload = "OK";
      location.reload();
    }

    this.getName();
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>