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
  },
  getSavedBookmarks: function() {
    return axios.get('/api/bookmarks')
  },
  getBookmarkById: function(bookmarksId) {
    return axios.get(`/api/bookmarks/${bookmarksId}`)
  },
  saveBookmark: function(bookmarksData) {
    return axios.post('/api/bookmarks', bookmarksData)
  },
  updateBookmark: function(bookmarksId) {
    return axios.put(`/api/bookmarks/${bookmarksId}`)
  },
  deleteBookmark: function(bookmarksId) {
    return axios.delete(`/api/bookmarks/${bookmarksId}`)
  }
}
