import Ember from 'ember';

var IcPopover = Ember.Component.extend({

  classNames: ['ic-popover'],

  classNameBindings: [
    'open:ic-popover-open:ic-popover-closed'
  ],

  // popovers are on the application root so it can popover any other element
  appendToDocument: function() {
    // there has to be a better way than this :\
    var app = this.get('container').lookup('application:main')
    var rootElement = Ember.$(app.get('rootElement'));
    this.$().appendTo(rootElement.first());
  }.on('didInsertElement'),

  position: function() {
    this.$().css({
      left: parseInt(this.get('x')),
      top: parseInt(this.get('y'))
    });
  }.observes('x', 'y'),

  initX: function() {
    if (this.get('x')) return;
    this.set('x', this.calculateCenter('width'));
  }.on('didInsertElement'),

  initY: function() {
    if (this.get('y')) return;
    this.set('y', this.calculateCenter('height'));
  }.on('didInsertElement'),

  calculateCenter: function(axis) {
    var capitalize = Ember.String.capitalize;
    return (window['inner'+capitalize(axis)] / 2) - (this.$()[axis]() / 2);
  }

});

export default IcPopover;

