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
            <button
              type="button"
              className="btn stepper__container__step__pos--mobile"
              onClick={() => {}}
            >
              <div className="plans__container__content__back__icon">
                <img
                  className="plans__container__content__back__icon__image"
                  src="./images/icon-back.svg"
                />
              </div>
            </button>
            <div className="text--on">PASO 1 DE 2</div>
            <div className={`icon ${active != 1 && 'icon--off'}`}>1</div>
            <div className={`text ${active != 1 && 'text--off'}`}>Planes y coberturas</div>
          </div>
          <img className="stepper__container__step__pos__image" src={image} />
          <img
            className="stepper__container__step__pos__image--mobile"
            src="./images/atoms_stepper_progress.svg"
          />
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
