import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// 注册 Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker 注册成功，作用域为: ', registration.scope);
      return registration.update();  // 立即更新 Service Worker
    }).then(() => {
      app.mount('#app');  // 确保在 Service Worker 注册后再挂载 Vue 实例
    }).catch((err) => {
      console.error('Service Worker 注册失败: ', err);
      app.mount('#app');  // 即使注册失败，也要确保 Vue 挂载
    });
  });
} else {
  app.mount('#app');  // 如果浏览器不支持 Service Worker，继续正常挂载
}
