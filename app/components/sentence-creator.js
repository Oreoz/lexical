import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sentence: null,
    onCreate: null,
    
    createSentence() {
      this.get('onCreate')(this.get('sentence'));
    }
  }
});
