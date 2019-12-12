<template>
  <div>
    <v-toolbar flat>
      <v-menu bottom left>
        <v-btn slot="activator" icon dark>
          <v-icon color="black">view_list</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in links" :key="i" :to="item.to" @click="">
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-title>Sample</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        links: [
          {
            to: '/',
            icon: 'mdi-table',
            text: 'Table'
          },
          {
            to: '/chart',
            icon: '',
            text: 'Chart'
          },
          {
            to: '/barcode',
            icon: '',
            text: 'Barcode'
          },
        ],
      };
    },
    methods: {
    },

  };
</script>

<style lang="scss">
</style>
