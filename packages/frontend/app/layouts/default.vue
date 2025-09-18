<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const ui = reactive({
  open: false,
})

const items = [[{
  label: 'Home',
  icon: 'i-lucide-house',
  to: '/',
  onSelect: () => {
    ui.open = false
  },
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  to: '/inbox',
  badge: '4',
  onSelect: () => {
    ui.open = false
  },
}, {
  label: 'Customers',
  icon: 'i-lucide-users',
  to: '/customers',
  onSelect: () => {
    ui.open = false
  },
}, {
  label: 'Settings',
  to: '/settings',
  icon: 'i-lucide-settings',
  defaultOpen: true,
  type: 'trigger',
  children: [{
    label: 'General',
    to: '/settings',
    exact: true,
    onSelect: () => {
      ui.open = false
    },
  }, {
    label: 'Members',
    to: '/settings/members',
    onSelect: () => {
      ui.open = false
    },
  }, {
    label: 'Notifications',
    to: '/settings/notifications',
    onSelect: () => {
      ui.open = false
    },
  }, {
    label: 'Security',
    to: '/settings/security',
    onSelect: () => {
      ui.open = false
    },
  }],
}], [{
  label: 'Feedback',
  icon: 'i-lucide-message-circle',
  to: 'https://github.com/nuxt-ui-templates/dashboard',
  target: '_blank',
}, {
  label: 'Help & Support',
  icon: 'i-lucide-info',
  to: 'https://github.com/nuxt-ui-templates/dashboard',
  target: '_blank',
}]] satisfies NavigationMenuItem[][]
</script>

<template lang="pug">
UDashboardGroup
  UDashboardSidebar(collapsible v-model:open="ui.open")
    template(#header="{collapsed}")
      TeamMenu(:collapsed="collapsed")
    template(#default="{collapsed}")
      UDashboardSearchButton(:collapsed="collapsed")
      UNavigationMenu(:collapsed="collapsed" :items="items[0]" orientation="vertical")
      UNavigationMenu.mt-auto(:collapsed="collapsed" :items="items[1]" orientation="vertical")
    template(#footer="{collapsed}")
      UserMenu(:collapsed="collapsed")
  UDashboardSearch
  slot
</template>

<style scoped lang="sass">
</style>
