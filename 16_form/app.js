var app = new Vue({
  el: '#app',
  data: {
    rating: 3,
    comment: '',
    error: '',
    submitted: false
  },
  methods: {
    onSubmit: function () {
      // 実際はここでWeb APIを叩いて
      // フォームの内容をサーバに送信するはず

      // dataの内容はthisからアクセスできる
      this.error = ''
      if (this.comment === '') {
        this.error = 'コメントは必須です。'
        return false
      }

      // フォームの内容を表示
      this.submitted = true
    },
    clearForm: function () {
      this.submitted = false
      this.rating = 3
      this.comment = ''
    }
  }
})
