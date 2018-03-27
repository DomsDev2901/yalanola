import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Repetidas from '@/components/Repetidas';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/repetidas',
      name: 'Repetidas',
      component: Repetidas,
    },
  ],
});
