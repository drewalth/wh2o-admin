<template>
  <div class="flex-grow-1">
    <div class="d-flex align-center py-3">
      <div v-if="reach">
        <div class="display-1">{{ reach.river }}</div>
        <v-breadcrumbs :items="breadcrumbs" class="pa-0 py-2"></v-breadcrumbs>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "ReachDetail",
  data: () => ({
    breadcrumbs: [
        {
          text: 'Reaches',
          to: '/reaches/list',
          exact: true
        },
        {
          text: 'Edit Reach'
        }
      ]
  }),
  computed: {
    ...mapState({
      reach: state => state.ReachDetail.data,
      loading: state => state.ReachDetail.loading,
      error: state => state.ReachDetail.error
    })
  },
 created() {
   this.$store.dispatch('ReachDetail/getProperty',{
     url: `/reach?id=${this.$route.params.id}`
   })
 }
};
</script>
