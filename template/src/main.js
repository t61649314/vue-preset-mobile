import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/index.less';
<% if (adaptationScheme==='rem') { %>import './utils/rem';<% } %>

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.component('SvgIcon', SvgIcon);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('./icons', false, /\.svg$/);
requireAll(req);

