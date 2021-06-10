<template color="grey lighten-4">
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="Perfil"
      >
        Profesional más de 10 años de experiencia en empresas de Telecomunicaciones, 
        trabajando principalmente en áreas de Operaciones, Proyectos y Gestión de Procesos.
      </content-section>
      <!-- <content-section
        v-if="prouds"
        title="What am I proud of?"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section> -->
      <content-section
        v-if="educations"
        title="Títulos"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from1 }} - {{ education.to1 }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title1">{{ education.title1 }}</strong>,
            <span v-if="education.location">
              <i>{{ education.location }}</i>
            </span>
            <!-- <div v-if="education.description">
              {{ education.description }}
            </div> -->
          </v-flex>
        </v-layout><br>

        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from2 }} - {{ education.to2 }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title2">{{ education.title2 }}</strong>,
            <span v-if="education.location">
              <i>{{ education.location }}</i>
            </span>
            <!-- <div v-if="education.description">
              {{ education.description }}
            </div> -->
          </v-flex>
        </v-layout>

      </content-section>

      <content-section
        v-if="cursos"
        title="Cursos"
      >
        <v-layout
          v-for="(curso, i) in cursos"
          :key="i"
        >
          <v-flex md4>
            {{ curso.from1 }} - {{ curso.to1 }}
          </v-flex>
          <v-flex md8>
            <strong v-if="curso.title1">{{ curso.title1 }}</strong>,
            <span v-if="curso.location">
              <i>{{ curso.location }}</i>
            </span>
            <!-- <div v-if="education.description">
              {{ education.description }}
            </div> -->
          </v-flex>
        </v-layout><br>

        <v-layout
          v-for="(curso, i) in cursos"
          :key="i"
        >
          <v-flex md4>
            {{ curso.from2 }} - {{ curso.to2 }}
          </v-flex>
          <v-flex md8>
            <strong v-if="curso.title2">{{ curso.title2 }}</strong>,
            <span v-if="curso.location">
              <i>{{ curso.location }}</i>
            </span>
            <!-- <div v-if="education.description">
              {{ education.description }}
            </div> -->
          </v-flex>
        </v-layout>

      </content-section>


      <content-section
        v-if="skills"
        id="to-timeline"
        title="Skills"
      >
        <template slot="actions">
          <!-- (% are relative not absolute) -->
        </template>
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon  :class="skill.icon">
                   {{ skill.title }}
                  </v-icon>
                </div>
                <!-- <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                ></v-progress-linear> -->
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>

      <content-section title="Experiencia">
        <p>Ingeniero de Procesos en Instituto de Previsión Social. Noviembre, 2019 - Febrero, 2020</p>
        <p>Ingeniero de Redes en SETTIME, Diciembre, 2018 – Abril, 2019</p>
        <p>Ingeniero Senior Administración de Redes en ENTEL, Diciembre,2014 – Octubre,2018</p>
        <p>Ingeniero de Operaciones en ENTEL, Noviembre, 2007- Noviembre, 2014</p>
        <p>Ingeniero de Redes en ARMADA DE CHILE, Febrero, 2005 – Octubre, 2007</p>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from 'src/pages/UserProfile/Section.vue'

export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    // prouds: [
    //   {
    //     icon  : 'mdi-help-rhombus-outline',
    //     text  : 'Answered 10M+ questions!',
    //     source: '(Bytegate.ir post views)',
    //   },
    //   {
    //     icon  : 'mdi-library-music',
    //     text  : 'Made people enjoy and learn a new language for equivalent of 29+ years (older than myself!)',
    //     source: '(Bobet.ir and its channel downloads)',
    //   },
    //   {
    //     icon  : 'mdi-timer-sand',
    //     text  : 'Saved +110 days of time of students, writers and etc!',
    //     source: '(Delix.ir service usages)',
    //   },
    //   {
    //     icon  : 'mdi-account-multiple',
    //     text  : 'Tried to cover small part of 7 people expenses.',
    //     source: '(My awesome colleagues)',
    //   },
    // ],
    educations: [
      {
        from1       : '1986',
        to1         : '1992',
        title1      : 'Ingeniero Ejecución Electrónico',
        from2       : '1994',
        to2         : '1999',
        title2      : 'Ingeniero Civil Industrial',
        location   : 'Universidad Técnica F. Santa María',
        description: '',
      },
    ],
    cursos: [
      {
        from1       : 'Oct/2020',
        to1         : 'Nov/2020',
        title1      : 'Auditor de Ciberseguridad',
        from2       : 'Nov/2020',
        to2         : 'Feb/2021',
        title2      : 'Desarrollador Front-End',
        location   : 'Universidad Adolfo ibañez',
        description: '',
      },
    ],
    skills: [
      {
        title: 'HTML',
        icon : 'mdi mdi-language-html5',
        value: 95,
      },
      {
        title: 'CSS',
        icon : 'mdi mdi-language-css3',
        value: 95,
      },
      {
        title: 'JavaScript',
        icon : 'mdi mdi-language-javascript',
        value: 80,
      },
      {
        title: 'Angular',
        icon : 'mdi mdi-angular',
        value: 90,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi mdi-vuejs',
        value: 90,
      },
      { divider: true },
      {
        title: 'SASS',
        icon : 'mdi mdi-sass',
        value: 90,
      },
      {
        title: 'Bootstrap',
        icon : 'mdi mdi-bootstrap',
        value: 90,
      },
      {
        title: 'Firebase',
        icon : 'mdi mdi-firebase',
        value: 90,
      },
      {
        title: 'Vuetify',
        icon : 'mdi mdi-vuetify',
        value: 90,
      },
      {
        title: 'Test Driven Development',
        icon : 'mdi mdi-test-tube',
        value: 26,
      },
      {
        title: 'Windows',
        icon : 'mdi mdi-microsoft-windows',
        value: 90,
      },
      {
        title: 'Linux',
        icon : 'mdi mdi-linux',
        value: 90,
      },
      {
        title: 'Ubuntu',
        icon : 'mdi mdi-ubuntu',
        value: 70,
      },
      {
        title: 'Security Network',
        icon : 'mdi mdi-security-network',
        value: 47,
      }
      // {
      //   title: 'Web Application Security',
      //   icon : 'mdi-shield-lock',
      //   value: 80,
      // },
      // {
      //   title: 'Continuous Integration / Continuous Delivery',
      //   icon : 'mdi-truck-fast',
      //   value: 35,
      // },
      // {
      //   title: 'Git',
      //   icon : 'mdi-git',
      //   value: 67,
      // },
      // { divider: true },
      // {
      //   title: 'Hardware Development',
      //   icon : 'mdi-chip',
      //   value: 29,
      // },
      // {
      //   title: 'C/C++',
      //   icon : 'mdi-language-cpp',
      //   value: 38,
      // },
      // { divider: true },
      // {
      //   title: 'Leadership',
      //   icon : 'mdi-account-group',
      //   value: 68,
      // },
      // {
      //   title: 'Content Marketing (+340 articles)',
      //   icon : 'mdi-text',
      //   value: 96,
      // },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
