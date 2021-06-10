<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <template slot="header">
              <!-- <h4 class="card-title">100 Awesome Nucleo Icons</h4>
              <p class="card-category">Handcrafted by our friends from <a target="_blank" href="https://nucleoapp.com/?ref=1712">NucleoApp</a></p> -->
            </template>
            <canvas id="chart" width="800" height="400"></canvas>
              <div class="stats"><br>
                <i class="nc-icon nc-check-2"></i> Fuente: https://api.covid19api.com
              </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="module">
  import Card from 'src/components/Cards/Card.vue'
  import datos from 'src/datos/datos'

  export default {
    components: {
      Card
    },
    data() {
      return {
        datos: datos
      }
    },
    methods: {

      async getData() {
        const response = await fetch('https://api.covid19api.com/total/dayone/country/chile')
        const data = await response.json()
        return data
      },

      totalCasesChart(data,ctx) {
        console.log('totalCasesChart', data[0].Date);
        var date = [], confirmed = [], deaths = [], recovered = [];
        for (let i= 0; i< data.length; i++) {
          date[i]= data[i].Date;
          confirmed[i]= data[i].Confirmed;
          deaths[i]= data[i].Deaths;
          recovered[i]= data[i].Recovered;
        };
        date= date.map(item => new Intl.DateTimeFormat('es-MX', { month: 'long', day: 'numeric' }).format(new Date(item)));
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: date,
            datasets: [
              {
                label: 'Fallecidos',
                borderColor: 'red',
                data: deaths,
              },
              {
                label: 'Recuperados',
                borderColor: 'green',
                data: recovered,       
              },
              {
                label: 'Confirmados',
                borderColor: 'orange',
                data: confirmed
              }
            ]
          },
          options: {
            scales: {
              xAxes: [{
                gridLines: {
                  display: false,
                }
              }]
            },
            title: {
              display: true,
              text: 'Todos los casos desde el primer reporte COVID-19',
              fontSize: 30,
              padding: 30,
              fontColor: '#12619c',
            },
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                boxWidth: 15,
                fontFamily: 'system-ui',
                fontColor: 'black',
              }
            },
            layout: {
              padding: {
                right: 50,
              }
            },
            tooltips: {
              backgroundColor: '#0584f6',
              titleFontSize: 20,
              xPadding: 20,
              yPadding: 20,
              bodyFontSize: 15,
              bodySpacing: 10,
              mode: 'x',
            },
            elements: {
              line: {
                borderWidth: 8,
                fill: false,
              },
              point: {
                radius: 6,
                borderWidth: 4,
                backgroundColor: 'white',
                hoverRadius: 8,
                hoverBorderWidth: 4,
              }
            }
          }
        })
      },
      async renderCharts() {
        const ctx = document.querySelector('#chart').getContext('2d');
        const data = await this.getData();
        //console.log('datos de getData', data)
        this.totalCasesChart(data, ctx);
      }
    },
    mounted() {
      this.renderCharts();
    }
  }
</script>
<style>

</style>
