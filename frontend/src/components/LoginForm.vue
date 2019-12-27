<template>
  <div class="login-page">
    <form class="login-form login-page__form">
      <label class="form-input login-form__input" for="">
        <span class="form-input__label">Логин</span>
        <input class="form-input__input" type="text" placeholder="Login">
      </label>
      <label class="form-input login-form__input" for="">
        <span class="form-input__label">Пароль</span>
        <input class="form-input__input" type="text" placeholder="Password">
      </label>
      <button class="button login-form__submit">
        ВОЙТИ!
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.login-page__form {
  width: 400px;
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;

  &__input {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__submit {
    margin: 0 auto;
  }
}

.form-input {
  &__label {
    width: 60px;
    margin-right: 15px;

    text-align: left;
  }

  &__input {
    flex-grow: 1;
    padding: 4px;
  }
}

.button {
  padding: 8px 12px;

  background-color: #41b883;
  border: none;
  border-radius: 14px;
  outline: none;
  cursor: pointer;

  transition: 200ms ease;

  &:hover {
    background-color: #35495e;
  }
}
</style>
