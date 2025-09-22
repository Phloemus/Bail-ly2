<script setup>

    import SmallCard from '../components/SmallCard.vue'
    import queries from '../static/queries.json'

    const isUserLoggedIn = useState("isUserLoggedIn")
    const isSidebarToggled = useState("isSidebarToggled")

    function toggleSidebar() {
        isSidebarToggled.value = !isSidebarToggled.value
    }

</script>

<template>
    <div 
	class="w-full lg:w-96 block absolute lg:sticky top-0 bg-white border-r border-slate-200 z-10"
        v-show="isSidebarToggled"
    >
            <div class="w-full h-1 lg:hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div class="px-4">
                <div class="my-4 flex justify-between w-full items-center">
                    <div>
                        <h2 class="text-slate-800 text-lg">Bail-ly.com</h2>
                        <p class="my-0.5 text-slate-600 text-sm">Gestion de loyer facile</p>
                    </div>
                    <div 
                        class="w-8 h-10 rounded-md cursor-pointer flex items-center"
                        @click="toggleSidebar"
                    >
                        <img src="assets/cross-icon.svg">
                    </div>
                </div>
                <div class="my-10 mb-2 w-full relative">
                    <h3 class="mx-1 my-4 text-slate-600 text-lg">Résumé</h3>
                    <div class="my-2 p-2 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-md hover:cursor-pointer">
                        <NuxtLink to="/" class="flex gap-2" @click="toggleSidebar">
                            <p>
                                Tableau de bord
                            </p>
                            <div class="h-2 w-2 bg-green-400 rounded-full"></div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="my-10 w-full relative">
                    <h3 class="mx-1 my-4 text-slate-600 text-lg">Actions rapides</h3>
                    <div class="my-2 p-2 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-md hover:cursor-pointer">
                        <NuxtLink to="/email-planifies" @click="toggleSidebar">
                            <p>
                                Emails planifiés
                            </p>
                        </NuxtLink>
                    </div>
                    <div class="my-2 p-2 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-md hover:cursor-pointer">
                        <NuxtLink to="/contrats-bail" @click="toggleSidebar">
                            <p>
                                Mes contrats de bail
                            </p>
                        </NuxtLink>
                    </div>
                    <div class="my-2 p-2 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-md hover:cursor-pointer">
                        <NuxtLink to="/proprietes" @click="toggleSidebar">
                            <p>
                                Mes propriétés
                            </p>
                        </NuxtLink>
                    </div>
                    <div class="my-2 p-2 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-md hover:cursor-pointer">
                        <NuxtLink to="/locataires" @click="toggleSidebar">
                            <p>
                                Mes locataires
                            </p>
                        </NuxtLink>
                    </div>
                </div>
                <div class="w-full relative">
                    <h3 class="mx-1 my-4 text-slate-600 text-lg">Modèles de mail</h3>
                    <SmallCard 
                        v-for="(query, index) in queries"
                        :title="query.name"
                        :description="query.title"
                        :link="query.link"
                    />
                    <div class="my-4 flex justify-center">
                        <ActionButton content="Ajouter un modèle"></ActionButton>
                    </div>
                </div>
            </div>
        </div>
</template>
