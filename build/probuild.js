'use strict'
require('./check-versions')();

process.env.NODE_ENV = 'production';

const ora = require('ora');
const fs = require('fs');
const path = require('path');

const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');
const spinner = ora('building for production...');
const ncp = require('ncp').ncp; //--

// console.log(__dirname);
// console.log(path.dirname(__dirname));
// console.log(path.basename(path.dirname(__dirname)));
// console.log(path.join(path.dirname(__dirname), '/static/js/common.js'));
const dirName = path.basename(path.dirname(__dirname));
const dirUrl = path.dirname(__dirname);
const destination = dirUrl + '/' + dirName;

let matchUpdateArr = [
	{
		fileUrl: path.join(__dirname, '../static/js/common.js'),
		replaceOpt: [
			{
				matching: /^const\s+rootUrl/gm, // RegExp
				updated: '// const rootUrl' // string
			},
			{
				matching: /\/+\s+const\s+rootUrl\s+=\s+'https:\/+hr/gm,
				updated: "const rootUrl = 'https://hr"
			}
		],
		recoverOpt: [
			{
				matching: /^const\s+rootUrl/gm, // RegExp
				updated: '// const rootUrl' // string
			},
			{
				matching: /\/+\s+const\s+rootUrl\s+=\s+'http:\/+test/gm,
				updated: "const rootUrl = 'http://test"
			}
		]
	}
];

const recover = function(){
	matchUpdateArr.forEach((item, i) => {
		fs.readFile(item.fileUrl, 'utf8', (err, fd) => {
			if (err) throw err;
			let str = fd;
			item.recoverOpt.forEach((value, index) => {
				str = str.replace(value.matching, value.updated);
			});

			fs.writeFile(item.fileUrl, str, 'utf8', (err) => {
				if (err) throw err;
				console.log(path.parse(item.fileUrl).name + ' recover');
			});
		});
	});
	rm(dirUrl + '/dist', (err) => {
		if (err) throw err;
		setTimeout(() => {
			ncp(dirUrl + '/distTempBackUp', dirUrl + '/dist', (err) => {
				if (err) throw err;
				console.log('dist recover');
				rm(dirUrl + '/distTempBackUp', (err) => {
					if (err) throw err;
					console.log('deleted distTempBackUp');
					console.log('recover end');
				});
			});
		}, 1000);
	});
}

const mkDestination = function(){
	fs.mkdir(destination, (err) => {
		if (err) throw err;
		console.log(dirName + ' created');
		let dirArr = ['dist'];
		let copyNum = 0;
		let ncpPromise = new Promise((sesolve, reject) => {
			dirArr.forEach((value, index) => {
				ncp(dirUrl + '/' + value, destination + '/' + value, (err) => {
					if (err) throw err;
					console.log('copy ' + value + ' success');
					copyNum += 1;
					if (copyNum == dirArr.length) {
						sesolve()
					}
				});
			});
		});
		ncpPromise.then((value) => {
			console.log('copy end');
			console.log('recover start');
			recover()
		});
	});
}

const buildOver = function(){
	fs.stat(destination, (err, stats) => {
		if (stats) {
			rm(destination, (err) => {
				if (err) throw err;
				console.log('deleted ' + dirName);
				setTimeout(() => {
					mkDestination();
				}, 1000);
			});
		} else {
			mkDestination();
		}
	});
}

const startBuild = function(){
	spinner.start();
	rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
		if (err) throw err;
		webpack(webpackConfig, function (err, stats) {
			spinner.stop();
			if (err) throw err;
			process.stdout.write(stats.toString({
				colors: true,
				modules: false,
				children: false,
				chunks: false,
				chunkModules: false
			}) + '\n\n');

			if (stats.hasErrors()) {
				console.log(chalk.red('  Build failed with errors.\n'));
				process.exit(1);
			}

			console.log(chalk.cyan('  Build complete.\n'));
			console.log(chalk.yellow(
				'  Tip: built files are meant to be served over an HTTP server.\n' +
				'  Opening index.html over file:// won\'t work.\n'
			));
			buildOver();
		});
	});
}


const promise = new Promise(function(resolve, reject){
	let count = 0;
	matchUpdateArr.forEach((item, i) => {
		fs.readFile(item.fileUrl, 'utf8', (err, fd) => {
			if (err) throw err;
			let str = fd;
			item.replaceOpt.forEach((value, index) => {
				str = str.replace(value.matching, value.updated);
			});
			fs.writeFile(item.fileUrl, str, 'utf8', (err) => {
				if (err) throw err;
				count += 1;
				console.log('update ' + path.basename(item.fileUrl) + ' success');
				if (count == matchUpdateArr.length) {
					resolve();
				}
			});
		});
	});
});

promise.then((value) => {
	fs.mkdir(dirUrl + '/distTempBackUp', (err) => {
		if (err) throw err;
		ncp(dirUrl + '/dist', dirUrl + '/distTempBackUp', (err) => {
			console.log('dist file backup is success');
			startBuild();
		});
	});
});


