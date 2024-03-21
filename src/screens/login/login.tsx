import Footer from '../../components/footer/footer';
import { Header } from 'components/header';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { formSchema } from './schema/schema';
import { useNavigate } from 'react-router-dom';
import { plansPath } from 'core/constants/routes.constants';
import { loadUserAction } from 'core/store/auth';
import { useAppDispatch } from 'core/store/store';
import { defaultUser } from '../../core/constants/user.constants';
import { useEffect, useState } from 'react';
import { authDataKeys } from 'core/constants/auth.constants';
import useAuth from 'core/hooks/me/use-auth';
import { StorageService } from 'core/services/storage';
import './login.scss';

interface IUserForm {
  documentType: string;
  documentNumber: string;
  phone: string;
  checkCommercialCommunications: boolean;
  checkPrivacyPolicy: boolean;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [noUser, setNoUser] = useState<boolean>(false);
  const { name } = useAuth();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IUserForm>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (user) => {
    if (formValidation(user)) {
      dispatch(loadUserAction());
      localStorage.setItem(authDataKeys.KEY_USER, JSON.stringify(user));
    } else {
      setNoUser(true);
    }
  };

  useEffect(() => {
    name && navigate(plansPath);
  }, [name]);

  const formValidation = (values: IUserForm) => {
    return (
      defaultUser.documentNumer === values.documentNumber &&
      defaultUser.documentoType === values.documentType &&
      defaultUser.phone === values.phone
    );
  };

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
          <img className="login__container__image" src="./background.png" />
          <form className="login__container__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login__container__form__header">
              <div className="login__container__form__header__titles">
                <div className="login__container__form__header__titles__tag">
                  Seguro Salud Flexible
                </div>
                <h1 className="login__container__form__description__title login__container__form__description__title--mobile">
                  Creado para ti y tu familia
                </h1>
              </div>
              <img
                className="login__container__form__header__image-mobile"
                src="./background.png"
              />
            </div>
            <div className="login__container__form__line" />
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
                  defaultValue={1}
                >
                  <option value="1">DNI</option>
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
            {noUser && <div className="invalid-feedbacks">Credenciales incorrectas</div>}
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
        <img className="login__container--left" src="./background-blur-left.png"></img>
        <img className="login__container--right" src="./background-blur-right.png"></img>
        <img
          className="login__container--left--mobile"
          src="./background-blur-left-mobile.png"
        ></img>
        <img
          className="login__container--right--mobile"
          src="./background-blur-right-mobile.png"
        ></img>
      </section>
      <Footer />
    </>
  );
};

export default Login;
