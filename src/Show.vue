<template>
  <div class="container" style="flex-direction:row; align-items:center" >
    <div class="container" style="flex-direction:column; flex:1;">
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
    <!--
    <div class="category">
      <p class="group">
        <span>Schüler A</span>
      </p>
      <p class="weight">
        <span class="">-30</span>
        <span class="">KG</span>
      </p>
    </div>
    -->
  </div>
</template>

<script>
import Fight from './components/Fight'

export default {
  name: 'show',
  created: function () {
    var self = this
    var refresh = function () {
      location.reload();
      setTimeout(refresh, 3000);
    }
    setTimeout(refresh, 3000);
  },
  data: function () {
    return this.$parent.$data
  },
  components: {Fight}
}
</script>

<style>
.container{
  display: flex;
  /*flex-direction: row;*/
  /*align-items: center;*/
  /*align-content: stretch:*/
}

.container .row {
  flex-direction:row;
  align-items: center;
}

.first {
  width: 100px;
  /*float:left; [> add this <]*/
  /*border: 1px solid red;*/
  background-color: #99c0ff;
  font-weight: 600;
}
.second {
  flex:4;
  /*border: 1px solid green;*/
  /*overflow: hidden; [> if you don't want #second to wrap below #first <]*/
}

.category{
  background-color: #99c0ff;
}
</style>
