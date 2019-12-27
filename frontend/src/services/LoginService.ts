import { AxiosResponse } from 'axios';

interface LoginModel {
    name: string;
    password: string;
}

interface LoginService {
    login(request: LoginModel): Promise<void>;

    logout(): Promise<void>;
}

export {LoginService, LoginModel};
