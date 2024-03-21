import { BenefitItem } from "screens/plans/components/benefits";

export const benefitsItems: BenefitItem[] = [
    {
        title: 'Para mí',
        text: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
        image: 'src/assets/ic-protection-light.png',
        ad: false,
    },
    {
        title: 'Para alguien más',
        text: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
        image: 'src/assets/ic-add-user-light.png',
        ad: false,
    },
]

export const additionalPlanContent = [
    { image: "src/assets/ic-home-light.png", tip: false },
    { image: "src/assets/ic-hospital-light.png", tip: true },
    { image: "src/assets/ic-home-light.png", tip: false }
]

export const benefitType = 'Para alguien más';