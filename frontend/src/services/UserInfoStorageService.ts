interface UserInfoData {
    authenticated: boolean;
}

interface UserInfoStorageService {
    save(userInfo: UserInfoData): void;
    load(): UserInfoData | null;
}

export { UserInfoStorageService, UserInfoData };
