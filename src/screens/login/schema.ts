import * as yup from 'yup';

const TEXT_MIN_CHARACTER_ERROR = 'El celular debe tener mínimo 9 caracteres.';
const TEXT_FIELD_REQUIRED_ERROR = 'El campo es requerido.';
const TEXT_CE_MIN_CHARACTERS_ERROR = 'El carnet de extranjería debe tener como mínimo 7 caracteres.';
const TEXT_CE_MAX_CHARACTERS_ERROR = 'El carnet de extranjería debe tener como máximo 12 caracteres.';
const TEXT_DNI_CHARACTERS_ERROR = 'El DNI debe tener como mínimo 8 caracteres.';
const TEXT_DOCUMENT_TYPE_NUMERIC_ERROR = 'El DNI debe tener solo números.';

const conditionalDocumentType = (documentType: string) => {
    switch (documentType) {
        case '1':
            return yup
                .string()
                .trim()
                .required(TEXT_FIELD_REQUIRED_ERROR)
                .matches(NUMBER_REGEX, TEXT_DOCUMENT_TYPE_NUMERIC_ERROR)
                .length(8, TEXT_DNI_CHARACTERS_ERROR);
        case '2':
            return yup
                .string()
                .trim()
                .required(TEXT_FIELD_REQUIRED_ERROR)
                .min(7, TEXT_CE_MIN_CHARACTERS_ERROR)
                .max(12, TEXT_CE_MAX_CHARACTERS_ERROR);
        default:
            return yup.string().required(TEXT_FIELD_REQUIRED_ERROR);
    }
};

export const formSchema = yup.object().shape({
    phone: yup.string().required(TEXT_FIELD_REQUIRED_ERROR).min(9, TEXT_MIN_CHARACTER_ERROR),
    documentType: yup.string().required(TEXT_FIELD_REQUIRED_ERROR),
    documentNumber: yup.string().when('documentType', conditionalDocumentType).required(TEXT_FIELD_REQUIRED_ERROR),
    checkCommercialCommunications: yup.boolean().required(TEXT_FIELD_REQUIRED_ERROR).oneOf([true], "The terms and conditions must be accepted."),
    checkPrivacyPolicy: yup.boolean().required(TEXT_FIELD_REQUIRED_ERROR).oneOf([true], "The terms and conditions must be accepted."),
});
