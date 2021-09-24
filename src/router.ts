import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDoc from './components/SwitchDoc.vue';
import ButtonDoc from './components/ButtonDoc.vue';
import DialogDoc from './components/DialogDoc.vue';
import TabsDoc from './components/TabsDoc.vue';
import DocDefault from './components/DocDefault.vue';

import {h} from 'vue';
import Markdown from './components/Markdown.vue';

import {createRouter, createWebHashHistory} from 'vue-router';

const md = (filename: string) => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', component: DocDefault},
        {path: 'intro', component: md('intro')},
        {path: 'get-started', component: md('get-started')},
        {path: 'install', component: md('install')},
        {path: 'switch', component: SwitchDoc},
        {path: 'button', component: ButtonDoc},
        {path: 'dialog', component: DialogDoc},
        {path: 'tabs', component: TabsDoc},
      ]
    },
  ]
});
