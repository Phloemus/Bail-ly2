<script setup>


</script>

<template>
    <div>
        <h1 class="text-xl font-bold">Mes locataires</h1>
        <p class="my-4 text-slate-600">Liste de tous les locataires avec qui vous avez un contrat de bail actif.</p>
        <div class="flex flex-col md:flex-row gap-2">
            <div class="p-2 flex gap-4 items-center rounded-md hover:bg-slate-100 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
                <div>
                    <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                    <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
                </div>
            </div>
            <div class="p-2 flex gap-4 items-center rounded-md hover:bg-slate-100 cursor-pointer">
                <div class="h-10 w-10 p-2 bg-blue-500 rounded-full text-white">BQ</div>
                <div>
                    <p class="text-slate-800 text-medium">Brieuc Quemeneur</p>
                    <p class="text-sky-500 text-sm hover:underline cursor-pointer">brieucquemeneur@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
</template>
