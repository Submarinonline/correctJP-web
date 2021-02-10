module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.js',
        './nuxt.config.js'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'paper-gray': '#f8f8f8',
                'night-gray': '#343a40'
            },
            inset: {
                '1/2': '50%'
            }
        }
    }
}
