Vue.use(VJsoneditor)
var app = new Vue({
	el: '#app',
	data: function() {
		return { 
      fileList: [],
      json: null,
      dialog: false,
      display_style: 'centered',
      data: [],
      table_data: [],
      options: {
        sortObjectKeys: true,
        history: true,
        mode: 'code',
        name: 'data',
        modes: ['tree', 'code'],
      },
    }

	},
  computed: {
    height: function() {
      return window.screen.height * 0.63 + "px"
    }
  },

	methods: {
    fileCheck(file) {
      if (file.size > 500 * 1024) {
        this.$message.warning('Превышен размер файла')
        return false
      }

      if (file.type !== 'application/json') {
        this.$message.warning('Формат файла отличен от JSON')
        return false
      }
      this.parse(file)
      return true
    },

    async parse(file) {
      await file.text().then(resp => {this.json = resp})
      try {
        this.json = JSON.parse(this.json)
      }
      catch {
        this.$message.error('Неправильный формат файла')
      }
      this.display_style = 'right-aligned'
    },
    failureScan(json) {
      this.table_data.push({})
      for (let [k, v] of Object.entries(json)) {
        switch(k) {
          case 'name':
            this.table_data.slice(-1)[0]['mission'] =  v['name']
            break
          case 'mechanism': 
            this.table_data.slice(-1)[0]['machine'] =  v.map(i => {if(i.type.toLowerCase() === 'machine') return i.name})
            this.table_data.slice(-1)[0]['man'] =  v.map(i => {if(i.type.toLowerCase() === 'man') return i.name})
            break
          case 'control': 
            this.table_data.slice(-1)[0]['management'] =  v.map(i => {if(i.type.toLowerCase() === 'management') return i.name})
            break
          case 'input': 
            this.table_data.slice(-1)[0]['material'] = this.table_data.slice(-1)[0]['material'] || []
            this.table_data.slice(-1)[0]['material'].push(...v.map(i => {if(i.type.toLowerCase() === 'material') return i.name}))
            break
          case 'output': 
            this.table_data.slice(-1)[0]['material'] = this.table_data.slice(-1)[0]['material'] || []
            this.table_data.slice(-1)[0]['material'].push(...v.map(i => {if(i.type.toLowerCase() === 'material') return i.name}))
            break
          case 'child':
            v.forEach(i => { this.failureScan(i) })
        }
      }
      // console.log(this.table_data)
      // console.log(json)
      this.dialog = true
    },
    onError(e) {
      console.log(e)
    }
  }
})
