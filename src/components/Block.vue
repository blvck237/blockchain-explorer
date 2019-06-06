<template>
  <div>
    <vs-list>
      <vs-list-header :title="id.toString()"></vs-list-header>
      <vs-list-item
        class="vs-list-item"
        title="Hash"
        :subtitle="hash.toString()"
      ></vs-list-item>
      <vs-list-item title="Date" :subtitle="timestamp.toString()"></vs-list-item>
      <vs-list-item title="Transactions" :subtitle="data.toString()"></vs-list-item>
    </vs-list>
  </div>
</template>

<script>
  export default {
    name: "Block",
    props: {
      id: '',
      hash: '',
      data: '',
      timestamp: ''
    }
  };
</script>

<style>
  vs-list-item {
    text-align: left;
    color: blue;
  }
</style>
