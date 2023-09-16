<template>
  <div
    class="modal"
    v-if="showEditingCreateModal"
  >
    <div class="modal-overlay">
      <div class="modal-content">
        <h2 class="editing-title">
          {{ getIsEditing ? "Editar Tradutor" : "Cadastrar Tradutor" }}
        </h2>
        <small
          v-if="getIsEditing"
          class="editing-subtitle"
        >ID: {{ getEditingTranslator.id }}</small>

        <!-- FORMULÁRIO EDIÇÃO -->
        <form
          v-if="getIsEditing"
          @submit.prevent
        >
          <div class="form-group">
            <label for="editName">Nome: <span class="red">*</span></label>
            <input
              type="text"
              id="editName"
              placeholder="Digite um nome"
              v-model="getEditingTranslator.nome"
              required
            >
          </div>
          <div class="form-group">
            <label for="editCPF">CPF: <span class="red">*</span></label>
            <input
              type="text"
              id="editCPF"
              v-model="getEditingTranslator.cpf"
              required
            >
            <small
              v-if="getEditingTranslator.cpf && !isValidCPF"
              class="input-validation"
            >CPF Inválido, por favor verifique os dados.</small>
          </div>
          <div class="form-group">
            <label for="editBirth">Data de Nascimento:</label>
            <input
              type="text"
              id="editBirth"
              v-model="getEditingTranslator.dataNascimento"
            >
          </div>
          <div class="form-actions">
            <button
              class="save-btn"
              @click="editUser(getEditingTranslator)"
              :disabled="!isValidData"
            >
              Salvar
            </button>
            <button
              class="delete-btn"
              @click="deleteUser(getEditingTranslator.id)"
            >
              Excluir
            </button>
            <button
              @click="cancelEdit"
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
            <label for="editName">Nome: <span class="red">*</span></label>
            <input
              type="text"
              id="editName"
              placeholder="Digite um nome"
              v-model="user.nome"
              required
            >
          </div>
          <div class="form-group">
            <label for="editCPF">CPF: <span class="red">*</span></label>
            <input
              type="text"
              id="editCPF"
              placeholder="Digite o CPF"
              v-model="user.cpf"
              required
            >
            <small
              v-if="user.cpf && !isValidCPF"
              class="input-validation"
            >CPF Inválido, por favor verifique os dados.</small>
          </div>
          <div class="form-group">
            <label for="editBirth">Data de Nascimento:</label>
            <input
              type="text"
              id="editBirth"
              placeholder="Digite a data de nascimento"
              v-model="user.dataNascimento"
            >
          </div>
          <div class="form-actions">
            <button
              class="save-btn"
              @click="createUser(user); resetInfo();"
              :disabled="!isValidData"
            >
              Salvar
            </button>
            <button
              @click="cancelEdit(); resetInfo();"
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
      user: {
        nome: "",
        cpf: "",
        dataNascimento: ""
      },
    };
  },
  computed: {
    ...mapGetters(["getEditingTranslator", "showEditingCreateModal", "getIsEditing"]),

    isValidCPF() {
      let cpf = this.getIsEditing ? this.getEditingTranslator.cpf : this.user.cpf;
      if (cpf == '') return false;	
      cpf = cpf.replace(/[^\d]+/g, '');	
      if (
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
      ) {
        return false;
      }
      let add = 0;	
      for (let i = 0; i < 9; i++) {		
        add += parseInt(cpf.charAt(i)) * (10 - i);	
      }
      let rev = 11 - (add % 11);	
      if (rev == 10 || rev == 11) {		
        rev = 0;	
      }
      if (rev != parseInt(cpf.charAt(9))) {		
        return false;	
      }
      add = 0;	
      for (let i = 0; i < 10; i++) {		
        add += parseInt(cpf.charAt(i)) * (11 - i);	
      }
      rev = 11 - (add % 11);	
      if (rev == 10 || rev == 11) {	
        rev = 0;	
      }
      if (rev != parseInt(cpf.charAt(10))) {
        return false;	
      }
      return true;   
    },

    isValidData() {
      let user = this.getIsEditing ? this.getEditingTranslator : this.user;
      if (user.nome && this.isValidCPF) {
        return true;
      }
      return false;
    }

  },
  methods: {
    ...mapActions(["editUser", "deleteUser", "cancelEdit", "createUser"]),

    resetInfo() {
      this.user = {
        nome: "",
        cpf: "",
        dataNascimento: ""
      };
    },
  },

};
</script>
  
  <style src="./EditTranslator.scss" lang="scss" scoped />