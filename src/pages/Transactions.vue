<template lang="html">
  <div>
    <div class="search">
      <vs-input class="search-input" label-placeholder="Search transactions" size="large" v-model="search"v-on:input="searchTransaction($event)"/>
      <!-- <vs-button v-on:click="searchTransaction" class="search-btn" color="#006084"  size="large" icon="search">Search</vs-button> -->
    </div>
    <vs-table pagination :max-items="max" :data="transactionList"> 
      <template slot="header">
        <h3>
          Transactions
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Date
        </vs-th>
        <vs-th>
          Sender
        </vs-th>
        <vs-th>
          Receiver
        </vs-th>
        <vs-th>
          Amount (supcoin)
        </vs-th>
      </template>

      <vs-tr :key="indextr" v-for="(transaction, indextr) in transactionList">
        <vs-td>
          {{ convertTime(transaction.input.timestamp) }}
        </vs-td>
        <vs-td>
          {{ transaction.input.signature.s }}
        </vs-td>
        <vs-td>
          {{ transaction.input.signature.r }}
        </vs-td>
        <vs-td>
          {{ transaction.input.amount }}
        </vs-td>
      </vs-tr>
    </vs-table>
  </div>
</template>
<script>
  import { request } from "../../utils/api";
  import timeConverter from "../../utils/timeconverter";
  export default {
    name: "Transactions",
    data() {
      return {
        transactionList: [],
        transactionList_saved: [],
        searching: false,
        pagination: true,
        max: "15",
        search: ''
      };
    },
    beforeMount() {
      this.getTransactions();
    },
    methods: {
      getTransactions() {
        request("supcoin/transactions")
          .then(res => {
            res.data.map(transaction => {
              this.transactionList.push(JSON.parse(transaction.transaction));
              this.transactionList_saved.push(
                JSON.parse(transaction.transaction)
              );
            });
          })
          .catch(err => {
            console.log("Log: getWalletInfo -> err", err);
          });
      },
      searchTransaction(ev) {
        // Reset items back to all of the items
        this.searching = true;

        // On sauvegarde la valeur entrée dans la barre de recherche
       // let val = ev.target.value

        // Si la valeur n'est pas vide, on filtre les élements
        if (this.search && this.search.trim() != "") {
          this.transactionList = this.transactionList.filter(item => {
            this.searching = false;
            return item.input.signature.s.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
          });
        } else {
          this.transactionList = this.transactionList_saved;
          this.searching = false;
        }
      },

      viewTransaction() {
        console.info("Pressed");
      },
      convertTime(timestamp) {
        return timeConverter(timestamp);
      }
    }
  };
</script>

<style>
  .search {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  .search-input {
    text-align: left;
    width: 60% !important;
    margin: 1.5em;
  }
  .search-btn {
    margin: 1em;
  }
</style>
