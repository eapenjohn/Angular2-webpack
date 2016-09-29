interface IAuthenticationData {
    token: string;
    refreshToken: string;
}

export class AuthenticationData implements IAuthenticationData {
    token: string;
    refreshToken: string;
}