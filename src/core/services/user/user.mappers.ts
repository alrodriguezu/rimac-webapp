import { IPlan } from "core/model/interfaces/plans.interface";
import { IUserState } from '../../store/auth/shared';
import { generateAgeFromYear } from "utils/generate-age-from-year";

export const mapToUser = (data): IUserState => ({
    ...data,
    age: generateAgeFromYear(data.birthDay)
})

export const mapToPlanDetail = (data): IPlan => ({
    ...data
})