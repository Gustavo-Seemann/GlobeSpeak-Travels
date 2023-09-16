<template>
  <div
    class="modal"
    v-if="showEditingCreateProductModal"
  >
    <div class="modal-overlay">
      <div class="modal-content">
        <h2 class="editing-title">
          {{ getIsEditing ? "Editar Produto" : "Cadastrar Produto" }}
        </h2>
        <small
          v-if="getIsEditing"
          class="editing-subtitle"
        >ID: {{ getEditingProduct.id }}</small>
  
        <!-- FORMULÁRIO EDIÇÃO -->
        <form
          v-if="getIsEditing"
          @submit.prevent
        >
          <div class="form-group">
            <label for="editDescription">Descrição: <span class="red">*</span></label>
            <input
              type="text"
              id="editDescription"
              placeholder="Digite a descrição do produto"
              v-model="getEditingProduct.descricao"
              required
            >
          </div>
          <div class="form-group">
            <label for="editPrice">Valor Unitário: <span class="red">*</span></label>
            <input
              type="number"
              id="editPrice"
              v-model="getEditingProduct.valorUnitario"
              required
            >
          </div>
          <div class="form-actions">
            <button
              class="save-btn"
              @click="editProduct(getEditingProduct)"
              :disabled="!getEditingProduct.descricao || !getEditingProduct.valorUnitario"
            >
              Salvar
            </button>
            <button
              class="delete-btn"
              @click="deleteProduct(getEditingProduct.id)"
            >
              Excluir
            </button>
            <button
              @click="cancelEditProduct"
              class="cancel-btn"
            >
              Cancelar
            </button>
          </div>
        </form>
  
        <!-- FORMULÁRIO CADASTRO -->
        <form
          v-else
          @submit.prevent
        >
          <div class="form-group">
            <label for="editDescription">Descrição: <span class="red">*</span></label>
            <input
              type="text"
              id="editDescription"
              placeholder="Digite a descrição do produto"
              v-model="product.descricao"
              required
            >
          </div>
          <div class="form-group">
            <label for="editPrice">Valor Unitário <span class="red">*</span></label>
            <input
              type="number"
              id="editPrice"
              placeholder="Digite o valor unitário do produto"
              v-model="product.valorUnitario"
              required
            >
          </div>
          <div class="form-actions">
            <button
              class="save-btn"
              @click="createProduct(product)"
              :disabled="!product.descricao || !product.valorUnitario"
            >
              Salvar
            </button>
            <button
              @click="cancelEditProduct"
              class="cancel-btn"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
    
<script>
import { mapGetters, mapActions } from 'vuex';
  
export default {
  data() {
    return {
      product: {
        descricao: "",
        valorUnitario: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getEditingProduct", "showEditingCreateProductModal", "getIsEditing"]),  
  },
  methods: {
    ...mapActions(["editProduct", "deleteProduct", "cancelEditProduct", "createProduct"])
  },
  
};
</script>
    
    <style src="./EditCreateProduct.scss" lang="scss" scoped />