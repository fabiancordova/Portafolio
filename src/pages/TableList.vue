<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Todos los casos desde el primer reporte COVID-19</h4>
              <p class="card-category">Fuente: https://api.covid19api.com/total/dayone/country/chile</p>
            </template>
            <table class="table table-hover table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Confirmados</th>
                  <th scope="col">Recupeados</th>
                  <th scope="col">Fallecidos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(paciente, index) in listaCovid" :key="paciente.index">
                  <th scope="row"> {{ index+1 }} </th>
                  <td> {{ paciente.Date}} </td>
                  <td> {{ paciente.Confirmed}} </td>
                  <td> {{ paciente.Recovered}} </td>
                  <td> {{ paciente.Deaths}} </td>
                </tr>
              </tbody>
            </table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        listaCovid: null,
      }
    },
    methods: {
      async getData() {
        const response = await fetch('https://api.covid19api.com/total/dayone/country/chile')
        const data = await response.json();
        for (let i= 0; i< data.length; i++) {
          data[i].Date= Intl.DateTimeFormat('es-MX', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(data[i].Date));
        };
        this.listaCovid= data;
        //console.log('tableData', this.listaCovid);
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>
<style>
</style>
