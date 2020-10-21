<template>
  <v-card>
    <div class="reach-map">
       <v-skeleton-loader
          v-bind="attrs"
          type="image"
        ></v-skeleton-loader>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'ReachMap'
}
</script>
<style lang="scss" scoped>
.reach-map {
  height: auto;
  width:100%;
  position: relative;
}
</style>
