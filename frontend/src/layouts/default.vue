<script>

    import Sidebar from "../components/Sidebar.vue"
    import Navbar from "../components/Navbar.vue"

</script>

<template>
    <div class="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    <div class="h-screen w-full bg-slate-50 flex">
        <Sidebar />
        <div class="w-full">
            <Navbar />
            <div class="px-4 lg:px-10 my-10">
                <QuickNavigation></QuickNavigation>
                <slot />
            </div>
        </div>
    </div>
</template>
