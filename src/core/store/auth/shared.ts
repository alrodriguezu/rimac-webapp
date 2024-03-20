export interface IUserState {
    name: string
    lastName: string;
    birthDay: string;
    loading: boolean;
}

export const authInitialState: IUserState = {
    name: '',
    lastName: '',
    birthDay: '',
    loading: false,
}