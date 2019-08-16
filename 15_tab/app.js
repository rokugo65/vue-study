var app = new Vue({
  el: '#app',
  data: {
    currentTab: 1
  },
  methods: {
    toggle: function (tab) {
      this.currentTab = tab
    }
  }
})
