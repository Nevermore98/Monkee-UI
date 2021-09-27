import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDoc from './components/switch/SwitchDoc.vue';
import ButtonDoc from './components/button/ButtonDoc.vue';
import DialogDoc from './components/dialog/DialogDoc.vue';
import TabsDoc from './components/tabs/TabsDoc.vue';

import {h} from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';

import {createRouter, createWebHashHistory} from 'vue-router';

const md = (string: string) => h(Markdown, {content: string, key: string});
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDoc},
        {path: 'button', component: ButtonDoc},
        {path: 'dialog', component: DialogDoc},
        {path: 'tabs', component: TabsDoc},
      ]
    },
  ]
});
