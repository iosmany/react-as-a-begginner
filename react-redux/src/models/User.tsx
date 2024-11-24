
interface Claim {
    name: string;
    value: string;
}

interface Role {
    name: string;
    claims: Claim[]
}

interface LoggedInUser {
    id: string;
    userName: string;
    email: string;
    roles: Role[];
    token: string;
}

interface User {
    id: string;
    userName: string;
    email: string;
    roles: Role[];
}

export type {
    Role,
    Claim,  
    User,
    LoggedInUser
}