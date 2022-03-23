<template>
  <v-container>
    <center>
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <v-icon class="mr-3" size="48px">mdi-lead-pencil</v-icon>
          <h1 class="text-h4">PRÁCTICAS EDUCATIVAS INNOVADORAS</h1>
        </v-card-title>

        <v-tabs grow background-color="transparent" color="basil">
          <v-tab>
            <v-icon class="mr-3" size="48px">mdi-calendar-clock</v-icon> Eventos
          </v-tab>
          <v-tab>
            <v-icon class="mr-3" size="48px">mdi-google-classroom</v-icon>
            Historias compartidas
          </v-tab>
          <v-tab>
            <v-icon class="mr-3" size="48px">mdi-account-child</v-icon>Docentes
            innovadores
          </v-tab>
          <v-tab-item>
            <v-card color="basil">
              <br />
              <v-row class="fill-height">
                <v-col>
                  <v-sheet height="64">
                    <v-toolbar flat>
                      <v-btn
                        outlined
                        class="mr-4"
                        color="grey darken-2"
                        @click="setToday"
                      >
                        Today
                      </v-btn>
                      <v-btn fab text small color="grey darken-2" @click="prev">
                        <v-icon small> mdi-chevron-left </v-icon>
                      </v-btn>
                      <v-btn fab text small color="grey darken-2" @click="next">
                        <v-icon small> mdi-chevron-right </v-icon>
                      </v-btn>
                      <v-toolbar-title v-if="$refs.calendar">
                        {{ $refs.calendar.title }}
                      </v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-menu bottom right>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            outlined
                            color="grey darken-2"
                            v-bind="attrs"
                            v-on="on"
                          >
                            <span>{{ typeToLabel[type] }}</span>
                            <v-icon right> mdi-menu-down </v-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item @click="type = 'day'">
                            <v-list-item-title>Day</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click="type = 'week'">
                            <v-list-item-title>Week</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click="type = 'month'">
                            <v-list-item-title>Month</v-list-item-title>
                          </v-list-item>
                          <v-list-item @click="type = '4day'">
                            <v-list-item-title>4 days</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-toolbar>
                  </v-sheet>
                  <v-sheet height="600">
                    <v-calendar
                      ref="calendar"
                      v-model="focus"
                      color="primary"
                      :events="events"
                      :event-color="getEventColor"
                      :type="type"
                      @click:event="showEvent"
                      @click:more="viewDay"
                      @click:date="viewDay"
                      @change="updateRange"
                    ></v-calendar>
                    <v-menu
                      v-model="selectedOpen"
                      :close-on-content-click="false"
                      :activator="selectedElement"
                      offset-x
                    >
                      <v-card color="grey lighten-4" min-width="350px" flat>
                        <v-toolbar :color="selectedEvent.color" dark>
                          <v-btn icon>
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                          <v-toolbar-title
                            v-html="selectedEvent.name"
                          ></v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </v-toolbar>
                        <v-card-text>
                          <span v-html="selectedEvent.details"></span>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                            text
                            color="secondary"
                            @click="selectedOpen = false"
                          >
                            Cancel
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-menu>
                  </v-sheet>
                </v-col>
              </v-row>
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
        </v-tabs>
      </v-card>
    </center>
    <!--
        <v-row>
      <v-col >
        <v-btn height="150px" width="350px">
          <v-icon class="mr-3" size="64px">mdi-calendar-clock</v-icon> <span>Eventos</span>
        </v-btn>
      </v-col>
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

<script>
export default {
  data: () => ({
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
 <style scoped>
.sinLine {
  text-decoration: none;
  text-size-adjust: 2px;
}
.basil {
  background-color:  #FFFBE6
 !important;
}
</style>
