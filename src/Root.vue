<template>
  <div>
    <h1>Gladiator Admin <small><router-link to="/show">2. Fenster öffnen</router-link></small></h1>

    <!--
      <div>
        <h1>Kategorie</h1>
        <span class="label">Kategorie</span>
        <input id="category" type="text" />
        <span class="label">Gewicht</span>
        <input id="weight" type="text" />
      </div>
      -->
    <div style="display:flex;align-items:center;">
      <div>
        <div>
          <span class="first">4.</span>
          <fight class="second" :editable="true" :pos="3"></fight>
        </div>
        <div>
          <span class="first">5.</span>
          <fight :editable="true" :pos="4"></fight>
        </div>
        <div>
          <span class="first">6.</span>
          <fight :editable="true" :pos="5"></fight>
        </div>
      </div>
      <div id="controls">
        <button v-on:click="next">Nächster Kampf</button>
      </div>
      <div>
        <div class="container row">
          <span class="first">Aktueller Kampf</span>
          <fight class="second" :pos="0"></fight>
        </div>
        <div class="container row">
          <span class="first">Nächster Kampf</span>
          <fight class="second" :pos="1"></fight>
        </div>
        <div class="container row">
          <span class="first">Vorbereiten</span>
          <fight class="second" :pos="2"></fight>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*import store from './Store'*/
import Fight from './components/Fight'

export default {
  name: 'AdminView',
  components: {Fight},
  data: function () {
    return this.$parent.$data
  },
  methods: {
    next: function () {
      this.fighters.splice(0, 2)
      this.fighters.push({name: '', surname:''})
      this.fighters.push({name: '', surname:''})
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

div#content {
  background-color: red;
}

.first {
  font-weight: 600;
  background-color: #99c0ff;
}
</style>
