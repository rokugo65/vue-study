var app = new Vue({
  el: '#app',
  data: {
    display: '0',
    state: 0,
    argumant_1: '0',
    argumant_1_state: 0,
    argumant_2: '',
    argumant_2_state: 0,
    operator: '',
  },
  methods: {
    input: function (_inNum) {
      if(this.state != 2){
        if (this.state == 0 && String(this.argumant_1).length < 22) {
          if(this.argumant_1 == '0'){
            this.argumant_1 = String(_inNum)
          }else{
            this.argumant_1 += String(_inNum)
          }
          this.display = this.argumant_1
        }else if(this.state == 1 && String(this.argumant_2).length < 22) {
          if(this.argumant_2 == '0'){
            this.argumant_2 = String(_inNum)
          }else{
            this.argumant_2 += String(_inNum)
          }
          this.display = this.argumant_2
        }
      }
    },
    input_2: function (_inOperator) {
      if(this.state != 2){
        if(this.state == 1){
          this.state = 0
          if (this.operator == '+') {
            this.display = Number(this.argumant_1) + Number(this.argumant_2)
          }else if(this.operator == '–'){
            this.display = Number(this.argumant_1) - Number(this.argumant_2)
          }else if(this.operator == '×'){
            this.display = Number(this.argumant_1) * Number(this.argumant_2)
          }else if(this.operator == '÷'){
            this.display = Number(this.argumant_1) / Number(this.argumant_2)
          }
          this.state = 0
          if(String(this.argumant_1).indexOf('I') != -1 || String(this.argumant_1).indexOf('N') != -1 || String(this.argumant_1).indexOf('e') != -1){
            this.state = 2
          }
          this.argumant_1 = this.display
          this.argumant_2 = ''
          this.argumant_2_state = 0
          this.operator = ''
          if(String(this.argumant_1).indexOf('.') == -1){
            this.argumant_1_state = 0
          }else{
            this.argumant_1_state = 1
          }
        }
        this.state = 1
        this.argumant_2 = 0
        this.argumant_2_state = 0
        if (_inOperator == 0) {
          this.operator = '+'
        }else if(_inOperator == 1){
          this.operator = '–'
        }else if(_inOperator == 2){
          this.operator = '×'
        }else if(_inOperator == 3){
          this.operator = '÷'
        }
      }
    },
    input_3: function () {
      if(this.state != 2){
        if(this.state == 1){
          this.state = 0
          if (this.operator == '+') {
            this.display = Number(this.argumant_1) + Number(this.argumant_2)
          }else if(this.operator == '–'){
            this.display = Number(this.argumant_1) - Number(this.argumant_2)
          }else if(this.operator == '×'){
            this.display = Number(this.argumant_1) * Number(this.argumant_2)
          }else if(this.operator == '÷'){
            this.display = Number(this.argumant_1) / Number(this.argumant_2)
          }
          this.state = 0
          if(String(this.display).indexOf('I') != -1 || String(this.display).indexOf('N') != -1 || String(this.display).indexOf('e') != -1){
            this.state = 2
          }
          this.argumant_1 = this.display
          this.argumant_2 = ''
          this.argumant_2_state = 0
          this.operator = ''
          if(String(this.argumant_1).indexOf('.') == -1){
            this.argumant_1_state = 0
          }else{
            this.argumant_1_state = 1
          }

        }
      }
    },
    input_4: function () {
      if(this.state != 2){
        if(this.state == 0 && this.argumant_1_state == 0){
          if(this.argumant_1 != ''){
            this.argumant_1 += '.'
          }else{
            this.argumant_1 = '0.'
          }
          this.argumant_1_state = 1
          this.display = this.argumant_1
        }else if(this.state == 1 && this.argumant_2_state == 0){
          if(this.argumant_2 != ''){
            this.argumant_2 += '.'
          }else{
            this.argumant_2 = '0.'
          }
          this.argumant_2_state = 1
          this.display = this.argumant_2
        }
      }
    },
    reset: function () {
      this.display = '0'
      this.state = 0
      this.argumant_1 = '0'
      this.argumant_2 = ''
      this.operator = ''
      this.argumant_1_state = 0
      this.argumant_2_state = 0
    },
  }
})
