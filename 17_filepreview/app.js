var app = new Vue({
  el: '#app',
  data: {
    previewUrl: ''
  },
  methods: {
    onFileChange: function (event) {
      const file = event.target.files[0]
      if (!file) {
        return false
      }
      if (!file.type.match('image.*')) {
        return false
      }
      const reader = new FileReader()
      const that = this
      reader.onload = function (e) {
        that.previewUrl = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
})
