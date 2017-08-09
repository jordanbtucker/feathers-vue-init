require('eventsource-polyfill')

// eslint-disable-next-line node/no-missing-require
const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
	if (event.action === 'reload') {
		window.location.reload()
	}
})
