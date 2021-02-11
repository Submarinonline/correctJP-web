<template>
    <header
        class="flex justify-between items-center bg-night-gray text-gray-200 font-bold"
    >
        <div class="px-16 py-2">
            <h1>
                <a
                    class="text-gray-100 hover:text-gray-100 focus:outline-none"
                    href="#"
                    >{{ title }}</a
                >
            </h1>
        </div>
        <div class="px-16 flex select-none focus:outline-none">
            <nuxt-link
                class="text-gray-100 hover:text-gray-100 focus:outline-none"
                to="/"
                >ヅ卫ネレーター</nuxt-link
            >
            <div class="mx-4 border-l-2"></div>
            <nuxt-link
                class="text-gray-100 hover:text-gray-100 focus:outline-none"
                to="/analyzer/"
                >マナう亻ザ</nuxt-link
            >
            <div class="mx-4 border-l-2"></div>
            <nuxt-link
                class="text-gray-100 hover:text-gray-100 focus:outline-none"
                to="/about/"
                >怪日语について</nuxt-link
            >
        </div>
    </header>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>
