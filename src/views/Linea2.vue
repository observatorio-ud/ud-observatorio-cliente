<template>
  <v-container>
    <center>
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <v-icon class="mr-3" size="48px">mdi-firebase</v-icon>
          <h1 class="text-h4">INVESTIGACIÓN DE LAS TIC EN EDUCACIÓN</h1>
        </v-card-title>

        <v-tabs grow background-color="transparent" color="basil">
          <v-tab>
            <v-icon class="mr-3" size="48px">mdi-owl</v-icon>
            Investigadores UD
          </v-tab>
          <v-tab>
            <v-icon class="mr-3" size="48px">mdi-library </v-icon>
            Publicaciones UD
          </v-tab>
          <v-tab>
            <v-icon class="mr-3" size="48px">mdi-file-find-outline</v-icon>
            Artículos recomendados
          </v-tab>
          <v-tab>
            <v-icon class="mr-3" size="48px">mdi-account-group</v-icon>
            Proyectos y convocatorias de investigación
          </v-tab>
          <v-tab-item>
            <v-card color="basil">
              <v-card-text>texto tab2</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>texto tab2</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>texto tab3</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text>texto tab3</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </center>
    <!--
        <v-row>

      <v-col>
        <v-btn height="150px" width="350px">
          <v-icon class="mr-3" size="64px">mdi-google-classroom</v-icon>
          <span>Historias compartidas</span>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn height="150px" width="350px">
          <v-icon class="mr-3" size="64px">mdi-account-child</v-icon>
          <span>Docentes innovadores</span>
        </v-btn>
      </v-col>
    </v-row>
</center>
--->
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


 <style scoped>
.sinLine {
  text-decoration: none;
  text-size-adjust: 2px;
}
.basil {
  background-color: #fffbe6 !important;
}
</style>