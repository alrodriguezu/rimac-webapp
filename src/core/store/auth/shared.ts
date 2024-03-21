import { IPlan } from "core/model/interfaces/plans.interface";

export interface IUserState {
    name: string
    lastName: string;
    birthDay: string;
    loading: boolean;
    age: number;
    plan: IPlan;

}

export const authInitialState: IUserState = {
    name: '',
    lastName: '',
    birthDay: '',
    loading: false,
    age: 0,
    plan: null,
}