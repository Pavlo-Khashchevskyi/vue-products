import { createApp } from 'vue';
import App from '@/App.vue';
import components from '@/components/UI/index';
import router from '@/router/index';
import store from './store';
// styles
import '@/styles/main.scss';

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app
  .use(router)
  .use(store)
  .mount('#app')
