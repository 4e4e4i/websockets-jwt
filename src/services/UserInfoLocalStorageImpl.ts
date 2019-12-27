import { UserInfoData, UserInfoStorageService } from '@/services/UserInfoStorageService';

export class UserInfoLocalStorageImpl implements UserInfoStorageService {
    private readonly localStorageKey: string;

    constructor(localStorageKey: string) {
        this.localStorageKey = localStorageKey;
    }

    public load(): UserInfoData | null {
        const item = localStorage.getItem(this.localStorageKey);
        const result = !!item ?
            JSON.parse(item) as UserInfoData
            : null;
        return result;
    }

    public save(userInfo: UserInfoData): void {
        let userInfoJSON: string;
        userInfoJSON = JSON.stringify(userInfo, null, 2);
        localStorage.setItem(this.localStorageKey, userInfoJSON);
    }
}
