<template>
  <div class="map">
    <!-- <tree class="tree"
      :data="tree"
      node-text="name"
      type="tree"
      layoutType="euclidean"
      :duration="duration"
      :radius="radius"
      :marginx="margin"
      :marginy="margin"
      :zoomable="zoom"
    ></tree> -->

    <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" />
  </div>
</template>

<script>
  import { tree } from "vued3tree";
  import D3Network from "vue-d3-network";

  export default {
    name: "Map",
    components: {
      tree,
      D3Network
    },
    data() {
      return {
        duration: 100,
        radius: 5,
        margin: 30,
        zoom: true,
        nodes: [
          { id: 1, name: "my awesome node 1" },
          { id: 2, name: "my node 2" },
          { id: 3, name: "orange node", _color: "orange" },
          { id: 4, _color: "#4466ff" },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
          { id: 9 }
        ],
              links: [
        { sid: 1, tid: 2 },
        { sid: 2, tid: 8 },
        { sid: 3, tid: 4,  _svgAttrs:{'stroke-width':8,opacity:1},name:'custom link' },
        { sid: 4, tid: 5 },
        { sid: 5, tid: 6 },
        { sid: 7, tid: 8 },
        { sid: 5, tid: 8 },
        { sid: 3, tid: 8 },
        { sid: 7, tid: 9 }
      ],
      };
    },
    computed:{
      options(){
        return{
          force: 3000,
          size:{ w:1000, h:600},
          nodeSize: 35,
          nodeLabels: true,
          linkLabels:true,
          canvas: false
        }
      }
    }
  };
</script>

<style scoped>
  .map {
    height: 55em;
  }
  text {
    font-size: 20px;
  }
</style>
