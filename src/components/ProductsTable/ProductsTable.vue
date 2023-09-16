<template>
  <div>
    <section>
      <div class="table-container">
        <div class="table-controlers">
          <h1 class="table-controlers-title">
            Produtos
          </h1>
          <h1>
            Total: R$ <span class="total-price-info">10221.21</span>
          </h1>
        </div>
        <table class="data-table">
          <thead>
            <tr class="table-head">
              <th class="table-head-id">
                ID
              </th>
              <th class="table-head-description">
                Descrição
              </th>
              <th class="table-head-price">
                Preço (R$)
              </th>
              <th class="table-head-amount">
                Quantidade
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in getProducts"
              :key="product.id"
            >
              <td class="table-body-id">
                {{ product.id }}
              </td>
              <td class="product-name">
                {{ product.descricao }}
              </td>
              <td class="table-body-price">
                <span>R$</span> {{ product.valorUnitario }}
              </td>
              <td class="table-body-amount">
                1
              </td>
              <td>
                <button
                  @click="setEditProduct(product)"
                  class="edit-btn"
                >
                  <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="table-footer">
          <button
            class="add-product-btn"
            @click="openCreateProduct"
          >
            Adicionar
          </button>
          <button
            class="buy-btn"
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </section>
    <EditCreateProduct />
  </div>
</template>
        
<script>  
import { mapGetters, mapActions, mapMutations } from 'vuex';
import EditCreateProduct from '@/components/EditCreateProduct/EditCreateProduct.vue';
    
export default {
  name: 'ProductsTable',
      
  components: {
    EditCreateProduct,
  },
    
  computed: {
    ...mapGetters(["getProducts"])
  },
  
  methods: {
    ...mapActions(["fetchProducts"]),
    ...mapMutations(["setEditingProduct", "setEditingCreateProductModal", "setIsEditing"]),
  
    setEditProduct(product) {
      this.setEditingProduct(product);
      this.setEditingCreateProductModal(true);
      this.setIsEditing(true);
    },
  
    openCreateProduct() {
      this.setEditingCreateProductModal(true);
      this.setIsEditing(false);
    }
  },
  
  mounted() {
    this.fetchProducts();
  },
};
</script>
        
  <style scoped src="./ProductsTable.scss" lang="scss" />
        