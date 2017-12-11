<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import saveState from 'vue-save-state';

export default {
  name: 'app',
  mixins: [saveState],
  data: function (){
    return {
      fighters : [
        { name: '', surname: '' },
        { name: '', surname: '' },
        { name: '', surname: '' },
        { name: '', surname: '' },
        { name: '', surname: '' },
        { name: '', surname: '' },
        { name: 'A1', surname: 'Schmid' },
        { name: 'B1', surname: 'Wey' },
        { name: 'A2', surname: 'Schmid' },
        { name: 'B2', surname: 'Wey' },
        { name: 'A3', surname: 'Schmid' },
        { name: 'B3', surname: 'Wey' }
      ]
    }
  },
  methods: {
    getSaveStateConfig() {
      return {
        'cacheKey': 'nameOfYourComponent',
      }
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
}

div#content {
  background-color: red;
}
</style>
