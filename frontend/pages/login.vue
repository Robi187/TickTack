<template>
  <div class="login-container">
    <h1>Login</h1>

    <form @submit.prevent="login">
      <div class="form-group">
        <label>Username</label>
        <input v-model="username" type="text" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" required />
      </div>

      <button :disabled="loading">
        {{ loading ? "Logging in..." : "Login" }}
      </button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { navigateTo } from "#app";

const username = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");

const config = useRuntimeConfig();

async function login() {
  loading.value = true;
  error.value = "";

  try {
    const { data, error: fetchError } = await useFetch("/api/login", {
      method: "POST",
      baseURL: config.public.apiBase,
      body: { username: username.value, password: password.value }
    });

    if (fetchError.value) {
      throw new Error(fetchError.value.data?.message || "Login failed");
    }

    // Token speichern
    if (data.value?.token) {
      localStorage.setItem("token", data.value.token);
    }

    // Weiterleiten
    navigateTo("/");
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 60px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  background: #9bbcf4;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
