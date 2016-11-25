import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSentence(userInput) {
      let sentence = this.store.createRecord('sentence', {
        value: userInput
      });
      sentence.save().then(() => {
        this.transitionToRoute('sentence', sentence.get('id'));
      });
    }
  }
});
