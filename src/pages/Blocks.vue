<template>
  <div class="blocks">
    <h1>Blocks</h1>
    <div class="" v-for="(block, index) in blocks" v-bind:key="block.hash">
      <Block
        class="block"
        :id="index+1"
        :hash="block.hash"
        :timestamp="convertTime(block.timestamp)"
        :data="block.data.length"
      ></Block>
    </div>
  </div>
</template>

<script>
  //utils
  import { request } from "../../utils";
  import timeConverter from "../../utils/timeconverter";
  // Component imports
  import Block from "../components/Block";

  export default {
    name: "Blocks",
    components: {
      Block
    },
    data() {
      return {
        blocks: []
      };
    },
    beforeMount() {
      this.getBlocks();
    },
    methods: {
      getBlocks() {
        request("/supcoin/blocks")
          .then(res => {
            this.blocks = res.data;
            console.log("Log: getBlocks -> res", res);
            for (let i = 0; i < res.data.length; i++) {
              this.convertTime(res.data[i].timestamp);
            }
          })
          .catch(err => {
            console.log("Log: getBlocks -> err", err);
          });
      },
      convertTime(timestamp) {
        return timeConverter(timestamp);
      }
    }
  };
</script>

<style>
  .block {
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
