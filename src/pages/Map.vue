<template>
  <div class="map">
    <tree class="tree"
      :data="tree"
      node-text="name"
      type="tree"
      layoutType="euclidean"
      :duration="duration"
      :radius="radius"
      :marginx="margin"
      :marginy="margin"
      zoomable="true"
    ></tree>
  </div>
</template>

<script>
  import { tree } from "vued3tree";
  export default {
    name: "Map",
    components: {
      tree
    },
    data() {
      return {
        duration: 100,
        radius: 5,
        margin: 30,
        tree: {
          name: "father",
          children: [
            {
              name: "son1",
              children: [{ name: "grandson" }, { name: "grandson2" }]
            },
            {
              name: "son2",
              children: [{ name: "grandson3" }, { name: "grandson4" }]
            }
          ]
        }
      };
    }
  };
</script>

<style scoped>
    .map{
        height: 55em;
    }
    text{
        font-size: 20px;
    }
</style>
