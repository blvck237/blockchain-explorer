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
    <h1>Live </h1>
    <h3>View all connected networks. Actually, there are {{nodes.length}} nodes on the Supcoin network</h3>

    <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" />
  </div>
</template>

<script>
  import { tree } from "vued3tree";
  import D3Network from "vue-d3-network";
  import { request, firebase, db } from "../../utils";

  export default {
    name: "Map",
    components: {
      tree,
      D3Network,
    },
    data() {
      return {
        duration: 100,
        radius: 10,
        margin: 30,
        zoom: true,
        nodes: [],
        nodesTest: [
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
        links: []
      };
    },
    methods: {
      getNodes() {
        let tmpNodes = []
        db.ref('nodes').on("value", snapshot=>{
          this.nodes = [];
          snapshot.forEach(node => {
            console.log("Log: getNodes -> node.val()", node.val())
            this.nodes.push({id: node.val(), name: node.val(), _color: this.getRandomColor()})
            // this.links.push({sid: node.val(), tid: res.data < 1? i+1 : 1, _svgAttrs: { "stroke-width": 8, opacity: 1 } })
          });
        });
},
        getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
    },
    beforeMount() {
       this.getNodes();
    },
    computed: {
      options() {
        return {
          force: 4000,
          size: { w: 1000, h: 600 },
          nodeSize: 35,
          nodeLabels: true,
          linkLabels: true,
          canvas: false
        };
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
