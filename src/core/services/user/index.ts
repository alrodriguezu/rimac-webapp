import { httpsUnauthenticated } from '../utils/https';

export default class bannersApi {
    static async login(): Promise<void> {
        return httpsUnauthenticated.delete(`/api/user.json`);
    }

    static async destroy({ rucSponsor, guid }): Promise<void> {
        return httpsUnauthenticated.delete(`/management/distributors/${rucSponsor}/banners/${guid}`);
    }

}
