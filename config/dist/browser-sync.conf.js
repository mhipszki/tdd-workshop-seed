'use strict';

var config = require('../browser-sync.conf');

// watch these files
config.files = [
	'build/dist/**/*'
];

// serve these folders
config.server = {
	baseDir: [
		'build/dist'
	]
};

config.port = 4000;
config.ui.port = 4001;
config.ui.weinre.port = 9090;

module.exports = config;
