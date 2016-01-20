'use strict';

var widgetFactory = require('./example-widget/factory');
var template = require('./example-widget/template.html');

var component = document.querySelector('.example-widget');
component.innerHTML = template;

var widget = widgetFactory();
widget.attachTo(component);
