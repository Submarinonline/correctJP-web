<template>
    <main>
        <h2>贵樣！</h2>
        <p>
            怪レい日本语を極度使用（しなさい）<br />
            こゐウ卫ブサ亻トゐラ亻乜ソヌはMITてず<br />
            贵樣ゐ友人にも怪レい日本语を極度布教(しなさい)
        </p>

        <h2>ソーヌコードとか</h2>
        <h3>こゐウ卫ブサ亻ト</h3>
        <ul>
            <li>
                <a
                    href="https://github.com/Submarinonline/correctJP-web"
                    target="_blank"
                    >Github</a
                >
            </li>
        </ul>
        <h3>怪レいJavaScriptう亻ブう刂</h3>
        <ul>
            <li>
                <a href="https://www.npmjs.com/package/cjp" target="_blank"
                    ><img
                        src="https://badge.fury.io/js/cjp.svg"
                        alt="npm version"
                    />npmjs.com</a
                >
            </li>
            <li>
                <a
                    href="https://github.com/Submarinonline/cjp.js"
                    target="_blank"
                    >GitHub</a
                >
            </li>
        </ul>
<!--
        <h2>APIとそゐ使い方</h2>
        <p><pre>/api/raw/{テキスト}</pre>←にGETリクエスト</p>
        <p>もっと詳しい説明はそのうち書きます。待てない人はソース読んでください。</p>
-->
        <h2>开発者</h2>
        <p>
            <a href="https://github.com/yamader" target="_blank">山D</a>
            <a href="https://github.com/0-a-e" target="_blank">Orange</a>
            <a href="https://twitter.com/HiSubway" target="_blank"
                >さぶラぇい</a
            >
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
                url: 'https://correctjp.work/about/'
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
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.meta.description
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: this.meta.url
                }
            ]
        }
    },
    mounted() {
        this.$nuxt.$emit('updateTitle', this.meta.title)
    }
}
</script>
