require('babel-polyfill');

const environment = {
    development: {
        isProduction: false
    },
    production: {
        isProduction: true
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT,
    app: {
        title: 'KitchCam',
        description: 'Best Chefs at your fingertips',
        head: {
            titleTemplate: 'KitchCam: %s',
            meta: [
                {name: 'description', content: 'All the modern best practices in one example.'},
                {charset: 'utf-8'},
                {property: 'og:site_name', content: 'KitchCam.com'},
                {property: 'og:image', content: 'https://www.kitchcam.com/logo.png'},
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:title', content: 'The number one spot to watch real chefs from around the world!'},
                {property: 'og:description', content: 'Watch chefs show off their incredible recipes and special ' +
                'dishes from around the world. You could be a chef tomorrrow!.'},
                {property: 'og:card', content: 'summary'},
                {property: 'og:site', content: 'www.kitchcam.com'},
                {property: 'og:creator', content: '@patrickus'},
                {property: 'og:image:width', content: '200'},
                {property: 'og:image:height', content: '200'}
            ]
        }
    },

}, environment);
