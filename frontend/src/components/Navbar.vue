<script setup>

    // Imports
    import SearchInput from './SearchInput.vue'
    import data from '../static/result-10k-first-classes.json'

    const pb = usePocketbase()

    // Global state
    const isUserLoggedIn = useState('isUserLoggedIn')
    const userAuthToken = useState('userAuthToken')
    const isLoginPanelOpened = useState('isLoginPanelOpened')
    const isSidebarToggled = useState('isSidebarToggled')

    function displayLoginPanel() { 
        isLoginPanelOpened.value = true
    }

    function logout() { // seems to logout but doesn't update the state for some reason
        pb.authStore.clear()
        navigateTo("/")
    }

    function toggleSidebar() {
        isSidebarToggled.value = !isSidebarToggled.value
    }

    const searchTerm = ref("")
    const ontologyClasses = ref([])

    data.results.bindings.forEach((data) => {
        ontologyClasses.value.push({ "name": data.label.value, "ontology": data.class.value })
    })

    function filterOntologyList(event) {
        searchTerm.value = event.target.value
        const query= searchTerm.value.toLowerCase();
        ontologyClasses.value = []
        data.results.bindings.forEach(suggestion => {
            if(suggestion.label.value.toLowerCase().includes(query) && ontologyClasses.value.length <= 10) {
                const elem = {
                    "name": suggestion.label.value,
                    "ontology": suggestion.class.value
                }
                ontologyClasses.value.push(elem)
            }
        });
    }

</script>

<template>
    <nav class="px-3 lg:px-6 py-3 sticky top-0 right-0 w-full flex justify-between items-center bg-white border-b border-slate-200">
        <div class="flex gap-2 items-center">
            <div 
                class="w-8 h-10 rounded-md cursor-pointer flex items-center"
                @click="toggleSidebar"
            >
                <img src="assets/sidebar-icon.svg">
            </div>
            <SearchInput 
                class="mr-4"
                v-show="false"
                :searchTerm="searchTerm"
                @input="filterOntologyList"
                placeholder="Search for ontology term.."
                :results="ontologyClasses"
            />
        </div>
        <div class="flex flex-row-reverse gap-4">
            <ActionButton @click="displayLoginPanel" v-show="!pb.authStore.isValid" content="Login"/>
            <SecondaryButton @click="logout" v-show="pb.authStore.isValid" content="Log out"/>
        </div>
    </nav>
</template>
