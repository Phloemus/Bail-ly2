<script setup>

</script>

<template>
    <div>
        <div class="flex justify-between items-center">
            <h1 class="text-xl font-bold">Créer une propriété</h1>
        </div>
        <p class="my-4 text-slate-600">
            Ajouter une nouvelle propriété
        </p>
        <div class="w-full">
            <h3 class="text-md text-slate-900">Nom</h3>
            <input 
                class="my-2 w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                type="text"
                placeholder="Appartement"
                value=""
            />
            <h3 class="text-md text-slate-900">Adresse</h3>
            <input 
                class="my-2 w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                type="text"
                placeholder="ex: 120 rue Jean Jacques Rousseau - Nantes"
                value=""
            />
        </div>
        <div class="mt-4">
            <ActionButton class="w-full" @click="displayLoginPanel" v-show="!isUserLoggedIn" content="Enregistrer et modifier"/>
        </div>

    </div>
</template>
