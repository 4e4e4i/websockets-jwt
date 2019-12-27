import { AxiosResponse } from 'axios';

interface LoginModel {
    name: string;
    password: string;
}

interface LoginService {
    login(request: LoginModel): Promise<AxiosResponse>;

    logout(): Promise<AxiosResponse>;
}

export {LoginService, LoginModel};
