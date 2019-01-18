// import axios
import axios from 'axios';

export default {
  getSavedCollections: function() {
    return axios.get('/api/categories')
  },
  getCollectionById: function(categoriesId) {
    return axios.get(`/api/categories/${categoriesId}`)
  },
  saveCollection: function(categoriesData) {
    return axios.post('/api/categories', categoriesData)
  },
  updateCollection: function(categoriesId) {
    return axios.put(`/api/categories/${categoriesId}`)
  },
  deleteCollection: function(categoriesId) {
    return axios.delete(`/api/categories/${categoriesId}`)
  }
}

// axios.get(url, options)
/* options
  {
    params: {
      q: "harry potter",
      year: 1999
    },
    authorization: {
      token: "dlkgsdjalkgj4ut30t94ut094u8t"
    }
  }
*/