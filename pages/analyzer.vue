<template>
    <main class="mt-8 flex-grow relative flex justify-between">
        <textarea
            class="w-2/5 mx-4 ml-auto p-4 flex-grow rounded-lg bg-paper-gray shadow-md hover:shadow-lg focus:outline-none"
            placeholder="お"
            @input="result = generate($event.target.value)"
            v-scroll-sync
        ></textarea>
        <div
            class="w-2/5 mx-4 mr-auto p-4 flex-grow rounded-lg bg-paper-gray shadow-md hover:shadow-lg focus:outline-none focus:shadow-lg focus:text-bold hover:bg-red-700"
        >
            製作中です
        </div>
    </main>
</template>

<script>
import { generate } from 'cjp'

export default {
    data() {
        return {
            meta: {
                title: '怪レい日本语アナライザー',
                description: '贵樣ゐ正レい文章を解析レまず',
                url: 'https://correctjp.work/analyzer'
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
        this.$nuxt.$emit('updateTitle', '怪レい日本语マナう亻ザー')
    },
    methods: {
        generate,
        clipResult() {
            if (!this.result) return
            this.$copyText(this.result)
        }
    }
}
</script>
