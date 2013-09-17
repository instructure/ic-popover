import Ember from 'ember';
import templates from './app-templates';

import { IcPopoverComponent } from 'ic-popover';
import addonTemplates from 'ic-popover/templates';

var App = Ember.Application.create();
App.IcPopoverComponent = IcPopoverComponent;

export default App;

