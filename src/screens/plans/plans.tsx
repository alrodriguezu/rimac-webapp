import { Header } from 'components/header';
import { Benefits } from 'screens/plans/components/benefits';
import { benefitsItems } from 'core/constants/plans.constans';
import { useAppDispatch, useAppSelector } from 'core/store/store';
import userApi from 'core/services/user';
import BenefitDetail from './components/benefit-price/benefit-price';
import { useState } from 'react';
import { IPlan } from 'core/model/interfaces/plans.interface';
import { useNavigate } from 'react-router-dom';
import { clearData, updateData } from 'core/store/auth';
import { summaryPath } from 'core/constants/routes.constants';
import { StorageService } from 'core/services/storage';
import Stepper from 'components/stepper/stepper';
import './plans.scss';

const Plans = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { name, age } = useAppSelector((state) => state.user);
  const [plans, setPlans] = useState<Array<IPlan>>([]);
  const [benefitSelected, setBenefitSelected] = useState<string>();

  const selectedBenefit = async (select: string) => {
    const data = await userApi.plans();
    const updatePlans = data.filter((p) => Number(p.age) >= age);
    setPlans(updatePlans);
    setBenefitSelected(select);
  };

  const selectedPlan = (selected: IPlan) => {
    dispatch(
      updateData({
        ...selected,
      })
    );
    navigate(summaryPath);
  };

  const onBack = () => {
    dispatch(clearData());
    StorageService.clear();
    navigate(-1);
  };

  return (
    <>
      <Header />
      <Stepper active={1} image="./images/line-on.svg" />
      <div className="plans">
        <div className="plans__container">
          <div className="plans__container__content">
            <button type="button" className="btn plans__container__content__back" onClick={onBack}>
              <div className="plans__container__content__back__icon">
                <img
                  className="plans__container__content__back__icon__image"
                  src="./images/icon-back.svg"
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
