<template>
    <div class="login-page">
        <form
                @submit.prevent="onSubmit()"
                class="login-form login-page__form"
        >
            <label class="form-input login-form__input">
                <span class="form-input__label">Логин</span>
                <input
                        v-model="user"
                        class="form-input__input"
                        placeholder="Login"
                        name="name"
                        type="text">
            </label>
            <label class="form-input login-form__input">
                <span class="form-input__label">Пароль</span>
                <input
                        v-model="password"
                        class="form-input__input"
                        placeholder="Password"
                        required
                        name="password"
                        type="password">
            </label>
            <button class="button login-form__submit">
                ВОЙТИ!
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {validationMixin} from 'vuelidate';
import {required} from 'vuelidate/lib/validators';
import {RouterNames} from '@/router/routerNames';

@Component({
    mixins: [validationMixin],
    validations: {
        user: {required},
        password: {required},
    }
})
export default class LoginForm extends Vue {
    public user: string = '';
    public password: string = '';
    public submitted: boolean = false;


    public async onSubmit() {
        this.submitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
            return;
        }
        const user = {
            name: this.user,
            password: this.password,
        };
        this.login(user).then(() => {
            this.$router.push({ name: RouterNames.MAIN});
        })
    }

}
</script>

<style lang="scss" scoped>
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
