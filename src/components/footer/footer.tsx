import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <img src="./images/logo-footer.png" alt="Logo Insuma" />
        </div>
        <div className="footer__container__line" />
        <div className="footer__container__right">
          <span>© 2023 RIMAC Seguros y Reaseguros.</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
