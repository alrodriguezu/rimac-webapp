import { IPlan } from 'core/model/interfaces/plans.interface';
import { FC } from 'react';
import { summaryPath } from 'core/constants/routes.constants';
import { useNavigate } from 'react-router-dom';
import './benefit-price.scss';

export interface BenefitPriceProps {
  items: Array<IPlan>;
  onSelected?: Function;
  benefitSelect?: string;
}

const BenefitPrice: FC<BenefitPriceProps> = ({ items }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(summaryPath);
  };

  return (
    <div className="benefit-price">
      {items?.map((item, i) => (
        <div key={i} className="benefit-price__card">
          <div className="benefit-price__card__header">
            <div className="benefit-price__card__header__ask">Plan recomendado</div>
            <div>
              <div className="benefit-price__card__header__title">Plan en Casa</div>
              <div className="benefit-price__card__header__subtitle">Costo del Plan</div>
              <div className="benefit-price__card__header__text">$39 al mes</div>
            </div>
            <img src="src/assets/ic-home-light.png" alt="Plan en Casa" />
          </div>
          <div className="benefit-price__card__line" />
          <ul className="benefit-price__card__list">
            <li className="benefit-price__card__elem">
              Médico general a domicilio por S/20 y medicinas cubiertas al 100%.
            </li>
            <li className="benefit-price__card__elem">
              Médico general a domicilio por S/20 y medicinas cubiertas al 100%.
            </li>
            <li className="benefit-price__card__elem">
              Médico general a domicilio por S/20 y medicinas cubiertas al 100%.
            </li>
          </ul>
          <button className="benefit-price__card__action" onClick={onClick}>
            Seleccionar Plan
          </button>
        </div>
      ))}
    </div>
  );
};

export default BenefitPrice;
