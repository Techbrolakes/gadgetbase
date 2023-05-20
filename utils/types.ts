export type IUser = {
    first_name: string;
    last_name: string;
    email: string;
};

export type ILogin = {
    token: string;
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    admin: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type Payload = Record<string, unknown>;
