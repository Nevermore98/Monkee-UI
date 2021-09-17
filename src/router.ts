import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDoc from './components/SwitchDoc.vue'
import {createRouter, createWebHashHistory} from 'vue-router';

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [{path: 'switch', component: SwitchDoc}]
    },
  ]
})
