<template>
    <div class="min-h-screen flex flex-col">
        <Header :title="title" />
        <nuxt class="container mx-auto mb-auto" />
        <Footer />
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'correctjp.work'
        }
    },
    created() {
        this.addTitleListener()
    },
    methods: {
        addTitleListener() {
            this.$nuxt.$on('updateTitle', this.updateTitle)
        },
        updateTitle(titleText) {
            if (!titleText) return
            this.title = titleText
        }
    }
}
</script>
