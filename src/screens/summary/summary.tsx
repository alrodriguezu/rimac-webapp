import { Header } from 'components/header';
import { useAppSelector } from 'core/store/store';
import { useNavigate } from 'react-router-dom';
import './summary.scss';

const Plans = () => {
  const navigate = useNavigate();
  const { name } = useAppSelector((state) => state.user);

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="stepperHorizontal">
        <div className="container">
          <div className="step-1">
            <div className="step-1__left">
              <div className="icon">1</div>
              <div className="text">Planes y coberturas</div>
            </div>
            <img></img>
          </div>
          <div className="step-2">
            <div>Resumen</div>
            <img></img>
          </div>
        </div>
      </div>
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
                  src="src\assets\icon-back.svg"
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
                <img src="src/assets/ic_family.png" />
                <div className="summary__container__content__card__name">{name}</div>
              </div>
              <div className="summary__container__content__card__line" />
              <div className="summary__container__content__card__label">Responsable de pago</div>
              <div className="summary__container__content__card__value">DNI: 30216147</div>
              <div className="summary__container__content__card__value">Celular: 5130216147</div>
              <div className="summary__container__content__card__label">Plan elegido</div>
              <div className="summary__container__content__card__value">Plan en Casa y Clínica</div>
              <div className="summary__container__content__card__value">
                Costo del Plan: $99 al mes
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
