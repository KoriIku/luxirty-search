<template>
  <div class="home">
    <div class="about">
      <a href="https://luxirty.com/posts/luxirty-search/" target="_blank">关于</a>
    </div>
    <div class="logo">
      Luxirty Search
    </div>
    <div class="search-container">
      <div class="gcse-searchbox-only" data-resultsUrl="search"></div>
    </div>
    
    <!-- 添加页脚 -->
    <footer>
      <p>
        &copy; Create by <a href="https://luxirty.com/about/" target="_blank">Luxirty</a> with Love |
        Open Source on <a href="https://github.com/KoriIku/luxiry-search" target="_blank">
          GitHub
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = `https://cse.google.com/cse.js?cx=${import.meta.env.VITE_GOOGLE_CSE_CX}`;
    script.async = true;
    document.body.appendChild(script);
  }
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  position: absolute;
  top: 35vh; /* 从 30vh 增加到 35vh */
  font-size: 48px;
  font-weight: bold;
}

.search-container {
  position: absolute;
  top: calc(35vh + 100px); /* 相应地调整，保持与 logo 的相对位置 */
  width: 100%;
  display: flex;
  justify-content: center;
}

/* 针对小屏幕的样式 */
@media (max-width: 600px) {
  .logo {
    font-size: 35px;
    top: 37vh; /* 从 30vh 增加到 35vh */
  }
  .search-container {
    top: calc(37vh + 80px);
  }
}

.about {
  position: absolute;
  top: 20px;
  right: 20px;
}

.about a {
  text-decoration: none;
  font-size: 16px;
  color: var(--uv-styles-color-text-default);
}

/* 新增的页脚样式 */
footer {
  position: absolute;
  bottom: 20px; /* 离底部20px */
  text-align: center; /* 居中对齐 */
  width: 100%; /* 宽度为100% */
  font-size: 14px; /* 字体大小 */
  color: var(--uv-styles-color-text-default); /* 使用与其他文本一致的颜色 */
}

/* 链接样式 */
footer a {
  color: #156bc8; /* 白天模式下的鲜明蓝色 */
  font-weight: bold; /* 加粗字体 */
  transition: color 0.3s ease, text-shadow 0.3s ease; /* 添加文本阴影过渡 */
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  footer {
    background-color: #1a1a1a; /* 深色背景 */
  }
  
  footer a {
    color: #ffffff; /* 明亮的链接颜色 */
  }
}

/* 鼠标悬停效果 */
footer a:hover {
  color: #0056b3; /* 鼠标悬停时的深蓝色 */
  text-decoration: underline; /* 添加下划线 */
  text-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* 鼠标悬停时添加阴影 */
}

/* 鼠标悬停效果 - 深色模式 */
@media (prefers-color-scheme: dark) {
  footer a {
    color: #80a0c2;
    /* 链接颜色改为浅色 */
  }

  footer a:hover {
    color: #a0c3e0;
    /* 悬停时的链接颜色略微加亮 */
  }

  footer img {
    opacity: 0.9;
    /* 提高图像的亮度，适应深色背景 */
  }
}
</style>
