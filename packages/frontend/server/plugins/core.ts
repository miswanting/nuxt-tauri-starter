export default defineNitroPlugin(() => {
  console.log(`Load Plugin: Core`)
  const nitroApp = useNitroApp()
  nitroApp.core = new Core()
  nitroApp.core.start()
})

declare module 'nitropack' {
  interface NitroApp {
    core: Core
  }
}
