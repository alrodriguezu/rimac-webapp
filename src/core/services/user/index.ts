import { IUserState } from 'core/store/auth/shared';
import { httpsUnauthenticated } from '../utils/https';
import { IPlan } from 'core/model/interfaces/plans.interface';
import { mapToPlanDetail } from './user.mappers';

export default class userApi {
    static async login(): Promise<IUserState> {
        return httpsUnauthenticated.get(`/user.json`).then(response => response.data)
    }

    static async plans(): Promise<Array<IPlan>> {
        return httpsUnauthenticated.get('/plans.json').then(({ data }) => data.list.map((plan) => mapToPlanDetail(plan)))
    }

}
