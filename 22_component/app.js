// 定義する
var MyComponent = Vue.extend({
  template: '<div>A custom component!</div>'
})
// 登録する
Vue.component('my-component', MyComponent)
// root インスタンスを作成する
new Vue({
  el: '#app'
})