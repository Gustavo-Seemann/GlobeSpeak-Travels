<template>
  <div>
    <section>
      <div class="table-container">
        <div class="table-controlers">
          <h1>Tradutores</h1>
          <div class="search-options">
            <select
              v-model="selectedFilter"
              name="filters"
              id="filters"
            >
              <option value="name">
                Nome
              </option>
              <option value="cpf">
                CPF
              </option>
              <option value="id">
                ID
              </option>
              <option value="birth">
                Data de Nascimento
              </option>
            </select>
            <input
              class="search-bar"
              v-model="search"
              placeholder="Pesquisar"
            >
          </div>
          <button
            class="add-btn"
            @click="openCreateTranslator"
          >
            Adicionar
          </button>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>CPF</th>
              <th>ID</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="translator in paginatedTranslators"
              :key="translator.id"
            >
              <td class="translator-name">
                {{ translator.nome }}
              </td>
              <td>{{ translator.dataNascimento }}</td>
              <td>{{ translator.cpf }}</td>
              <td>{{ translator.id }}</td>
              <td>
                <button
                  class="edit-btn"
                  @click="setEditTranslator(translator)"
                >
                  <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="table-footer">
          <p>Página {{ currentPage }} de {{ totalPages }}</p>
          <div class="footer-btns">
            <button
              class="previous-page"
              @click="previousPage"
              :disabled="currentPage === 1"
            >
              <font-awesome-icon
                icon="fa-solid fa-chevron-left"
                size="xl"
                style="color: #ffffff;"
              />   
            </button>
            <button
              class="next-page"
              @click="nextPage"
              :disabled="currentPage === totalPages"
            >
              <font-awesome-icon
                icon="fa-solid fa-chevron-right"
                size="xl"
                style="color: #ffffff;"
              />   
            </button>
          </div>
        </div>
      </div>
    </section>
    <EditTranslator />
  </div>
</template>
    
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import EditTranslator from '../EditTranslator/EditTranslator.vue';


export default {

  components: {
    EditTranslator
  },

  data() {
    return {
      isEditModalOpen: false, // Controla a exibição da modal de edição
      editedUser: null, // Dados do usuário a serem editados
      search: '',
      selectedFilter: "name",
      selectedUser: "",
      currentPage: 1,
      perPage: 10,
      isDropdownOpen: false
    };
  },
  mounted() {
    this.fetchTranslators();
  },
  computed: {

    ...mapGetters(["getTranslators"]),

    paginatedTranslators() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;

      return this.filterTranslators().slice(startIndex, endIndex);
    },

    totalPages() {
      return Math.ceil(
        this.filterTranslators().length / this.perPage
      );
    }
  },

  watch: {
    search: 'filterAndResetPage',
    selectedFilter: 'filterAndResetPage',
  },

  methods: {
    ...mapActions(["fetchTranslators"]),
    ...mapMutations(["setEditingTranslator", "setEditingCreateTranslatorModal", "setIsEditing"]),

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    
    filterAndResetPage() {
      this.currentPage = 1;
      this.filterTranslators();
    },


    filterTranslators() {
      const searchTerm = this.search.toLowerCase();
      const filterCategory = this.selectedFilter;

      return this.getTranslators.filter(translator => {
        if (filterCategory === 'name') {
          return translator.nome.toLowerCase().includes(searchTerm);
        } else if (filterCategory === 'cpf') {
          return translator.cpf.includes(searchTerm);
        } else if (filterCategory === 'id') {
          return translator.id.toString().includes(searchTerm);
        } else if (filterCategory === 'birth') {
          return translator.dataNascimento.includes(searchTerm);
        }
        return false;
      });
    },
    setEditTranslator(translator) {
      this.setEditingTranslator(translator);
      this.setEditingCreateTranslatorModal(true);
      this.setIsEditing(true);
    },
    openCreateTranslator() {
      this.setEditingCreateTranslatorModal(true);
      this.setIsEditing(false);
    }
  }
};
</script>
    
  <style src="./TranslatorsTable.scss" lang="scss" />
    