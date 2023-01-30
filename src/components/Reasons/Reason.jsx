import React from "react";
import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reason = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="error" />
        <img src={image2} alt="error" />
        <img src={image3} alt="error" />
        <img src={image4} alt="error" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span> choose us? </span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="error" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>

          <div>
            <img src={tick} alt="error" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>

          <div>
            <img src={tick} alt="error" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="error" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="error" />
          <img src={adidas} alt="error" />
          <img src={nike} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
