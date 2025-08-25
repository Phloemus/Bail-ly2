<script setup>


</script>

<template>
    <div>
        <div class="flex justify-between items-center">
            <h1 class="text-xl font-bold">Contrats de location</h1>
            <NuxtLink to="contrats-bail/creer">
                <img 
                    class="h-7 w-7 cursor-pointer" 
                    src="../../assets/plus-icon.svg"
                />
            </NuxtLink>
        </div>
        <p class="my-4 text-slate-600">
            Liste de tous vos contrats de locations en cours.
        </p>
        <div class="mt-4 flex gap-4 flex-col">
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
            <hr>
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
            <hr>
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
    </div>
</template>
