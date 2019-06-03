<template>
  <div>
    <vs-list>
      <vs-list-header :title="id"></vs-list-header>
      <vs-list-item
        class="vs-list-item"
        title="Hash"
        :subtitle="hash"
      ></vs-list-item>
      <vs-list-item title="Date" :subtitle="timestamp"></vs-list-item>
      <vs-list-item title="Transactions" :subtitle="data"></vs-list-item>
    </vs-list>
  </div>
</template>

<script>
  export default {
    name: "Block",
    props: {
      id: Number,
      hash: Number,
      data: Array,
      timestamp: Number
    }
  };
</script>

<style>
  vs-list-item {
    text-align: left;
    color: blue;
  }
</style>
