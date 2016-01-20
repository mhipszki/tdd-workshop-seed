# TDD workshop seed

This project can help you to practice TDD quickly start writing tests against the first features of your imagined *front-end Javascript* app, providing an automated workflow and tools to get immediate feedback when changing test or production code.

![redgreenrefacor](https://cloud.githubusercontent.com/assets/220661/12453468/42764430-bf8b-11e5-8c6d-661f0dd6a90c.png)

## Immediate feedback

Immediate feedback is essential when using the test-first approach, you must be notified on each file save if your change has moved you forward or not.

Being able to run a whole unit test suite in a matter of *milliseconds* augments this feedback to a level where - provided that TDD has been done right - you will have confidence and will be able to quickly experiment with new ideas how to test and / or implement a new feature.

TDD eventually - as opposed to the common TDD-denier opinion - gives you the ability to go *fast*, very fast, especially on the long run. However, you must practice and be fluent, hence this seed project has been set up for your convenience.

## How to start

If the above made you excited, then clone the repo and run `npm install` in the project folder, then `npm run start-dev -s` in a terminal window and `npm run karma-start -s -- --browsers Chrome` in another one to start developing and to write your first test case under `test` folder in `CommonJS` format.

Whenever you change a file (either Javascript or HTML) it will trigger Karma to run the test suite. You can either connect a mobile (or any other) browser via opening `1.2.3.4:9876` IP address (where 1.2.3.4 is the computer's IP address you're running the Karma server on).

Check `localhost:3000` in your default browser to see the results.

## Tools to aid practicing TDD

There are a few tools to aid development and practicing TDD:

- [ESLint](http://eslint.org/) to lint your Javascript files (both source and test specs)
- [Editorconfig](http://editorconfig.org/) to standardise IDE file handling cross-platform
- [Browserify](http://browserify.org/) to help you modularise your code in CommonJS format, also to bundle your app
- [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) to scaffold your unit / integration tests
- [Karma](http://karma-runner.github.io/) to run your tests cross-browser, and [PhantomJS](http://phantomjs.org/) to run them headless
- [Browsersync](https://www.browsersync.io/) to save time via synchronised browser testing

## Development workflow

There's no Grunt or Gulp magic, only the most necessary packages has been added to this project.

Development is aided with several `npm` scripts (see `package.json` for details):

- `start-dev`: starts dev environment, running `serve` and `watch`
- `serve`: serves `build/dev/` folder's content on `localhost:3000`
- `build`: creates app bundle from source to under `build/dev/` folder (w/ JS source maps)

Standalone tasks:

- `test`: runs all unit tests once via Karma in PhantomJS
- `watch`: listens to file changes, runs `test` and `build` scripts
- `lint`: lints *all* Javascript files using ESLint (configs, production and test code)
- `karma-server`: starts a Karma server with given browsers (e.g. Chrome, FF, Safari, or PhantomJS)
- `karma`: triggers Karma to run the unit test suite

Tasks for distribution:

- `serve-dist`: serves `build/dist/` folder's content on `localhost:4000`
- `build-dist`: creates app bundle from source to under `build/dist/` folder (no source map, uglified JS)

## How to test-drive your app features

In a nutshell:

- focus on one small feature at a time
- create a new test file e.g. `my-component.spec.js` under `test` folder
- scaffold the feature specific test suite using `describe` blocks of `mocha`

```Javascript
'use strict';

describe('my component', {
	// test cases go here...
});
```

- write your first `it` block (test case) expecting one behaviour of the feature

```Javascript
'use strict';

// we're focusing on my-component only in this spec
var myComponent = require('src/my-component/index.js');
// we'd like to exercise my-component and its template in isolation
var template = require('src/my-component/template.html');

describe('my component', {

	// set up test context for each test case
	beforeEach(function() {
		// add template to DOM
		var container = document.createElement('div');
		container.innerHTML = template;
		// attach component behaviour to DOM
		myComponent.attachTo(container);
	});

	it('should have a Submit button', function() {
		// get reference to element
		var button = container.querySelector('button');
		// exercise component behaviour
		expect(button.textContent).to.equal('Submit');
	});
});
```

A few hints might help down the path:

- work in *tiny* steps, focus on one small feature (or even one method) at a time
- follow the discipline, keep the *Red-Green-Refactor* cycle of TDD
- check in code changes after *each* cycle (easy to revert back to the closest working version)

- start test-driving production code inside the spec at first

```Javascript
'use strict';

// production code

var myComponent = {
	attachTo: function(el) {
		// do something with the DOM element
	}
};

// test code

describe('my component', {
	// test cases go here...
});
```

- then extract it out to its own module

```Javascript
'use strict';

function attachTo(el) {
	// do something with the DOM element
}

module.exports = function factory() {
	return {
		attachTo: attachTo
	};
};
```

- use *factories* to generate new object instances (as opposed to inheritance)

- *separate concerns* and use *dependency inversion*, inject your dependencies to help yourself write tests and exercise production code easily

```Javascript
'use strict';

module.exports = function factory(dep1, dep2) {
	function someFeature(){
		dep2.someOtherFunction();
	};
	someFeature.someValue = dep1.someFunction();
	return someFeature;
};
```

*NOTE: dep1 and dep2 are injected, thus can be replaced with stubs easily*

```Javascript
'use strict';

var someFeatureFactory = require('src/some-feature/factory');

describe('some feature', function() {

	it('should do something when instantiated', function() {
		var dep1Mock = {
			someFunction: function fake() { return 'some value' };
		};
		var dep2Mock = { a: 'dependency' };
		var someFeature = someFeatureFactory(dep1Mock, dep2Mock);
		expect(someFeature.someValue).to.equal('some value');
	});

	it('should do something else when used', function() {
		var dep1Mock = {
			someFunction: function doNothing() {};
		};
		var dep2HasBeenCalled = false;
		var dep2Mock = {
			someOtherFunction: function spy() {
				dep2HasBeenCalled = true;
			};
		};
		var someFeature = someFeatureFactory(dep1Mock, dep2Mock);
		someFeature();
		expect(dep2HasBeenCalled).to.be.true;
	});
});
```

- the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) is not necessarily favorable in tests, make your test cases explicit

- test cases should run w/o issues in isolation and should not depend on each other or on a shared state

- either change a test or a feature in the production code, but *never* both, when writing production code your tests are your safety net, when changing tests your production code acts similarly

- always see a test case fail *first*, even try to *break it* if it passes for the first time

- structure your tests (and your app) by feature

```
src/
	component-1/
		feature-1.js
		feature-2.js
		template.thml
```

- break down your specs into several files, each should focus on a single behaviour, avoid lengthy spec files, they make it difficult to understand the feature, and might be also code smell of too much responsibility in a module

```
test/
	component-1/
		feature-1/
			behaviour-1.spec.js
			behaviour-2.spec.js
```

Run `npm run start-dev -s` in a terminal window and `npm run karma-start -s -- --browsers Chrome` in another one to start practicing! :)

*NOTE: `-s` flag is used to tell `npm` to suppress its verbose output when running tasks*
