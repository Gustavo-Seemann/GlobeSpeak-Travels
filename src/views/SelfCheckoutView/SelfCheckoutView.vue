<template>
  <div>
    <section class="selfcheckout-section">
      <h1>Faça seu <span class="blue-text">orçamento</span>.</h1>
      <ProductsTable />
    </section>
  </div>
</template>
      
<script>  
import ProductsTable from '@/components/ProductsTable/ProductsTable.vue';
  
export default {
  name: 'SelfCheckoutView',
    
  components: {
    ProductsTable,
  },
};
</script>
      
<style scoped src="./SelfCheckoutView.scss" lang="scss" />
      