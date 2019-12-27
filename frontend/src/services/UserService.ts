interface UserInfo {
    user?: string;
}

interface UserService {
    isAuthenticated(): boolean;
}

export { UserService, UserInfo };
