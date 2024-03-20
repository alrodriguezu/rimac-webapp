import { Header } from 'components/header';
import { Benefits } from 'screens/plans/components/benefits';
import { benefitsItems } from 'core/constants/plans.constans';
import { useAppSelector } from 'core/store/store';
import userApi from 'core/services/user';
import BenefitDetail from './components/benefit-price/benefit-price';
import { useState } from 'react';
import { IPlan } from 'core/model/interfaces/plans.interface';
import { useNavigate } from 'react-router-dom';
import './plans.scss';

const Plans = () => {
  const navigate = useNavigate();
  const { name } = useAppSelector((state) => state.user);
  const [plans, setPlans] = useState<Array<IPlan>>();
  const [benefitSelected, setBenefitSelected] = useState<string>();

  const selectedBenefit = async (select: string) => {
    const data = await userApi.plans();
    setPlans(data);
    setBenefitSelected(select);
  };

  const selectedPlan = () => {
    //reducers
  };

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
      <div className="plans">
        <div className="plans__container">
          <div className="plans__container__content">
            <button type="button" className="btn plans__container__content__back" onClick={onBack}>
              <div className="plans__container__content__back__icon">
                <img
                  className="plans__container__content__back__icon__image"
                  src="src\assets\icon-back.svg"
                />
              </div>
              Volver
            </button>
            <div className="plans__container__content__description">
              <div>
                <h2 className="plans__container__content__description__asign">
                  {name} ¿Para quién deseas cotizar?
                </h2>
                <h3 className="plans__container__content__description__option">
                  Selecciona la opción que se ajuste más a tus necesidades.
                </h3>
              </div>
            </div>
            <div className="plans__container__content__detail">
              <Benefits items={benefitsItems} onSelected={selectedBenefit} />
            </div>
            <div className="plans__container__content__plans">
              <BenefitDetail
                items={plans}
                benefitSelect={benefitSelected}
                onSelected={selectedPlan}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
