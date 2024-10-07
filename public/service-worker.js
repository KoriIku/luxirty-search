// public/service-worker.js

self.addEventListener('install', function(event) {
    console.log('Service Worker 安装成功');
    self.skipWaiting(); // 跳过等待，强制立即激活
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker 激活成功');
    event.waitUntil(
      self.clients.claim() // 让新的 Service Worker 立即接管所有页面
    );
  });
  
  self.addEventListener('fetch', function(event) {
    const url = event.request.url;
    
    // 拦截包含 'adsense' 的请求
    if (url.includes('adsense')) {
      console.log('拦截到广告请求:', url);
      
      // 拦截请求并返回空响应
      event.respondWith(new Response(null, { status: 204 }));
      return;
    }
  
    // 正常处理其他请求
    event.respondWith(fetch(event.request));
  });
  