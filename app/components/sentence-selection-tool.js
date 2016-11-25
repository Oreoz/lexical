import Ember from 'ember';

const { on } = Ember;

export default Ember.Component.extend({
  sentence: null,
  availableColors: Ember.A([
    { name: 'Orange', code: '#FD785A' },
    { name: 'Bleu', code: '#C9C9FF' },
    { name: 'Vert', code: '#E1F7D5' },
    { name: 'Mauve', code: '#B19CD9' }
  ]),
  selectedColorName: 'Orange',

  init: on('init', function() {
    this._super(...arguments);
    console.log(`Sentence received: ${this.get('sentence')}`);
  }),

  actions: {
    highlight() {
      let selection = window.getSelection().toString().trim();
      let selectionColor = this.get('availableColors').findBy('name', this.get('selectedColorName'));
      let span = `<span style="background-color:${selectionColor.code}">${selection}</span>`;
      this.$('.sentence').html(this.$('.sentence').html().replace(selection, span));
    },
    onColorChange(color) {
      this.set('selectedColorName', color.name);
    }
  }
});
