<template>
    <main class="mt-8 flex-grow relative flex justify-between">
        <textarea
            class="w-2/5 mx-4 ml-auto p-4 flex-grow rounded-lg shadow-md hover:shadow-lg focus:outline-none"
            placeholder="変換する文章を入力..."
            @input="result = translate($event.target.value)"
            v-scroll-sync
        ></textarea>
        <textarea
            class="w-2/5 mx-4 mr-auto p-4 flex-grow rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:shadow-lg focus:text-bold"
            placeholder="怪レい日本语が出力されまず！"
            v-model="result"
            @click="clipResult"
            @keyup.space="clipResult"
            @keyup.enter="clipResult"
            readonly
            v-scroll-sync
        ></textarea>
        <!-- <div class="w-2/5 mx-4 p-3 absolute inset-y-0 left-1/2">お</div> -->
    </main>
</template>
<script>
import { translate } from 'cjp'

export default {
    data() {
        return {
            meta: {
                title: '怪レい日本语ジェネレーター',
                description: '贵樣は正レい文章を生成ずゑことがてきまず',
                url: 'https://correctjp.work/'
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
    },
    methods: {
        translate,
        clipResult() {
            if (!this.result) return
            this.$copyText(this.result)
        }
    }
}
</script>
<style scoped>
textarea {
    background-color: #f8f8f8;
}
</style>
