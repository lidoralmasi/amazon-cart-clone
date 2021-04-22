import React from "react";
import "./home.css";
import Prod from "../prod/prod";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Prod
          id="12321341"
          title="CORSAIR K70 RGB TKL – Champion Series Tenkeyless Mechanical Gaming Keyboard "
          price={199.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/817DLnXqEYL._AC_SL1500_.jpg"
        />
        <Prod
          id="49538094"
          title="Logitech G Pro Wireless Gaming Mouse with Esports Grade Performance"
          price={239.0}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/41tJa8DO8SL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Prod
          id="4903850"
          title="HyperX Cloud Core Gaming Headset for PC/PS4 (KHX-HSCC-BK) (Renewed)"
          price={59.98}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/7185fNDoUcL._AC_SL1428_.jpg"
        />
        <Prod
          id="23445930"
          title="HyperX Alloy Origins - Mechanical Gaming Keyboard, Software-Controlled Light & Macro Customization"
          price={109.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/7111yEwULnL._AC_SL1500_.jpg"
        />
        <Prod
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Prod
          id="49038509797"
          title="Garmin 010-01769-01 Vivoactive 3, GPS Smartwatch with Contactless Payments and Built-In Sports Apps, Black with Silver Hardware"
          price={520.98}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/41YvvGG4oOL._AC_.jpg"
        />
        <Prod
          id="49038501233"
          title="Garmin Lily, Small GPS Smartwatch with Touchscreen and Patterned Lens, Rose Gold and Light Tan"
          price={210.99}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/81k4sUtBIxL._AC_SL1500_.jpg"
        />
        <Prod
          id="2344593031232"
          title="SAMSUNG Galaxy Watch 3 (45mm, GPS, Bluetooth, Unlocked LTE) Smart Watch Fitness Tracking"
          price={139.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81xpOHoOvPL._AC_SL1500_.jpg"
        />
        <Prod
          id="32543543457878"
          title="SAMSUNG Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch Fitness Tracking"
          price={320.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51bSW9gjoaL._AC_SL1024_.jpg"
        />
      </div>
      <div className="home__row">
        <Prod
          id="90829332"
          title="Apple Watch Series 5 (GPS, 44mm) - Silver Aluminum Case with White Sport Band"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71HtGqb9vXL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
