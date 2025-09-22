<script setup>
    import { ref } from 'vue'
    
    const selectAll = ref(false)
    
    const items = ref([
      { selected: false, description: 'Invoice #1234', date: '2025-09-01', status: 'sent' },
      { selected: false, description: 'Invoice #1235', date: '2025-09-02', status: 'error' },
      { selected: false, description: 'Invoice #1236', date: '2025-09-03', status: 'pending' },
      { selected: false, description: 'Invoice #1237', date: '2025-09-04', status: 'sent' },
      { selected: false, description: 'Invoice #1238', date: '2025-09-05', status: 'pending' },
    ])
    
    const toggleAll = () => {
      items.value.forEach(item => {
        item.selected = selectAll.value
      })
    }
</script>

<template>
    <main class="mx-auto p-4 lg:p-8 bg-white max-w-screen-xl border border-slate-200 rounded-md">
    	<table class="w-full divide-y divide-gray-200 border border-gray-200 overflow-y-scroll rounded-md">
    	  <thead class="bg-slate-800 rounded-md">
    	    <tr>
    	      <th class="px-2 py-2 text-left text-sm font-medium text-white">
    	        <input type="checkbox" v-model="selectAll" @change="toggleAll" />
    	      </th>
    	      <th class="px-2 py-2 text-left text-sm font-medium text-white">Mail</th>
    	      <th class="px-2 py-2 text-left text-sm font-medium text-white">Date</th>
    	      <th class="px-2 py-2 text-left text-sm font-medium text-white">Statut</th>
    	    </tr>
    	  </thead>
    	  <tbody class="bg-white divide-y divide-gray-200">
    	    <tr v-for="(item, index) in items" :key="index">
    	      <td class="px-2 py-2">
    	        <input type="checkbox" v-model="item.selected" />
    	      </td>
    	      <td class="px-2 py-2 text-sm text-gray-800">{{ item.description }}</td>
    	      <td class="px-2 py-2 text-sm text-gray-600">{{ item.date }}</td>
    	      <td class="px-2 py-2">
    	        <span
    	          :class="[
    	            'text-xs font-medium px-2 py-1 rounded-full',
    	            item.status === 'sent' ? 'bg-green-100 text-green-800' :
    	            item.status === 'error' ? 'bg-red-100 text-red-800' :
    	            'bg-yellow-100 text-yellow-800'
    	          ]"
    	        >
    	          {{ item.status }}
    	        </span>
    	      </td>
    	    </tr>
    	  </tbody>
    	</table>
    </main>
</template>
