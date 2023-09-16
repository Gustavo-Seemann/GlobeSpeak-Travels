import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  
  state: {
    services_presentation: [
      {
        title: "Tradução Juramentada Profissional",
        description: "Nossos tradutores juramentados estão prontos para transformar documentos legais, como certidões de nascimento, casamento e diplomas, em versões linguisticamente precisas e oficialmente reconhecidas. Garantimos que suas traduções atendam a todos os requisitos legais, facilitando os processos internacionais.",
        short_description: "Traduções juramentadas precisas e oficialmente reconhecidas para seus documentos legais.",
        video: "spainFlagVideo.mp4"
      },
      {
        title: "Viagens Internacionais sem Estresse",
        description: "Prepare-se para uma experiência de viagem tranquila e sem complicações com a nossa assistência personalizada. Cuidamos de todos os detalhes, desde a obtenção de vistos até a reserva de voos e acomodações. Deixe-nos cuidar dos aspectos logísticos para que você possa aproveitar ao máximo suas viagens internacionais.",
        short_description: "Desfrute de viagens internacionais sem preocupações com nossa assistência especializada em vistos e logística",
        video: "airportVideo.mp4"
      },
      {
        title: "Assessoria Especializada em Cidadania e Naturalização",
        description: "O caminho para a cidadania ou naturalização pode ser complexo, mas estamos aqui para guiar você a cada passo. Nossa equipe experiente oferece consultoria personalizada, auxiliando-o com a documentação, entrevistas e processos burocráticos. Deixe-nos tornar o sonho da cidadania uma realidade para você.",
        short_description: "Realize seu sonho de cidadania com nossa orientação especializada em processos de naturalização e cidadania.",
        video: "germanyCityVideo.mp4"
      },
    ],
    partnersLogo: [
      "airbnbLogo.png",
      "americanExpressLogo.png",
      "bookingLogo.png",
      "decolarLogo.png",
      "expediaLogo.png"
    ],
    translators: [],
    editingTranslator: {},
    editingCreateTranslatorModal: false,
    products: [],
    editingProduct: {},
    editingCreateProductModal: false,
    snackbar: {
      show: false,
      message: "",
      color: "success",
    },
  },

  getters: {
    getServicesPresentation(state) {
      return state.services_presentation;
    },
    getPartnersLogo(state) {
      return state.partnersLogo;
    },
    getTranslators(state) {
      return state.translators;
    },
    getEditingTranslator(state) {
      return state.editingTranslator;
    },
    showEditingCreateModal(state) {
      return state.editingCreateTranslatorModal;
    },
    getProducts(state) {
      return state.products;
    },
    getEditingProduct(state) {
      return state.editingProduct;
    },
    showEditingCreateProductModal(state) {
      return state.editingCreateProductModal;
    },
    getIsEditing(state) {
      return state.isEditing;
    },
    getSnackbar(state) {
      return state.snackbar;
    }
  },

  mutations: {
    setTranslators(state, translators) {
      state.translators = translators;
    },
    setEditingTranslator(state, translator) {
      state.editingTranslator = translator;
    },
    setEditingCreateTranslatorModal(state, show) {
      state.editingCreateTranslatorModal = show;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setEditingProduct(state, product) {
      state.editingProduct = product;
    },
    setEditingCreateProductModal(state, show) {
      state.editingCreateProductModal = show;
    },
    setIsEditing(state, status) {
      state.isEditing = status;
    }
  },

  actions: {
    async fetchTranslators({ commit, dispatch }) {
      await axios.get('http://localhost:3000/pessoas').then(({ data }) => {
        commit('setTranslators', data);
      }).catch((error) => {
        console.log(error);
        let config = {
          show: true,
          message: "Ops! Algo deu errado :(",
          color: "error"
        };
        dispatch('setSnackBar', config);
      });
    },
    async createUser({ commit, dispatch }, newUser) {
      await axios.post('http://localhost:3000/pessoas', newUser).then(({ data, status }) => {
        if ( status === 201) {
          let config = {
            show: true,
            message: "Tradutor cadastrado com sucesso",
            color: "success"
          };
          dispatch('setSnackBar', config);
        }
        commit('setTranslators', [...this.state.translators, data]);
      }).catch((error) => {
        console.log(error);
        let config = {
          show: true,
          message: "Ops! Algo deu errado :(",
          color: "error"
        };
        dispatch('setSnackBar', config);
      }).finally(() => {
        commit('setEditingCreateTranslatorModal', false);
      });
    },
    async editUser({ commit, dispatch }, updatedUser) {
      await axios.put(`http://localhost:3000/pessoas/${updatedUser.id}`, updatedUser).then(({ data, status }) => {
        if ( status === 200) {
          let config = {
            show: true,
            message: "Dados do tradutor editados com sucesso",
            color: "success"
          };
          dispatch('setSnackBar', config);
        }
        const index = this.state.translators.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          const updatedTranslators = [...this.state.translators];
          updatedTranslators[index] = data;
          commit('setTranslators', updatedTranslators);
        }
      }).catch((error) => {
        console.log(error);
        let config = {
          show: true,
          message: "Ops! Algo deu errado :(",
          color: "error"
        };
        dispatch('setSnackBar', config);
      }).finally(() => {
        commit('setEditingTranslator', '');
        commit('setEditingCreateTranslatorModal', false);
      });
    },
    async deleteUser({ commit, dispatch }, userId) {
      await axios.delete(`http://localhost:3000/pessoas/${userId}`).then(({ status }) => {
        if ( status === 200) {
          let config = {
            show: true,
            message: "Tradutor deletado com sucesso",
            color: "success"
          };
          dispatch('setSnackBar', config);
        }
        commit('setTranslators', this.state.translators.filter(user => user.id !== userId));
      }).catch((error) => {
        console.log(error);
        let config = {
          show: true,
          message: "Ops! Algo deu errado :(",
          color: "error"
        };
        dispatch('setSnackBar', config);
      }).finally(() => {
        commit('setEditingTranslator', '');
        commit('setEditingCreateTranslatorModal', false);
      });
    },
    cancelEdit({ commit, dispatch }) {
      commit('setEditingTranslator', '');
      commit('setEditingCreateTranslatorModal', false);
      dispatch('fetchTranslators');
    },
    setSnackBar({ state }, config) {
      const {
        show,
        message,
        color
      } = config;

      state.snackbar.color = color || "success";
      state.snackbar.message = message || "";
      state.snackbar.show = show || false;
    },
    closeTimeOutSnackbar() {
      setTimeout(() => {
        this.state.snackbar.show = false;
      }, 3000);
    },
    async fetchProducts({ commit, dispatch }) {
      await axios.get('http://localhost:3000/produtos').then(({ data }) => {
        commit('setProducts', data);
      }).catch((error) => {
        console.log(error);
        let config = {
          show: true,
          message: "Ops! Algo deu errado :(",
          color: "error"
        };
        dispatch('setSnackBar', config);
      });
    },
    async createProduct({ commit, dispatch }, newProduct) {
      await axios.post('http://localhost:3000/produtos', newProduct).then(({ data, status }) => {
        if ( status === 201) {
          let config = {
            show: true,
            message: "Produto cadastrado com sucesso",
            color: "success"
          };
          dispatch('setSnackBar', config);
        }
        commit('setProducts', [...this.state.products, data]);
      }).catch((error) => {
        console.log(error);
        let config = {
          show: true,
          message: "Ops! Algo deu errado :(",
          color: "error"
        };
        dispatch('setSnackBar', config);
      }).finally(() => {
        commit('setEditingCreateProductModal', false);
      });
    },
    async editProduct({ commit, dispatch }, updatedProduct) {
      await axios.put(`http://localhost:3000/produtos/${updatedProduct.id}`, updatedProduct).then(({ data, status }) => {
        if ( status === 200) {
          let config = {
            show: true,
            message: "Dados do produto editados com sucesso",
            color: "success"
          };
          dispatch('setSnackBar', config);
        }
        const index = this.state.translators.findIndex(product => product.id === updatedProduct.id);
        if (index !== -1) {
          const updatedProducts = [...this.state.products];
          updatedProducts[index] = data;
          commit('setProducts', updatedProducts);
        }
      }).catch((error) => {
        console.log(error);
        let config = {
          show: true,
          message: "Ops! Algo deu errado :(",
          color: "error"
        };
        dispatch('setSnackBar', config);
      }).finally(() => {
        commit('setEditingProduct', '');
        commit('setEditingCreateProductModal', false);
      });
    },
    async deleteProduct({ commit, dispatch }, productId) {
      await axios.delete(`http://localhost:3000/pessoas/${productId}`).then(({ status }) => {
        if ( status === 200) {
          let config = {
            show: true,
            message: "Produto deletado com sucesso",
            color: "success"
          };
          dispatch('setSnackBar', config);
        }
        commit('setProducts', this.state.products.filter(product => product.id !== productId));
      }).catch((error) => {
        console.log(error);
        let config = {
          show: true,
          message: "Ops! Algo deu errado :(",
          color: "error"
        };
        dispatch('setSnackBar', config);
      }).finally(() => {
        commit('setEditingTranslator', '');
        commit('setEditingCreateTranslatorModal', false);
      });
    },
    cancelEditProduct({ commit, dispatch }) {
      commit('setEditingProduct', '');
      commit('setEditingCreateProductModal', false);
      dispatch('fetchProducts');
    },
  },
  modules: {
  }
});
