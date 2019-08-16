Vue.component('comp-child',{
  template: '<p> {{ val }} </p>',
  props:['val']
})

new Vue({
  el: '#app'
})