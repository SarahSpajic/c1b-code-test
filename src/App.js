import React, { useState } from "react";
import Footer from "./Footer.js";
import Hero from "./assets/hero-image.jpeg";
import "../public/assets/logo.svg";
import "../public/assets/logo_white.svg";

export default function App() {
  const [whiteMode, setWhiteMode] = useState(false);

  const onRedirectClick = (e) => {
    window.location.href = "http://www.creditonebank.com";
  };

  return (
    <>
      <div className={whiteMode ? "blue-mode" : "white-mode"}></div>
      <div
        className="centered-hero-image"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="main">
          <div className="main-topic">
            <h1 className="main-title">
              Consolidate Your Debt With A Lower Rate{" "}
            </h1>
            <div className="apr-display">
              <h1 className="apr"> XX.XX% </h1>

              <div className="subtopic">
                <p className="promo-apr">
                  {" "}
                  <strong>Promotional APR</strong> now through{" "}
                  <strong> XX/XX/XXXX </strong>{" "}
                </p>
                <hr />
                <p className="left-border">
                  <strong>A XX.XX% </strong> variable APR will apply after the
                  promotional period*
                </p>
              </div>
            </div>

            <h1 className="subtopic-3">
              {" "}
              Manage life's expenses by transferring a balance to your Credit
              One Bank account today{" "}
            </h1>
            <div className="button-group">
              <button
                className="accept-btn"
                onClick={() => setWhiteMode((prevMode) => !prevMode)}
              >
                Accept Now{" "}
              </button>
              <button className="no-btn" onClick={() => onRedirectClick()}>
                {" "}
                No Thanks{" "}
              </button>
              <p className="fee">A fee may apply</p>
              <p className="disclosures">
                *See the Disclosures and Terms & Conditions on the application
                page by selecting the 'Accept Now' button
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
