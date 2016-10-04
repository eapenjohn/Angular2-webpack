interface IAuthenticationData {
    token: string;
    refreshToken: string;
    isAuthenticated: boolean
}

export class AuthenticationData implements IAuthenticationData {
    token: string;
    refreshToken: string;
    isAuthenticated: boolean
}