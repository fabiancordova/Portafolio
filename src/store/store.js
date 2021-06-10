import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datosCovid: null,
    indicadores: null,
    indicadorDolar: null,
    indicadorUF: null,
  },
  getters: {
    getIndicadores(state) {
      return state.indicadores;
    },
    getIndicadorDolar(state) {
      return state.indicadorDolar;
    },
    getIndicadorUF(state) {
      return state.indicadorUF;
    },
    getIndicadorUF(state) {
      return state.datosCovid;
    }
  },
  mutations: {
    mutationsIndicadores(state, indicadores) {
      state.indicadores = indicadores;
    },
    mutationstIndicadorDolar(state, indicadorDolar) {
      state.indicadorDolar = indicadorDolar;
    },
    mutationsIndicadorUF(state, indicadorUF) {
      state.indicadorUF = indicadorUF;
    },
    mutationsDatosCovid(state, datosCovid) {
      state.datosCovid = datosCovid;
      console.log('state.datosCovid', state.datosCovid);
    }
  },
  actions: {
    actionIndicadores(context, indicadores) {
      context.commit("mutationsIndicadores", indicadores);
    },
    actionIndicadorDolar(context, indicadorDolar) {
      context.commit("mutationstIndicadorDolar", indicadorDolar);
      console.log("mutationstIndicadorDolar", indicadorDolar);
    },
    actionIndicadorUf(context, indicadorUF) {
      context.commit("mutationsIndicadorUF", indicadorUF);
    },
    actionDatosCovid(context, datosCovid) {
      context.commit("mutationsDatosCovid", datosCovid);
      console.log(' actionDatosCovid', datosCovid);
    }    
  }
});
