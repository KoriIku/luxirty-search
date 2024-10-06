<template>
    <div class="results">
      <div class="search-box">
        <input v-model="query" @keyup.enter="search" placeholder="Search...">
        <button @click="search">Search</button>
      </div>
      <div class="gcse-searchresults-only"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: new URLSearchParams(window.location.search).get('q') || ''
      };
    },
    mounted() {
      const cx = 'd0753b9ad66c34097';
      const script = document.createElement('script');
      script.src = `https://cse.google.com/cse.js?cx=${cx}`;
      script.async = true;
      document.body.appendChild(script);
    },
    methods: {
      search() {
        this.$router.push(`/results?q=${encodeURIComponent(this.query)}`);
      }
    }
  };
  </script>
  
  <style>
  .results {
    padding: 20px;
  }
  .search-box {
    margin-bottom: 20px;
  }
  input {
    width: 300px;
    padding: 10px;
    margin-right: 5px;
  }
  button {
    padding: 10px;
  }
  </style>