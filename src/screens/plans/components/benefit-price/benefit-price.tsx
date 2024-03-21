import { IPlan } from 'core/model/interfaces/plans.interface';
import { FC } from 'react';
import { benefitType, additionalPlanContent } from 'core/constants/plans.constans';
import './benefit-price.scss';

export interface BenefitPriceProps {
  items: Array<IPlan>;
  onSelected?: Function;
  benefitSelect?: string;
}

const BenefitPrice: FC<BenefitPriceProps> = ({ items, benefitSelect, onSelected }) => {
  const finalPrice = (price: number) =>
    benefitSelect === benefitType ? price - price * 0.05 : price;

  return (
    <div className="benefit-price">
      {items?.map((item, i) => (
        <div key={i} className="benefit-price__card">
          <div className="benefit-price__card__header">
            {additionalPlanContent[i]?.tip && (
              <div className="benefit-price__card__header__ask">Plan recomendado</div>
            )}

            <div>
              <div className="benefit-price__card__header__title">{item.name}</div>
              <div className="benefit-price__card__header__subtitle">Costo del Plan</div>
              <div className="benefit-price__card__header__text  benefit-price__card__header__text--before">
                ${item.price} antes
              </div>
              <div className="benefit-price__card__header__text">
                ${finalPrice(Number(item.price))} al mes
              </div>
            </div>
            <img src={additionalPlanContent[i]?.image} alt={item.name} />
          </div>
          <div className="benefit-price__card__line" />
          <ul className="benefit-price__card__list">
            {item.description.map((d) => (
              <li key={d} className="benefit-price__card__elem">
                {d}
              </li>
            ))}
          </ul>
          <button className="benefit-price__card__action" onClick={() => onSelected(item)}>
            Seleccionar Plan
          </button>
        </div>
      ))}
    </div>
  );
};

export default BenefitPrice;
