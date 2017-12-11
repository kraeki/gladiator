<template>
  <div>
    <div v-if="isEditable">
      <div class="fighter-red">
        <input v-model="red.surname" placeholder="Name" type="text" />
        <input v-model="red.name" placeholder="Vorname" type="text" />
      </div>
      <div class="fighter-white">
        <input v-model="white.surname" placeholder="Name" type="text" />
        <input v-model="white.name" placeholder="Vorname" type="text" />
      </div>
    </div>
    <div v-else="!isEditable">
      <div class="fighter-red">
        <span>{{red.surname.toUpperCase()}} {{red.name}}</span>
      </div>
      <div class="fighter-white">
        <span>{{white.surname.toUpperCase()}} {{white.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fight',
  props: ['pos', 'editable'],
  template: '#person-template',
  data: function () {
    return {
      store: this.$parent.$data
    }
  },
  computed: {
    isEditable: function () {
      return this.editable === true
    },
    red: function () {
      var len = this.store.fighters.length
      var ret = { name: '', surname: '' }
      var pos = this.pos * 2
      if (pos < len){
        ret = this.store.fighters[pos]
      }
      return ret
    },
    white: function () {
      var len = this.store.fighters.length
      var ret = { name: '', surname: '' }
      var pos = this.pos * 2 + 1
      if (pos < len){
        ret = this.store.fighters[pos]
      }
      return ret
    }
  }
}
</script>

<style>
.fighter-red,
.fighter-white {
  padding: 0px;
  margin: 0.2em;
  font-size: 1.3em;
  min-height: 1.5em;
  display: block;
}
div.fighter-red {
  background-color: #ff7575;
}
div.fighter-white {
  background-color: #dddbdb;
}
</style>
