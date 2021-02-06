<template>
    <main>
        <h2>贵樣！</h2>
        <p>
            怪レい日本语を極度使用(しなさい)<br />
            こゐウ卫ブサ亻トゐラ亻乜ソヌはMITてず<br />
            贵樣ゐ友人にも怪レい日本语を極度布教(しなさい)
        </p>
        <h2>APIとそゐ使い方</h2>
        <p>
            <a href="https://badge.fury.io/js/cjp"
                ><img src="https://badge.fury.io/js/cjp.svg" alt="npm version"
            /></a>
            Comming soon...
        </p>
        <h2>开発者</h2>
        <p>
            <a href="https://twitter.com/HiSubway" target="_blank"
                >さぶラぇい</a
            >
            <a href="https://twitter.com/yamad_linuxer" target="_blank">山D</a>
        </p>
    </main>
</template>
<script>
export default {
    data() {
        return {
            meta: {
                title: '怪レい日本语について',
                description: '怪日语ゐ极度解说',
                url: 'https://correctjp.work/about'
            },
            result: ''
        }
    },
    head() {
        return {
            title: this.meta.title,
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.meta.title
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.meta.description
                },
                { hid: 'og:url', property: 'og:url', content: this.meta.url }
            ]
        }
    },
    mounted() {
        this.$nuxt.$emit('updateTitle', this.meta.title)
    }
}
</script>
