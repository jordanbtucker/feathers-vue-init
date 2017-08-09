const path = require('path')
const nodemon = require('nodemon')

nodemon({
	cwd: path.resolve(__dirname, 'api'),
	script: path.resolve(__dirname, 'api/src/index.js'),
	watch: path.resolve(__dirname, 'api/src'),
}).on('start', () => {
	process.chdir(path.resolve(__dirname, 'web'))
	require('./web/build/dev-server')
})
