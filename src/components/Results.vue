<template>
  <div class="my-container">
    <div class="search-container" id="searchContainer">
      <h1 class="search-title">Luxirty Search</h1>
      <div class="gcse-searchbox"></div>
    </div>
    <div class="search-result-zone">
      <div class="gcse-searchresults"></div>
    </div>
    <footer>
      <p>
        &copy; Create by <a href="https://your-website.com">Luxirty</a> with love |
        <a href="https://github.com/your-username" target="_blank">
          GitHub
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      githubIcon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23345a80' d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E"
    };
  },
  mounted() {
    this.loadGoogleCSE();
    this.addTargetBlank();
  },
  methods: {
    loadGoogleCSE() {
      const script = document.createElement('script');
      script.src = "https://cse.google.com/cse.js?cx=d0753b9ad66c34097";
      script.async = true;
      document.head.appendChild(script);
    },
    addTargetBlank() {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            const links = document.querySelectorAll('.gs-title a.gs-title');
            links.forEach((link) => {
              link.setAttribute('target', '_blank');
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }
};
</script>

<style scoped>
.my-container {
  display: flex;
  flex-direction: column;
  /* 让子元素垂直排列 */
  min-height: 100vh;
  /* 让容器占满整个视窗高度 */
  max-width: var(--center-width);
  min-width: 320px;
  box-sizing: border-box;
}

.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 26px;
  margin-left: 28px;
  min-height: 48px;
}

.search-title {
  font-size: 24px;
  color: #58636f;
  margin-right: 20px;
  white-space: nowrap;
}

/* 黑暗模式样式 */
@media (prefers-color-scheme: dark) {
  .search-title {
    color: #d1d5db; /* 黑暗模式下的颜色 */
  }
}

.search-result-zone {
  flex-grow: 1;
  /* 让搜索结果区占据剩余空间 */
}

/* Footer styles */
footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: #6c757d;
  border-top: 1px solid #dee2e6;
  margin-top: 36px;
}

footer a {
  color: #345a80;
  text-decoration: none;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #1c3d5a;
  text-decoration: underline;
}

footer img {
  width: 16px;
  height: 16px;
  vertical-align: text-top;
  margin-right: 3px;
  opacity: 0.8;
}

@media (prefers-color-scheme: dark) {
  footer {
    background-color: #222222; /* 深色背景 */
    color: #cccccc; /* 浅灰色字体，确保可读性 */
    border-top: 1px solid #444444; /* 深色边框 */
  }

  footer a {
    color: #80a0c2; /* 链接颜色改为浅色 */
  }

  footer a:hover {
    color: #a0c3e0; /* 悬停时的链接颜色略微加亮 */
  }

  footer img {
    opacity: 0.9; /* 提高图像的亮度，适应深色背景 */
  }
}
</style>