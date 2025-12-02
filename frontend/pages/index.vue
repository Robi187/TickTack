<template>
  <main>
    <h1>Nuxt + Docker + Node Backend</h1>

    <section>
      <h2>Message vom Backend:</h2>
      <p v-if="pending">Lade...</p>
      <p v-else-if="error">Fehler: {{ error.message }}</p>
      <p v-else>{{ hello?.message }}</p>
    </section>

    <section>
      <h2>Todos aus /api/todos:</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }} – <strong>{{ todo.done ? "✔" : "✗" }}</strong>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const { data: hello, pending, error } = await useFetch(
  "/api/hello",
  {
    baseURL: config.public.apiBase
  }
);

const { data: todos } = await useFetch(
  "/api/todos",
  {
    baseURL: config.public.apiBase
  }
);
</script>

<style scoped>
main {
  max-width: 800px;
  margin: 2rem auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
</style>
