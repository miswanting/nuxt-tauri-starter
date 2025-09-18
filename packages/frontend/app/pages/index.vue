<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core'

const ui = reactive({
  name: '',
  greetMsg: '',
})

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  ui.greetMsg = await invoke('greet', { name: ui.name })
}
</script>

<template lang="pug">
UDashboardPanel
  template(#header)
    UDashboardNavbar(title="Home")
      template(#leading)
        UDashboardSidebarCollapse
  template(#body)
    main.container
      h1 Welcome to Tauri + Nuxt
      .row
        a(href="https://vitejs.dev" target="_blank")
          img(src="/vite.svg" class="logo vite" alt="Vite logo")
        a(href="https://tauri.app" target="_blank")
          img(src="/tauri.svg" class="logo tauri" alt="Tauri logo")
        a(href="https://vuejs.org" target="_blank")
          img(src="/vue.svg" class="logo vue" alt="Vue logo")
      p Click on the Tauri, Vite, and Vue logos to learn more.
      form.row(@submit.prevent="greet")
        input#greet-input(v-model="ui.name" placeholder="Enter a name...")
        button(type="submit") Greet
      p {{ ui.greetMsg }}
</template>

<style scoped lang="sass">
.container
  justify-content: center
  text-align: center

.logo
  height: 6em
  padding: 1.5em
  will-change: filter
  transition: 0.75s

.logo.vite:hover
  filter: drop-shadow(0 0 2em #747bff)

.logo.tauri:hover
  filter: drop-shadow(0 0 2em #24c8db)

.logo.vue:hover
  filter: drop-shadow(0 0 2em #249b73)

.row
  display: flex
  justify-content: center

input,
button
  border-radius: 8px
  border: 1px solid transparent
  padding: 0.6em 1.2em
  font-size: 1em
  font-weight: 500
  font-family: inherit
  color: #0f0f0f
  background-color: #ffffff
  transition: border-color 0.25s
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2)

button
  cursor: pointer

button:hover
  border-color: #396cd8
button:active
  border-color: #396cd8
  background-color: #e8e8e8

input,
button
  outline: none

#greet-input
  margin-right: 5px

@media (prefers-color-scheme: dark)
  :root
    color: #f6f6f6
    background-color: #2f2f2f

  a:hover
    color: #24c8db

  input,
  button
    color: #ffffff
    background-color: #0f0f0f98
  button:active
    background-color: #0f0f0f69
</style>
