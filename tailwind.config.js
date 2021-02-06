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
            inset: {
                '1/2': '50%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
