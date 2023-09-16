<template>
  <div>
    <section>
      <h1>Conheça nossos <span class="blue-text">tradutores.</span></h1>
      <TranslatorsTable />
    </section>
  </div>
</template>
  
<script>
import TranslatorsTable from '@/components/TranslatorsTable/TranslatorsTable.vue';


export default {
  name: 'TranslatorsView',

  components: {
    TranslatorsTable
  },
};
</script>
  
<style scoped src="./TranslatorsView.scss" lang="scss" />
  