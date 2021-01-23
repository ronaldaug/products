import axios from 'axios';

  function getPageProducts(arr,page){
      const startIndex = (page - 1) * process.env.NUXT_ENV_PER_PAGE;
      const endIndex = page * process.env.NUXT_ENV_PER_PAGE;
      return arr.slice(startIndex,endIndex);
  }

  export const state = () => ({
    allProducts:[],
    categories: [],
    relations:[]
  })

  export const mutations = {
    setAllProducts(state,payload){
      state.allProducts = [...payload];
    },
    setCategories(state,payload){
        state.categories = [...payload];
    },
    setRelations(state,payload){
      state.relations = [...payload];
    }
  }

  export const actions = {
    async fetchProducts({commit}){
        const res = await axios(process.env.NUXT_ENV_API_URL + '/b/600b9d64bca934583e407af3');
        const {products} = res.data;
        commit('setAllProducts',products);
    },
    async fetchCategories({commit}){
        const res = await axios(process.env.NUXT_ENV_API_URL + '/b/600b9dedbca934583e407b1a');
        const {categories} = res.data;
        commit('setCategories',categories)
    },
    async fetchRelations({commit}){
        const res = await axios(process.env.NUXT_ENV_API_URL + '/b/600bb968a3d8a0580c350e09');
        const {productsCategoriesPivot} = res.data;
        commit('setRelations',productsCategoriesPivot)
    }
  }

  export const getters = {
      getProducts: ({allProducts}) => (page) => {
          return getPageProducts(allProducts,page)
      },
      getCategories({categories}){
        return categories;
      },
      getProductsByCategory: ({allProducts,relations}) => ({categoryId,page}) =>{
          const productIds = relations.filter(e=>e.categoryId == categoryId).map(p=>p.productId);
          const products = allProducts.filter(p=>productIds.includes(p.productId));
          return getPageProducts(products,page)
      }
  }