import Ember from 'ember';
import templates from './app-templates';
var App = window.App = Ember.Application.create();
App.ApplicationController = Ember.Controller.extend({
  actions: {
    toggleShowPopover: function() {
      this.toggleProperty('showPopover');
    }
  }
});

import { IcPopoverComponent } from 'ic-popover';
import addonTemplates from 'ic-popover/templates';
App.IcPopoverComponent = IcPopoverComponent;

export default App;

