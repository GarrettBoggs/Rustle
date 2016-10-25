import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle1() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        author: this.get('author'),
        category: this.get('category'),
        paragraphOne: this.get('paragraphOne'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
    }
  }
});
