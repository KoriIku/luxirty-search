<template>
  <div class="home">
    <div class="gcse-searchbox-only" data-resultsUrl="search"></div>
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

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>