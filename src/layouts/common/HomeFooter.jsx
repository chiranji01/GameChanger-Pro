import React from 'react';
import '../../styles/footer.css';

function HomeFooter() {
  return (
    <footer className="section__container__footer__container">
      <span className="bg__blur"></span>
      <span className="bg__blur footer__blur"></span>
      <div className="footer__col">
        {/* <div className="footer__socials">
          <a href="#"><i className="ri-facebook-fill"></i></a>
          <a href="#"><i className="ri-instagram-line"></i></a>
        </div> */}
      </div>
      <ul className="footer__links">
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">About Us</a></li>
      </ul>
      <div className="footer__logo"></div>
      <div className="footer__bar">
        Copyright © 2024 GameChanger Pro.  All rights reserved.
      </div>
    </footer>
  );
}

export default HomeFooter;
