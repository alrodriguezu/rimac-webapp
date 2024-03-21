import { Header } from 'components/header';
import { useAppSelector } from 'core/store/store';
import { useNavigate } from 'react-router-dom';
import { authDataKeys } from 'core/constants/auth.constants';
import Stepper from 'components/stepper/stepper';
import './summary.scss';

const Plans = () => {
  const navigate = useNavigate();
  const { name, plan } = useAppSelector((state) => state.user);
  const user = JSON.parse(localStorage.getItem(authDataKeys.KEY_USER));
  console.log(user);
  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <Stepper active={2} image="./line-off.svg" />
      <div className="summary">
        <div className="summary__container">
          <div className="summary__container__content">
            <button
              type="button"
              className="btn summary__container__content__back"
              onClick={onBack}
            >
              <div className="summary__container__content__back__icon">
                <img
                  className="summary__container__content__back__icon__image"
                  src="./icon-back.svg"
                />
              </div>
              Volver
            </button>
            <div className="summary__container__content__description">
              <h2 className="summary__container__content__description__title">
                Resumen del seguro
              </h2>
            </div>
            <div className="summary__container__content__card">
              <div className="summary__container__content__card__asign">
                Precios calculados para:
              </div>
              <div className="summary__container__content__card__profile">
                <img src="./ic_family.png" />
                <div className="summary__container__content__card__profile__name">{name}</div>
              </div>
              <div className="summary__container__content__card__line" />
              <div className="summary__container__content__card__label">Responsable de pago</div>
              <div className="summary__container__content__card__value">
                DNI: {user?.documentNumber}
              </div>
              <div className="summary__container__content__card__value">Celular: {user?.phone}</div>
              <div className="summary__container__content__card__label">Plan elegido</div>
              <div className="summary__container__content__card__value">{plan.name}</div>
              <div className="summary__container__content__card__value">
                Costo del Plan: ${plan.price} al mes
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
