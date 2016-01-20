'use strict';

var widgetFactory = require('../src/example-widget/factory');
var template = require('../src/example-widget/template.html');

describe('example widget', function () {

	function createComponent() {
		var component = document.createElement('div');
		document.body.appendChild(component);
		component.innerHTML = template;
		return component;
	}

	function destroy(component) {
		document.body.removeChild(component);
	}

	var component;
	var widget;
	var button;

	beforeEach(function () {
		component = createComponent();
		widget = widgetFactory();
		button = component.querySelector('button');
	});

	afterEach(function () {
		destroy(component);
	});

	it('should add a click listener to a button', function () {
		var listenerAdded = false;
		var original = button.addEventListener;
		button.addEventListener = function (name, listener) {
			listenerAdded = true;
			original.call(button, name, listener);
		};

		widget.attachTo(component);
		button.click();
		expect(listenerAdded).to.be.true;
	});

	it('should show a different text after button click', function () {
		var target = component.querySelector('.target');
		var originalText = target.textContent;
		widget.attachTo(component);
		button.click();
		expect(target.textContent).not.to.equal(originalText);
	});

});
