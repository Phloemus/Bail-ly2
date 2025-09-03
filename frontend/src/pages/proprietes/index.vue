<script setup>


</script>

<template>
    <div>
        <div class="flex justify-between items-center">
            <h1 class="text-xl font-bold">Mes propriétés</h1>
            <NuxtLink to="proprietes/creer">
                <img 
                    class="h-7 w-7 cursor-pointer" 
                    src="../../assets/plus-icon.svg"
                />
            </NuxtLink>
        </div>
        <p class="my-4 text-slate-600">Tous les appartements et les maisons que vous louez.</p>
        <div class="flex flex-col md:flex-row gap-2">
            <div class="p-2 flex gap-4 items-center rounded-md hover:bg-slate-100 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
                <div>
                    <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                    <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
                </div>
            </div>
            <div class="p-2 flex gap-4 items-center rounded-md hover:bg-slate-100 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-slate-300 rounded-full text-white"></div>
                <div>
                    <p class="text-slate-800 text-medium">Appartement de Nantes</p>
                    <p class="text-slate-600 text-sm">120 rue Jean Jacques Rousseau</p>
                </div>
            </div>
        </div>
    </div>
</template>
