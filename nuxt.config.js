module.exports = {
    target: 'static',
    components: true,
    modules: ['nuxt-clipboard2'],
    buildModules: ['@nuxtjs/tailwindcss'],
    // plugins: ['~plugins/scroll-sync'],
    head: {
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'correctjp.work'
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://correctjp.work'
            },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: '怪レい日本语'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: '贵樣！'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://correctjp.work/cjp.png'
            },
            { name: 'twitter:card', content: 'summary' }
        ]
    }
}
