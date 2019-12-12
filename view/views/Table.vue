<template>
  <v-container>
    <v-layout>
      <v-flex xl2 kg1 >
        <v-select
          :items="httpMethods"
          v-model="selectedMethod"
          label="Select"
          single-line
        ></v-select>
      </v-flex>
      <v-flex xl6 lg3>
        <v-text-field
          v-model="requestUrl"
          label="Request URL"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xl2 lg1>
        <v-btn text small color="dark" @click="requestToServer(selectedMethod, requestUrl)">SEND</v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-if="selectedMethod==='POST'">
        <v-textarea v-model="body" name="body" label="body" value="{}"></v-textarea>
    </v-layout>
    <v-layout>
      <v-flex xl12 lg6 md3>
        <v-data-table
          :headers="headers"
          :items-per-page="10"
          :items="sample"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left" v-for="col in props.item">{{ col }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Table',
    data() {
      return {
        headers: [
          { text: 'Col1 ', value: 'col1', },
          { text: 'Col2 ', value: 'col2', },
          { text: 'Col3 ', value: 'col3', },
        ],
        sample: [
          {col1: 'hi', col2: 'hello', col3: 'banga'}
        ],
        httpMethods: [
          { text: 'GET' }, { text: 'POST' }, { text: 'PUT' }, { text: 'DELETE' }
        ],
        selectedMethod: 'GET',
        requestUrl: null,
        body: null
      };
    },
    methods: {
      requestToServer(httpMethod, url) {
        console.log(this.body);
        this.$http({
          method: httpMethod,
          url: url,
          data: this.body
        }).then(response => {
          this.headers = this.getHeaders(response.data);
          this.sample = response.data;
        })
      },
      getHeaders(jsonData) {
        let newHeaders = [];
        for (var key in jsonData[0]) {
          let row = {};
          row['text'] = key;
          newHeaders.push(row);
        }
        console.log(newHeaders);
        console.log(this.headers);
        return newHeaders;
      }
    }
  };
</script>

<style scoped>

</style>
