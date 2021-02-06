<template>
    <footer
        class="mt-8 px-8 py-2 flex justify-around items-centner bg-gray-200 text-gray-600 font-bold"
    >
        <small>&copy; 2019-{{ year }} 山D</small>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>
<style scoped>
footer {
    color: #6c757d;
    background-color: #f5f5f5;
}
</style>
