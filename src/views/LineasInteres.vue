<template>
  <v-container >
    <br/><br/><br/><br/>
    <v-row>
      <v-col>
        <a href="Linea1" class="sinLine">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card class="mx-auto " :elevation="hover ? 16 : 4" :color="hover ? '#B2EBF2':''">
              <v-card-text class="text-center">
                <v-icon size="64px">mdi-lead-pencil</v-icon>
              </v-card-text>
              <v-list-item two-line>
                <v-list-item-content>
                  <p class="text-h5 text-center">
                PRÁCTICAS EDUCATIVAS INNOVADORAS 
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-hover>
        </a> </v-col
      ><v-col>
        <a href="Linea2" class="sinLine">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card class="mx-auto " :elevation="hover ? 16 : 2" :color="hover ? '#B2EBF2':''">
              <v-card-text class="text-center">
                <v-icon size="64px">mdi-firebase</v-icon>
              </v-card-text>
              <v-list-item two-line>
                <v-list-item-content>
                  <p class="text-h5 text-center">
                    INVESTIGACIÓN DE LAS TIC EN EDUCACIÓN
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-hover>
        </a> </v-col
      ><v-col>
        <a href="Linea3" class="sinLine">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card class="mx-auto "   :elevation="hover ? 16 : 2" :color="hover ? '#B2EBF2':''">
              <v-card-text class="text-center">
                <v-icon size="64px">mdi-account-child</v-icon>
              </v-card-text>
              <v-list-item two-line>
                <v-list-item-content>
                  <p class="text-h5 text-center">
                    LAS TIC EN EDUCACIÓN EN CIFRAS
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-hover>
        </a>
      </v-col>
    </v-row>

    <!--
    <v-btn height="150px">
      <v-icon size="64px">mdi-finance</v-icon>
      <span>LAS TIC EN EDUCACIÓN EN CIFRAS</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-account-child</v-icon>
      <span>Docentes innovadores</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-firebase</v-icon>
      <span>INVESTIGACIÓN DE LAS TIC EN EDUCACIÓN</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-desktop-mac-dashboard</v-icon>
      <span>Practicas</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-notebook </v-icon> <span>Favorites</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-owl</v-icon> <span>Investigadores UD</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-telescope </v-icon>
      <span>Recent</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-globe-model</v-icon>
      <span>Mapamundi de los observatorios</span>
    </v-btn>

    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-google-classroom</v-icon>
      <span>Historias compartidas</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <br /><br />

    <v-btn height="150px">
      <v-icon size="64px">mdi-google-keep</v-icon> <span>Nearby</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;

    <v-btn height="150px">
      <v-icon size="64px">mdi-lightbulb-on-outline</v-icon> <span>Nearby</span>
    </v-btn>

    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-database</v-icon> <span>Nearby</span>
    </v-btn>

    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-calendar-clock</v-icon> <span>Eventos</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;

    <v-btn height="150px">
      <v-icon size="64px">mdi-lead-pencil</v-icon>
      <span>PRÁCTICAS EDUCATIVAS INNOVADORAS</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-shape </v-icon> <span>Gestion</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-account-group </v-icon>
      <span>Proyectos y convocatorias de investigación</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-shield-check-outline</v-icon>
      <span>Politicas</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-file-find-outline </v-icon>
      <span>Artículos recomendados</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-library </v-icon> <span>publicaciones UD</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-presentation-play </v-icon>
      <span>Recursos educativos</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-account-edit </v-icon> <span>Formacion</span>
    </v-btn>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn height="150px">
      <v-icon size="64px">mdi-city-variant-outline </v-icon>
      <span>Infraestructura</span>
    </v-btn>

    <a href="#">
      <v-card class="mx-auto h" max-width="300">
        <v-card-text class="text-center">
          <v-icon size="64px">mdi-file-eye-outline</v-icon>
        </v-card-text>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 text-center">
              Aqui va el texto
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </a>
    -->
  </v-container>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      buttons: [
        {
          text: "Inicio",
          route: "/home",
          description: "Inicio repositorio",
          icon: "mdi-home-account",
        },
        {
          text: "Usuarios",
          route: "/users",
          description: "Administración de usuarios",
          icon: "mdi-account-group",
        },
      ],
    };
  },
};
</script>
 <style scoped>
.sinLine {
  text-decoration: none;
  text-size-adjust: 2px;
}
</style>
