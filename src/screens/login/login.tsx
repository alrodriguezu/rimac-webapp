import Footer from '../../components/footer/footer';
import { Header } from 'components/header';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { formSchema } from './schema';
import './login.scss';

interface IUserForm {
  documentType: string;
  documentNumber: string;
  phone: string;
  checkCommercialCommunications: boolean;
  checkPrivacyPolicy: boolean;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors, isValid },
  } = useForm<IUserForm>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });
  const documentType = watch('documentType');
  const documentNumber = watch('documentNumber');

  const onSubmit = async (values) => {};

  const onchangeDocumentType = () => {
    resetField('documentNumber');
  };

  return (
    <>
      <header className="login__header">
        <Header />
      </header>
      <section className="login">
        <div className="login__container">
          <img src="src/assets/background.png" />
          <form className="login__container__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login__container__form__tag">Seguro Salud Flexible</div>
            <div className="login__container__form__description">
              <h1 className="login__container__form__description__title">
                Creado para ti y tu familia
              </h1>
              <h2 className="login__container__form__description__subtitle">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100%
                online.
              </h2>
            </div>
            <div className="login__container__form__content ">
              <div className="input-group">
                <select
                  className="form-select login__container__form__content__select"
                  {...register('documentType')}
                  onChange={() => onchangeDocumentType()}
                >
                  <option value="1" selected>
                    DNI
                  </option>
                  <option value="2">RUC</option>
                </select>
                <div className="form-floating login__container__form__content--not-space">
                  <input
                    {...register('documentNumber')}
                    className={`form-control login__container__form__content__input ${
                      errors.documentNumber && 'is-invalid'
                    }`}
                    id="floatingDocument"
                    placeholder="Nro. Documento"
                    type="number"
                  />
                  <label id="floatingDocument">Nro. Documento</label>
                </div>
              </div>
            </div>
            {errors.documentNumber?.message && (
              <div className="invalid-feedbacks">{errors.documentNumber?.message}</div>
            )}
            <div className="form-floating login__container__form__content">
              <input
                {...register('phone')}
                type="number"
                className={`form-control login__container__form__content__input ${
                  errors.phone && 'is-invalid'
                }`}
                id="floatingPhone"
                placeholder="Celular"
              />
              <label htmlFor="floatingPhone" id="floatingPhone">
                Celular
              </label>
            </div>
            {errors.phone?.message && (
              <div className="invalid-feedbacks">{errors.phone?.message}</div>
            )}
            <div className="login__container__form__checks">
              <div className="form-check login__container__form__checks__check">
                <input
                  {...register('checkPrivacyPolicy')}
                  className={`form-check-input ${errors.checkPrivacyPolicy && 'is-invalid'}`}
                  type="checkbox"
                  id="privacyPolicy"
                />
                <label className="form-check-label" htmlFor="privacyPolicy">
                  Acepto la Política de Privacidad
                </label>
              </div>
              <div className="form-check login__container__form__checks__check">
                <input
                  {...register('checkCommercialCommunications')}
                  className={`form-check-input ${
                    errors.checkCommercialCommunications && 'is-invalid'
                  }`}
                  type="checkbox"
                  id="commercialCommunications"
                />
                <label className="form-check-label" htmlFor="commercialCommunications">
                  Acepto la Política Comunicaciones Comerciales
                </label>
              </div>
            </div>

            <button type="button" className="login__container__form__extra btn">
              Aplican Términos y Condiciones.
            </button>
            <button type="submit" className="login__container__form__action btn btn-secondary">
              Cotiza aquí
            </button>
          </form>
        </div>
        <img className="login__container--left" src="src/assets/background-blur-left.png"></img>
        <img className="login__container--right" src="src/assets/background-blur-right.png"></img>
      </section>
      <Footer />
    </>
  );
};

export default Login;