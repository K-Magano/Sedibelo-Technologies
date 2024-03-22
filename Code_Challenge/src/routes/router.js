import { createRouter, createWebHistory } from 'vue-router'

//LazyLoad
const views = {
  '/pie-chart': () => import('../views/PieChart.vue'),
  '/bar-chart': () => import('../views/BarGraph.vue'), 
  '/data-table': () => import('../views/DataTable.vue'), 
};

const router = createRouter({
  history: createWebHistory(),
  routes: Object.entries(views).map(([path, component]) => ({
    path,
    component,
  })),
});

export default router;



