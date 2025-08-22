<script setup>


</script>

<template>
    <div>
        <h1 class="text-xl font-bold">Contrat de location</h1>
        <p class="my-4 text-slate-600">
            Vous pouvez modifier le contrat de location du locataire. Il sera notifié par <span class="font-medium">email</span> de la 
            modification de son contrat.
        </p>
        <div class="w-full">
            <h3 class="text-md text-slate-900">Loyer</h3>
            <div class="my-2 flex gap-2">
                <input 
                    class="w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                    type="text"
                    placeholder="montant"
                    value="594"
                />
                <input 
                    class="w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                    type="text"
                    placeholder="euro (€)"
                    value="euro (€)"
                />
            </div>
            <h3 class="text-md text-slate-900">Jour de versement</h3>
            <input 
                class="my-2 w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                type="text"
                placeholder="jour de versement"
                value="1"
            />
            <h3 class="text-md text-slate-900">Date de fin de contrat</h3>
            <input 
                class="my-2 w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                type="text"
                placeholder="date de fin de contrat"
                value="31/10/2025"
            />
            <div class="mt-2 mb-6">
                <ActionButton class="w-full" @click="displayLoginPanel" v-show="!isUserLoggedIn" content="Enregistrer et modifier"/>
            </div>
        </div>
        <h2 class="mt-6 mb-2 text-xl font-bold">Locataire</h2>
        <div class="p-2 my-2 flex gap-4 items-center rounded-md hover:bg-slate-100 cursor-pointer">
            <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
            <div>
                <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
            </div>
        </div>
        <h2 class="mt-6 mb-2 text-xl font-bold">Propriété</h2>
        <div class="p-2 my-2 flex gap-4 items-center rounded-md hover:bg-slate-100 cursor-pointer">
            <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
            <div>
                <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
            </div>
        </div>
        <h2 class="my-4 mt-6 text-xl font-bold">Contrat officiel</h2>
        <div class="mt-6 mb-4 w-full h-80 bg-slate-300 flex justify-center rounded-sm">
            <p>Contract format PDF</p>
        </div>
    </div>
</template>
