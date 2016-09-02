import PageBuilder from './PageBuilder.vue'

Vue.config.debug = true

new Vue({
	el: '#app',
	components: {
    PageBuilder
  },
  data () {
    return {
   		content: ''
    }
  }
})
