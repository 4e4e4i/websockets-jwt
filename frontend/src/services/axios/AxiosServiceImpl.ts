import { LoginService, LoginModel } from '../LoginService';
import { AxiosResponse } from 'axios';
import axios from 'axios';

class AxiosServiceImpl implements LoginService {

    private baseUrl: string;

    constructor(
        baseUrl: string,
    ) {
        this.baseUrl = baseUrl;
    }

    public login(request: LoginModel): Promise<AxiosResponse> {
        const url = this.baseUrl + '/login';
        const response: Promise<AxiosResponse> =
            axios.request({
                url,
                data: request,
                method: 'POST',
            });
        return response;
    }

    public logout(): Promise<AxiosResponse> {
        const url = this.baseUrl + '/logout';
        const response: Promise<AxiosResponse> =
            axios.request({
                url,
            });
        return response;
    }
}

export { AxiosServiceImpl };
