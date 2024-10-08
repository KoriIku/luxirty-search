<template>
  <div class="home">
    <div class="about">
      <a href="#about">关于</a>
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
        &copy; Create by <a href="https://luxirty.com/posts/luxirty-search/" target="_blank">Luxirty</a> with love |
        <a href="https://github.com/KoriIku/luxiry-search" target="_blank">
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

footer a {
  text-decoration: none; /* 去掉下划线 */
  color: var(--uv-styles-color-text-default); /* 使用与其他文本一致的颜色 */
}

footer a:hover {
  text-decoration: underline; /* 悬停时加下划线 */
}
</style>
