import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    articleUpdateShow(){
      this.set('updateArticleForm', true);
    },

    update(article) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        author: this.get('author'),
        category: this.get('category'),
        paragraphOne: this.get('paragraphOne'),
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
