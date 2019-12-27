import {LoginService} from '@/services/LoginService';
import {UserInfo, UserService} from '@/services/UserService';
import axios, {AxiosResponse} from "axios";

class LoginServiceMock implements LoginService, UserService {

    private authenticated: boolean = false;
    private user?: string = undefined;

    public login(request: any): Promise<void> {
        this.authenticated = false;
        this.user = undefined;

        const { user, password } = request;

        if (user === null) {
            throw new Error('Имя пользователя не должно быть пустым');
        }
        if (password === null) {
            throw new Error('Пароль не должен быть пустым');
        }

        if ( user === 'websocket' && password === '12345') {
            this.authenticated = true;
            this.user = user;
            return Promise.resolve();
        }

        throw new Error('Имя пользователя или пароль не найдены');

    }

    public getUserInfo(): UserInfo {
        return { user: this.user };
    }

    public isAuthenticated(): boolean {
        return this.authenticated;
    }

    public logout(): Promise<void> {
        this.authenticated = false;
        return  Promise.resolve();
    }

}

export { LoginServiceMock };
