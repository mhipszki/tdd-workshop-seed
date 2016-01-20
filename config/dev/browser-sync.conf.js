'use strict';

var config = require('../browser-sync.conf');

// watch these files
config.files = [
	'build/dist/**/*'
];

// serve these folders
config.server = {
	baseDir: [
		'build/dev'
	]
};

module.exports = config;
