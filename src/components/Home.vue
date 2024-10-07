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
  </div>
</template>

<script>
export default {
  mounted() {
    const cx = 'd0753b9ad66c34097';
    const script = document.createElement('script');
    script.src = `https://cse.google.com/cse.js?cx=${cx}`;
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
</style>