<script setup>

    const listOccupants = ref([
        {firstName: "Brieuc", lastName: "Quemeneur", email: "brieucquemeneur@gmail.com" },
    ])
    const listProperties = ref([])

</script>

<template>
    <div>
        <div class="flex justify-between items-center">
            <h1 class="text-xl font-bold">Créer un contrats de location</h1>
        </div>
        <p class="my-4 text-slate-600">
            Ajouter un nouveau contrat de location. Un contrat de location ne peut être associé qu'à un seul 
            locataire.
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
            <h3 class="text-md text-slate-900">Date de début de contrat</h3>
            <input 
                class="my-2 w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                type="text"
                placeholder="date de fin de contrat"
                value="31/10/2025"
            />

            <h3 class="text-md text-slate-900">Date de fin de contrat</h3>
            <input 
                class="my-2 w-full px-3 py-1 bg-slate-200 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 focus:bg-white text-slate-800 rounded-sm"
                type="text"
                placeholder="date de fin de contrat"
                value="31/10/2025"
            />
        </div>
        <h2 class="mt-6 mb-2 text-xl font-bold">Locataire</h2>
        <p class="my-4 text-slate-600">
            Selectionner un locataire pour l'associer au contrat de bail.
        </p>
        <div class="p-2 my-6 flex gap-4 items-center rounded-md border-2 border-slate-200 cursor-pointer">
            <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
            <div>
                <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
            </div>
        </div>
        <div class="max-h-56 p-2 my-2 bg-slate-200 rounded-md overflow-scroll">
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
                <div>
                    <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                    <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
                </div>
            </div>
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
                <div>
                    <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                    <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
                </div>
            </div>
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
                <div>
                    <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                    <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
                </div>
            </div>
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
                <div>
                    <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                    <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
                </div>
            </div>
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
                <div>
                    <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                    <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
                </div>
            </div>
        </div>
        <h2 class="mt-6 mb-2 text-xl font-bold">Propriété</h2>
        <p class="my-4 text-slate-600">
            Selectionner la propriété concernée par le contrat.
        </p>
        <div class="p-2 my-6 flex gap-4 items-center rounded-md border-2 border-slate-200 cursor-pointer">
            <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
            <div>
                <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
            </div>
        </div>
        <div class="max-h-56 p-2 my-2 bg-slate-200 rounded-md overflow-scroll">
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
                <div>
                    <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                    <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
                </div>
            </div>
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
                <div>
                    <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                    <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
                </div>
            </div>
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
                <div>
                    <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                    <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
                </div>
            </div>
            <div class="p-2 my-1 flex gap-4 items-center bg-white rounded-md border-2 hover:border-sky-500 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
                <div>
                    <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                    <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
                </div>
            </div>
        </div>
        <h2 class="my-4 mt-6 text-xl font-bold">Contrat officiel</h2>
        <p class="my-4 text-slate-600">
            Vous pouvez ajouter un contrat de bail détaillé au format pdf. Il sera <span class="font-medium">envoyé</span> à votre locataire 
            lors de la création du contrat.
        </p>
        <div class="mt-6 mb-4 w-full h-80 bg-slate-300 flex justify-center rounded-sm">
            <p>Contract format PDF</p>
        </div>
        <div class="mt-2 mb-6">
            <ActionButton class="w-full" @click="displayLoginPanel" v-show="!isUserLoggedIn" content="Enregistrer et modifier"/>
        </div>


    </div>
</template>
