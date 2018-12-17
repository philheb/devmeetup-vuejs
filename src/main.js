// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'

Vue.use(Vuetify, {
  theme: {
    primary: '#2196F3',
    secondary: '#64B5F6',
    accent: '#4CAF50',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup', EditMeetupDialog)
Vue.component('app-edit-meetup-date', EditMeetupDateDialog)
Vue.component('app-register', RegisterDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB6kIaXnpY5AM0yF3RX8hmPE_6Ku3GKggs',
      authDomain: 'devmeetup-8d180.firebaseapp.com',
      databaseURL: 'https://devmeetup-8d180.firebaseio.com',
      projectId: 'devmeetup-8d180',
      storageBucket: 'gs://devmeetup-8d180.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
