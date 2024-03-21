import './stepper.scss';

export interface IStepperProps {
  active: number;
  image: string;
}

const Stepper: React.FC<IStepperProps> = ({ active, image }) => {
  return (
    <div className="stepper">
      <div className="stepper__container">
        <div className="stepper__container__step">
          <div className="stepper__container__step__pos">
            <div className={`icon ${active != 1 && 'icon--off'}`}>1</div>
            <div className={`text ${active != 1 && 'text--off'}`}>Planes y coberturas</div>
          </div>
          <img src={image} />
        </div>
        <div className="stepper__container__step">
          <div className="stepper__container__step__pos">
            <div className={`icon ${active === 1 && 'icon--off'}`}>2</div>
            <div className={`text ${active === 1 && 'text--off'}`}>Resumen</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
