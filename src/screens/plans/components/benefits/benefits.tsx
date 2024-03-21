import { FC, useState } from 'react';
import './benefits.scss';

export interface BenefitItem {
  title: string;
  text: string;
  image: string;
  ad: boolean;
}

export interface BenefitsProps {
  items: BenefitItem[];
  onSelected: Function;
}

export const Benefits: FC<BenefitsProps> = ({ items, onSelected }) => {
  const [newItems, setNewItems] = useState<Array<BenefitItem>>(items);

  const onchange = (e: any) => {
    const checkedItem = e.target.value;
    onSelected(checkedItem);
    const newList: Array<BenefitItem> = [];
    items.map((item) =>
      newList.push({
        ...item,
        ad: item.title === checkedItem ? true : false,
      })
    );
    setNewItems(newList);
  };

  return (
    <>
      {newItems.map((item) => (
        <div key={item.title} className="form-check benefits">
          <label
            className={`form-check-label benefits__content  ${
              item.ad && 'benefits__content--checked'
            }`}
            htmlFor={item.title}
          >
            <input
              onChange={(e) => onchange(e)}
              className="form-check-input benefits__content__input"
              type="radio"
              name={item.title}
              value={item.title}
              id={item.title}
              checked={item.ad}
            />
            <div className="benefits__content__check ">
              {item.ad ? (
                <img src="./radio-check-on.svg" alt="Check Box" />
              ) : (
                <img src="./radio-check-off.svg" alt="Check Box" />
              )}
            </div>
            <img src={item.image} />
            <div className="benefits__content__title">{item.title}</div>
            <div className="benefits__content__subtitle">{item.text}</div>
          </label>
        </div>
      ))}
    </>
  );
};
export default Benefits;
