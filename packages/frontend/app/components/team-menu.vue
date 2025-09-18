<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

interface Props {
  collapsed?: boolean
}
interface ModelValue { }
interface UiData {
}
const props = withDefaults(defineProps<Props>(), {
  collapsed: true,
})
const modelValue = defineModel<ModelValue>()
const ui = reactive<UiData>({
})

const teams = ref([{
  label: 'Nuxt',
  avatar: {
    src: 'https://github.com/nuxt.png',
    alt: 'Nuxt',
  },
}, {
  label: 'NuxtHub',
  avatar: {
    src: 'https://github.com/nuxt-hub.png',
    alt: 'NuxtHub',
  },
}, {
  label: 'NuxtLabs',
  avatar: {
    src: 'https://github.com/nuxtlabs.png',
    alt: 'NuxtLabs',
  },
}])
const selectedTeam = ref(teams.value[0])

const items = computed<DropdownMenuItem[][]>(() => {
  return [teams.value.map(team => ({
    ...team,
    onSelect() {
      selectedTeam.value = team
    },
  })), [{
    label: 'Create team',
    icon: 'i-lucide-circle-plus',
  }, {
    label: 'Manage teams',
    icon: 'i-lucide-cog',
  }]]
})
</script>

<template lang="pug">
UDropdownMenu(:items="items" :ui="{ content: collapsed ? 'w-40' : 'w-(--reka-dropdown-menu-trigger-width)' }")
  UButton(color="neutral" variant="ghost" block :square="props.collapsed" :class="[!collapsed && 'py-2']" v-bind="{...selectedTeam, label: props.collapsed ? undefined : selectedTeam?.label, trailingIcon: props.collapsed ? undefined : 'i-lucide-chevrons-up-down'}")
</template>

<style scoped lang="sass">
</style>
