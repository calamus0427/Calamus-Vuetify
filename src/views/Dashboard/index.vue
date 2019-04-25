<template>
    <v-container class="dashboard">
      <v-layout row nowrap>
        <div class="project">
          <project></project>
        </div>
        <div class="docs">
          <docs></docs>
        </div>
      </v-layout>
    </v-container>
</template>

<script>
import project from './components/project.vue'
import docs from './components/docs.vue'

  export default {
    components:{project,docs},
    data: () => ({
      
    })
  }
</script>

<style lang="scss" scoped>
.dashboard{
  margin:0 auto;
  margin-top:5rem;
  margin-bottom:5rem;
  .project,.docs{
    // border:1px solid #ddd;
  }
  .project{
    width:70%;
  }
  .docs{
    width:30%;
    margin-left:5rem;
  }
}
</style>
