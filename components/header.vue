<template>
    <header
        class="flex justify-between items-center bg-gray-800 text-gray-200 font-bold"
    >
        <h1 class="px-16 py-2">{{ title }}</h1>
        <nuxt-link
            class="px-16 text-gray-300 select-none"
            to="/about"
            target="_blank"
            >怪日语について</nuxt-link
        >
    </header>
</template>
<script>
export default {
    props: {
        title: String
    }
}
</script>
<style scoped>
header {
    background-color: #343a40;
}
</style>
