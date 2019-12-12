<template>
  <div id="sample-chart">
    <v-container fluid fill-height>
      <v-layout wrap>
        <v-flex xl4>
          <reactive-bar-chart :chart-data="chartData"></reactive-bar-chart>
        </v-flex>
        <v-flex xl4>
          <reactive-line-chart :chart-data="chartData2"></reactive-line-chart>
        </v-flex>
        <v-flex xl4>
          <reactive-pie-chart :chart-data="chartData3"></reactive-pie-chart>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import ReactiveBarChart from '@/plugins/chart/ReactiveBarChart';
  import ReactiveLineChart from '@/plugins/chart/ReactiveLineChart';
  import ReactivePieChart from '@/plugins/chart/ReactivePieChart';

  export default {
    name: 'Chart.vue',
    components: {ReactivePieChart, ReactiveLineChart, ReactiveBarChart},
    data() {
      return {
        chartData: null,
        chartData2: null,
        chartData3: null
      };
    },
    methods: {
      generateData() {
        let newArray = [];
        for (let i = 0; i < 10; i++) {
          let randomValue = Math.floor(Math.random() * 10);
          newArray.push(randomValue);
        }

        this.chartData = {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#F87979',
              data: newArray
            }
          ]
        };
        this.chartData2 = {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#7979F8',
              data: newArray
            }
          ]
        };
        this.chartData3 = {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'GreenYellow', 'Brown', 'Cyan', 'HotPink'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'greenYellow', 'brown', 'cyan', 'hotPink'],
              data: newArray
            }
          ]
        };
      }
    },
    mounted() {
      setInterval(this.generateData, 2000);
    }
  };

</script>

<style scoped>
  #sample-chart {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    overflow-y: auto;
  }
</style>
