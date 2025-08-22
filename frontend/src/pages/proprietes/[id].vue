<script setup>


</script>

<template>
    <div>
        <h1 class="text-xl font-bold">Profil propriété</h1>
        <div class="p-2 my-2 flex gap-4 items-center rounded-md hover:bg-slate-100 cursor-pointer">
            <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
            <div>
                <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
            </div>
        </div>
        
        <p class="my-4 text-slate-600">
            Les modifications faites sur le profil de votre propriété ne sera pas communiquées avec les locataires.
        </p>
        
        <div class="w-full">
            <h3 class="text-md text-slate-900">Nom</h3>
            <input 
                class="my-2 w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                type="text"
                placeholder="name"
                value="Appartement de Nantes"
            />
            <h3 class="text-md text-slate-900">Adresse postale</h3>
            <input 
                class="my-2 w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                type="text"
                placeholder="120 rue Jean Jacques Rousseau"
                value="120 rue Jean Jacques Rousseau"
            />
            <div class="mt-2 mb-6">
                <ActionButton class="w-full" @click="displayLoginPanel" v-show="!isUserLoggedIn" content="Enregistrer et modifier"/>
            </div>
        </div>
        <h2 class="mt-6 mb-2 text-xl font-bold">Locataires associés</h2>
        <div class="p-2 my-4 flex gap-4 items-center rounded-md hover:bg-slate-100 cursor-pointer">
            <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
            <div>
                <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
            </div>
        </div>
        <h2 class="mt-6 mb-2 text-xl font-bold">Contrats de bail associés</h2>
        <div class="p-4 rounded-md hover:bg-slate-100 cursor-pointer">
            <h2 class="mb-2 text-lg font-semibold">Contrat #12e12re</h2>
            <p class="text-slate-600"><span class="text-slate-800 font-medium">Locataire:</span> Brieuc Quemeneur</p>
            <p class="text-slate-600"><span class="text-slate-800 font-medium">Loyer:</span> 594€</p>
            <div class="mt-4 flex gap-4 items-center">
                <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
                <div>
                    <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                    <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
                </div>
            </div>
        </div>
    </div>
</template>
