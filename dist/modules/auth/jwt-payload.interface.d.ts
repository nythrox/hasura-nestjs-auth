export interface JwtPayload {
    sub: string;
    username: string;
    "x-hasura-claims": JwtHasuraClaims;
}
export interface JwtHasuraClaims {
    "x-hasura-allowed-roles": HasuraAllowedRolesString[];
    "x-hasura-default-role": HasuraAllowedRolesString;
    "x-hasura-user-id": string;
    "x-hasura-role": HasuraAllowedRolesString;
}
export declare type HasuraAllowedRolesString = keyof typeof HasuraAllowedRoles;
export declare enum HasuraAllowedRoles {
    admin = "admin",
    user = "user"
}
