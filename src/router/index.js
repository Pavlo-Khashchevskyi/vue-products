import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home';
import ProductsPage from '@/pages/ProductsPage/ProductsPage';
import ProductInfoPage from '@/pages/ProductInfoPage';
import About from '@/pages/About';
import NotFoundPage from '@/pages/NotFoundPage';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    component: ProductInfoPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
