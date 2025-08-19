<script setup>

    import SmallCard from '../components/SmallCard.vue'
    import queries from '../static/queries.json'

    const isUserLoggedIn = useState("isUserLoggedIn")

</script>

<template>
    <div class="px-4 w-96 hidden lg:block sticky top-0 bg-white border-r border-slate-200 z-10">
            <div class="my-4 flex justify-between w-full">
                <div>
                    <h2 class="text-slate-800 text-lg">Bail-ly.com</h2>
                    <p class="my-0.5 text-slate-600 text-sm">Gestion de loyer facile</p>
                </div>
                <button class="h-10 w-10 bg-slate-900 rounded-md"></button>
            </div>
            <div class="my-10 mb-2 w-full relative">
                <h3 class="mx-1 my-4 text-slate-600 text-lg">Résumé</h3>
                <div class="my-2 p-2 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-md hover:cursor-pointer">
                    <NuxtLink to="/" class="flex gap-2">
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
                    <NuxtLink to="/admin/delete-all">
                        <p>
                            Emails planifiés
                        </p>
                    </NuxtLink>
                </div>
                <div class="my-2 p-2 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-md hover:cursor-pointer">
                    <NuxtLink to="/admin/recreate-graph">
                        <p>
                            Mes propriétés
                        </p>
                    </NuxtLink>
                </div>
                <div class="my-2 p-2 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-md hover:cursor-pointer">
                    <p>
                        Mes locataires
                    </p>
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
</template>
