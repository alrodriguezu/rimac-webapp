import { IPlan } from "core/model/interfaces/plans.interface";

export const mapToPlanDetail = (data): IPlan => ({
    ...data
})