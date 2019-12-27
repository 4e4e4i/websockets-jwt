<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Логируемся!</h1>
    <LoginForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'home',
  components: {
    LoginForm,
  },
};
</script>
