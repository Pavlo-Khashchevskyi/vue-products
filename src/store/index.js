import { createStore } from 'vuex'
// Module
import { productsModule } from '@/store/productsModule';

export default createStore({
  modules: {
    products: productsModule,
  }
})
