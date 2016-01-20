'use strict';

module.exports = function factory() {

	return {
		attachTo: function (component) {
			var button = component.querySelector('button');
			button.addEventListener('click', function() {
				var target = component.querySelector('.target');
				target.innerHTML = 'After button click';
			});
		}
	}
};
