import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    return this.store.findAll('article');
  },

  actions: {
    saveArticle3(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    },

    destroyArticle(article){
      if (confirm('Are you sure you want to delete this rental?')) {
        article.destroyRecord();
        this.transitionTo('admin');
      }
    },

    update(article, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('admin');
    },
  }
});
