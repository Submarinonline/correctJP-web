import Vue from 'vue'

let uuid = 0

Vue.directive('scroll-sync', {
    data() {
        return {
            topNode: null
        }
    },
    beforeCreate() {
        this.uuid = uuid.toString()
        uuid += 1
    },
    inserted(el) {
        const vue = this
        let parent = this.$parent
        while (parent) {
            this.topNode = parent
            parent = this.topNode.$parent
        }
        this.topNode.$on('scroll-sync', function (data) {
            if (data.emitter === vue.uuid || data.group !== vue.group) {
                return
            }
            const {
                scrollTop,
                scrollHeight,
                clientHeight,
                scrollLeft,
                scrollWidth,
                clientWidth,
                barHeight,
                barWidth
            } = data
            const scrollTopOffset = scrollHeight - clientHeight
            const scrollLeftOffset = scrollWidth - clientWidth
            const { proportional, vertical, horizontal } = vue
            const paneHeight = vue.$el.scrollHeight - clientHeight
            const paneWidth = vue.$el.scrollWidth - clientWidth
            vue.$el.onscroll = null
            if (vertical && scrollTopOffset > barHeight) {
                vue.$el.scrollTop = proportional
                    ? (paneHeight * scrollTop) / scrollTopOffset
                    : scrollTop
            }
            if (horizontal && scrollLeftOffset > barWidth) {
                vue.$el.scrollLeft = proportional
                    ? (paneWidth * scrollLeft) / scrollLeftOffset
                    : scrollLeft
            }
            window.requestAnimationFrame(() => {
                vue.$el.onscroll = vue.handleScroll
            })
        })
        this.$el.onscroll = this.handleScroll
    },
    props: {
        proportional: Boolean,
        vertical: Boolean,
        horizontal: Boolean,
        group: String
    },
    methods: {
        handleScroll: function (e) {
            const vue = this
            window.requestAnimationFrame(() => {
                const {
                    scrollTop,
                    scrollHeight,
                    clientHeight,
                    scrollLeft,
                    scrollWidth,
                    clientWidth,
                    offsetHeight,
                    offsetWidth
                } = e.target
                this.topNode.$emit('scroll-sync', {
                    scrollTop,
                    scrollHeight,
                    clientHeight,
                    scrollLeft,
                    scrollWidth,
                    clientWidth,
                    barHeight: offsetHeight - clientHeight,
                    barWidth: offsetWidth - clientWidth,
                    emitter: vue.uuid,
                    group: vue.group
                })
            })
        }
    }
})
